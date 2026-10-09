/**
 * Run the blog schedule on this machine so localhost updates.
 * GitHub's timer does not change the local site.
 *
 *   node scripts/run-blog-schedule.mjs
 *   node scripts/run-blog-schedule.mjs --watch
 */
import { spawnSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const site = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const watch = process.argv.includes('--watch')

function run(command, args, env = {}, inherit = false) {
  const result = spawnSync(command, args, {
    cwd: site,
    shell: true,
    encoding: 'utf8',
    stdio: inherit ? 'inherit' : 'pipe',
    env: { ...process.env, ...env },
  })
  if (!inherit) {
    if (result.stdout) process.stdout.write(result.stdout)
    if (result.stderr) process.stderr.write(result.stderr)
  }
  return { status: result.status ?? 1, stdout: result.stdout ?? '' }
}

function readDecision() {
  const check = run('node', ['scripts/check-blog-schedule.mjs'])
  const decision = {}
  for (const line of check.stdout.split(/\r?\n/)) {
    const eq = line.indexOf('=')
    if (eq === -1) continue
    decision[line.slice(0, eq)] = line.slice(eq + 1)
  }
  return decision
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function tick() {
  const decision = readDecision()
  if (decision.publish !== 'true') {
    console.log(decision.reason || 'No blog update is due.')
    return
  }

  const posts = Number(decision.posts || 1)
  const gapMinutes = Number(decision.gap || 0)
  console.log(decision.reason || 'Blog update is due.')

  if (decision.mode === 'check') {
    const checked = run('npx', ['tsx', 'scripts/check-blog-content.ts'], {}, true)
    if (checked.status !== 0) return false
  } else {
    for (let index = 1; index <= posts; index += 1) {
      if (index > 1 && gapMinutes > 0) {
        console.log(`Waiting ${gapMinutes} minutes before the next post.`)
        await sleep(gapMinutes * 60 * 1000)
      }
      const generated = run('npx', ['tsx', 'scripts/generate-post.ts'], {}, true)
      if (generated.status !== 0) return false
    }
  }

  run('node', ['scripts/check-blog-schedule.mjs', '--mark'], {
    BLOG_SLOT: decision.slot || `local:${new Date().toISOString()}`,
  })
  console.log('Local blog schedule finished. Refresh /blog to see the update.')
  return true
}

async function main() {
  do {
    const published = await tick()
    if (!watch) {
      if (!published) process.exit(1)
      break
    }
    await sleep(30_000)
  } while (watch)
}

main()
