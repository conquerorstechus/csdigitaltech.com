/**
 * Decide whether the auto-blog workflow should publish.
 *
 * Schedule settings live in content/blog-schedule.json.
 * Successful runs are recorded in content/blog-schedule-state.json.
 *
 *   node scripts/check-blog-schedule.mjs
 *   node scripts/check-blog-schedule.mjs --mark
 *
 * --mark records a run and does not publish. The workflow commits that
 * update together with the new post.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const schedulePath = path.join(root, 'content', 'blog-schedule.json')
const statePath = path.join(root, 'content', 'blog-schedule-state.json')
const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
const frequencies = new Set(['interval', 'daily', 'weekly', 'dates', 'once'])
const graceMinutes = 15

function fail(message) {
  console.error(message)
  process.exit(1)
}

function readJson(filePath, label) {
  if (!fs.existsSync(filePath)) fail(`${label} not found: ${filePath}`)
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'))
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    fail(`Could not parse ${label}: ${message}`)
  }
}

function writeOutput(key, value) {
  const line = `${key}=${String(value).replace(/\r?\n/g, ' ')}`
  console.log(line)
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `${line}\n`)
  }
}

function cleanList(value) {
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean)
  if (typeof value !== 'string') return []
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}

function envText(name) {
  const value = process.env[name]
  return typeof value === 'string' ? value.trim() : ''
}

function parseClock(value, label) {
  const match = /^(\d{1,2}):(\d{2})$/.exec(value)
  if (!match) fail(`${label} must be HH:mm.`)
  const hour = Number(match[1])
  const minute = Number(match[2])
  if (hour > 23 || minute > 59) fail(`${label} must be a real time.`)
  return { hour, minute, text: `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}` }
}

function parseCount(value, label, min, max) {
  const count = Number(value)
  if (!Number.isInteger(count) || count < min || count > max) {
    fail(`${label} must be a whole number from ${min} to ${max}.`)
  }
  return count
}

function localParts(now, timeZone) {
  let parts
  try {
    parts = new Intl.DateTimeFormat('en-US', {
      timeZone,
      weekday: 'long',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    }).formatToParts(now)
  } catch {
    fail(`timezone is not a valid IANA name: ${timeZone}`)
  }

  const picked = {}
  for (const part of parts) {
    if (part.type !== 'literal') picked[part.type] = part.value
  }

  let hour = Number(picked.hour)
  if (hour === 24) hour = 0
  const minute = Number(picked.minute)
  return {
    date: `${picked.year}-${picked.month}-${picked.day}`,
    weekday: picked.weekday.toLowerCase(),
    minutes: hour * 60 + minute,
  }
}

function loadSchedule() {
  const file = readJson(schedulePath, 'content/blog-schedule.json')
  const schedule = {
    enabled: file.enabled !== false,
    timezone: typeof file.timezone === 'string' && file.timezone.trim() ? file.timezone.trim() : 'Asia/Kolkata',
    frequency: typeof file.frequency === 'string' ? file.frequency.trim().toLowerCase() : '',
    intervalMinutes: file.intervalMinutes,
    time: typeof file.time === 'string' ? file.time.trim() : '',
    days: cleanList(file.days).map((day) => day.toLowerCase()),
    dates: cleanList(file.dates),
    runAt: typeof file.runAt === 'string' ? file.runAt.trim() : '',
    postsPerRun: file.postsPerRun ?? 1,
    gapMinutes: file.gapMinutes ?? 5,
    maxRuns: file.maxRuns == null || file.maxRuns === '' ? null : file.maxRuns,
    mode: file.mode === 'check' ? 'check' : 'publish',
  }

  const frequency = envText('BLOG_FREQUENCY').toLowerCase()
  const time = envText('BLOG_TIME')
  const days = envText('BLOG_DAYS')
  const dates = envText('BLOG_DATES')
  const runAt = envText('BLOG_RUN_AT')
  const interval = envText('BLOG_INTERVAL_MINUTES')
  const posts = envText('BLOG_POSTS_PER_RUN')
  const gap = envText('BLOG_GAP_MINUTES')
  const maxRuns = envText('BLOG_MAX_RUNS')
  const mode = envText('BLOG_MODE').toLowerCase()

  if (frequency) schedule.frequency = frequency
  if (time) schedule.time = time
  if (days) schedule.days = cleanList(days).map((day) => day.toLowerCase())
  if (dates) schedule.dates = cleanList(dates)
  if (runAt) schedule.runAt = runAt
  if (interval) schedule.intervalMinutes = Number(interval)
  if (posts) schedule.postsPerRun = Number(posts)
  if (gap) schedule.gapMinutes = Number(gap)
  if (maxRuns) schedule.maxRuns = maxRuns === 'null' ? null : Number(maxRuns)
  if (mode) schedule.mode = mode

  if (schedule.mode !== 'check' && schedule.mode !== 'publish') {
    fail('mode must be check or publish.')
  }
  if (!frequencies.has(schedule.frequency)) {
    fail('frequency must be interval, daily, weekly, dates, or once.')
  }

  schedule.postsPerRun = parseCount(schedule.postsPerRun, 'postsPerRun', 1, 5)
  schedule.gapMinutes = parseCount(schedule.gapMinutes, 'gapMinutes', 0, 180)
  if (schedule.maxRuns != null) schedule.maxRuns = parseCount(schedule.maxRuns, 'maxRuns', 1, 1000)

  if (schedule.frequency === 'interval') {
    schedule.intervalMinutes = parseCount(schedule.intervalMinutes, 'intervalMinutes', 5, 10080)
  }
  if (schedule.frequency === 'daily' || schedule.frequency === 'weekly' || schedule.frequency === 'dates') {
    schedule.clock = parseClock(schedule.time, 'time')
  }
  if (schedule.frequency === 'weekly') {
    if (!schedule.days.length) fail('weekly frequency needs at least one day.')
    const unknown = schedule.days.filter((day) => !weekdays.includes(day))
    if (unknown.length) fail(`Unknown days: ${unknown.join(', ')}. Use monday through sunday.`)
  }
  if (schedule.frequency === 'dates') {
    if (!schedule.dates.length) fail('dates frequency needs at least one YYYY-MM-DD date.')
    const invalid = schedule.dates.filter((date) => !/^\d{4}-\d{2}-\d{2}$/.test(date))
    if (invalid.length) fail(`Dates must be YYYY-MM-DD: ${invalid.join(', ')}`)
  }
  if (schedule.frequency === 'once') {
    if (!schedule.runAt) fail('once frequency needs runAt, such as 2026-10-06T11:30:00+05:30.')
    const parsed = Date.parse(schedule.runAt)
    if (Number.isNaN(parsed)) fail('runAt must be an ISO date and time.')
    schedule.runAtMs = parsed
  }

  localParts(new Date(), schedule.timezone)
  return schedule
}

function loadState() {
  if (!fs.existsSync(statePath)) {
    return { runCount: 0, lastRunAt: null, lastSlot: null }
  }
  const state = readJson(statePath, 'content/blog-schedule-state.json')
  return {
    runCount: Number.isInteger(state.runCount) ? state.runCount : 0,
    lastRunAt: typeof state.lastRunAt === 'string' ? state.lastRunAt : null,
    lastSlot: typeof state.lastSlot === 'string' ? state.lastSlot : null,
  }
}

function due(schedule, state, now) {
  if (schedule.frequency === 'interval') {
    if (!state.lastRunAt) return { publish: true, slot: `interval:${now.toISOString()}`, reason: 'First interval run is due.' }
    const elapsed = now.getTime() - Date.parse(state.lastRunAt)
    if (Number.isNaN(elapsed)) return { publish: true, slot: `interval:${now.toISOString()}`, reason: 'Last run time was invalid, so this interval is due.' }
    if (elapsed >= schedule.intervalMinutes * 60 * 1000) {
      return { publish: true, slot: `interval:${now.toISOString()}`, reason: `${schedule.intervalMinutes} minutes have passed since the last run.` }
    }
    return { publish: false, slot: state.lastSlot, reason: `Waiting for ${schedule.intervalMinutes} minutes since the last run.` }
  }

  if (schedule.frequency === 'once') {
    const slot = schedule.runAt
    if (state.lastSlot === slot) return { publish: false, slot, reason: 'This one-time run already published.' }
    if (now.getTime() >= schedule.runAtMs) return { publish: true, slot, reason: 'The one-time runAt time has arrived.' }
    return { publish: false, slot, reason: 'The one-time runAt time is still in the future.' }
  }

  const local = localParts(now, schedule.timezone)
  const slot = `${local.date}T${schedule.clock.text}`
  const start = schedule.clock.hour * 60 + schedule.clock.minute
  const inWindow = local.minutes >= start && local.minutes < start + graceMinutes

  if (schedule.frequency === 'weekly' && !schedule.days.includes(local.weekday)) {
    return { publish: false, slot, reason: `${local.weekday} is not a scheduled day.` }
  }
  if (schedule.frequency === 'dates' && !schedule.dates.includes(local.date)) {
    return { publish: false, slot, reason: `${local.date} is not a scheduled date.` }
  }
  if (state.lastSlot === slot) return { publish: false, slot, reason: 'This date and time already published.' }
  if (!inWindow) return { publish: false, slot, reason: `Outside ${schedule.clock.text} ${schedule.timezone}.` }
  return { publish: true, slot, reason: `Scheduled time ${schedule.clock.text} ${schedule.timezone} is open.` }
}

function mark(slot) {
  if (!slot) fail('A schedule slot is required to record a run.')
  const state = loadState()
  state.runCount += 1
  state.lastRunAt = new Date().toISOString()
  state.lastSlot = slot
  fs.writeFileSync(statePath, `${JSON.stringify(state, null, 2)}\n`)
  console.log(`Recorded run ${state.runCount} for ${state.lastSlot}.`)
}

function main() {
  const schedule = loadSchedule()
  const state = loadState()
  const now = new Date()

  if (process.argv.includes('--mark')) {
    mark(envText('BLOG_SLOT'))
    return
  }

  const force = envText('BLOG_FORCE') === 'true'
  let decision = due(schedule, state, now)

  if (!schedule.enabled && !force) {
    decision = { publish: false, slot: decision.slot, reason: 'Schedule is disabled.' }
  } else if (schedule.maxRuns != null && state.runCount >= schedule.maxRuns && !force) {
    decision = {
      publish: false,
      slot: decision.slot,
      reason: `Already published ${state.runCount} of ${schedule.maxRuns} runs. Raise maxRuns or reset blog-schedule-state.json.`,
    }
  } else if (force) {
    decision = {
      publish: true,
      slot: decision.slot || `force:${now.toISOString()}`,
      reason: 'Forced by a manual workflow run.',
    }
  }

  writeOutput('publish', decision.publish ? 'true' : 'false')
  writeOutput('mode', schedule.mode)
  writeOutput('posts', schedule.postsPerRun)
  writeOutput('gap', schedule.gapMinutes)
  writeOutput('slot', decision.slot || '')
  writeOutput('reason', decision.reason)
}

main()
