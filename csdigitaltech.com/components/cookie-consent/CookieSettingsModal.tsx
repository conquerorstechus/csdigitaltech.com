'use client'

import { useState } from 'react'
import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { useCookieConsent } from './CookieConsentProvider'
import type { StoredConsent } from '@/lib/cookie-consent'

type DraftPreferences = {
  analytics: boolean
  marketing: boolean
}

const categories = [
  {
    id: 'necessary-cookies',
    title: 'Necessary Cookies',
    description: 'Required for core site functionality and to remember this choice. Always on.',
    locked: true,
  },
  {
    id: 'analytics-cookies',
    title: 'Analytics Cookies',
    description: 'Optional. Used to understand site traffic, including Google Analytics. Off until you allow them.',
    locked: false,
    key: 'analytics',
  },
  {
    id: 'marketing-cookies',
    title: 'Marketing Cookies',
    description: 'Optional. Used to support marketing activities. Off until you allow them.',
    locked: false,
    key: 'marketing',
  },
] as const

export default function CookieSettingsModal() {
  const { consent, settingsOpen, closeSettings, savePreferences } = useCookieConsent()
  const [draft, setDraft] = useState<DraftPreferences>({ analytics: false, marketing: false })
  const [draftSource, setDraftSource] = useState<StoredConsent | null | undefined>(undefined)

  if (settingsOpen && draftSource !== consent) {
    setDraftSource(consent)
    setDraft({
      analytics: consent?.analytics ?? false,
      marketing: consent?.marketing ?? false,
    })
  }

  if (!settingsOpen && draftSource !== undefined) {
    setDraftSource(undefined)
  }

  const setOptional = (key: 'analytics' | 'marketing', enabled: boolean) => {
    setDraft((current) => ({ ...current, [key]: enabled }))
  }

  return (
    <Dialog.Root
      open={settingsOpen}
      onOpenChange={(open) => {
        if (!open) closeSettings()
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 z-[2147483002] bg-[#16003A]/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0' />
        <Dialog.Content
          className='fixed left-1/2 top-1/2 z-[2147483003] grid max-h-[min(90vh,44rem)] w-[calc(100%-1.5rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-5 overflow-y-auto rounded-2xl border border-[#262051]/10 bg-white p-5 text-gray-900 shadow-2xl focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:p-6'
          aria-describedby='cookie-settings-description'
        >
          <div className='pr-8'>
            <Dialog.Title className='text-2xl font-bold text-[#262051]'>Cookie Settings</Dialog.Title>
            <Dialog.Description id='cookie-settings-description' className='mt-2 text-sm leading-6 text-gray-600'>
              Choose which optional cookies this browser may use. Necessary cookies stay on. You can change this choice later from the footer. We ask again after 6 months.
            </Dialog.Description>
          </div>

          <form
            className='space-y-3'
            onSubmit={(event) => {
              event.preventDefault()
              savePreferences(draft)
            }}
          >
            <fieldset className='space-y-3'>
              <legend className='sr-only'>Cookie categories</legend>
              {categories.map((category) => {
                const checked = category.locked
                  ? true
                  : category.key === 'analytics'
                    ? draft.analytics
                    : draft.marketing
                const descriptionId = `${category.id}-description`

                return (
                  <div key={category.id} className='flex items-start justify-between gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4'>
                    <div className='min-w-0'>
                      <Label htmlFor={category.id} className='text-base font-semibold text-[#262051]'>
                        {category.title}
                      </Label>
                      <p id={descriptionId} className='mt-1 text-sm leading-6 text-gray-600'>
                        {category.description}
                      </p>
                    </div>
                    <Switch
                      id={category.id}
                      checked={checked}
                      disabled={category.locked}
                      aria-describedby={descriptionId}
                      aria-readonly={category.locked || undefined}
                      onCheckedChange={(value) => {
                        if (category.locked || !('key' in category)) return
                        setOptional(category.key, value)
                      }}
                      className='mt-1 data-[state=checked]:bg-[#262051] data-[state=unchecked]:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-100'
                    />
                  </div>
                )
              })}
            </fieldset>

            <div className='flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between'>
              <Link
                href='/privacy-policy'
                className='text-sm font-semibold text-[#262051] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#262051] rounded-sm'
              >
                Privacy Policy
              </Link>
              <button
                type='submit'
                id='cookie-settings-save'
                className='inline-flex min-h-11 items-center justify-center rounded-full bg-[#FF1212] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#cc0e0e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1212] focus-visible:ring-offset-2'
              >
                Save My Preferences
              </button>
            </div>
          </form>

          <Dialog.Close
            className='absolute right-4 top-4 rounded-md p-1 text-[#262051] opacity-80 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#262051]'
            aria-label='Close cookie settings'
          >
            <X className='h-5 w-5' />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
