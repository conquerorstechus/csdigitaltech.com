import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Google Calendar appointment page used by every "Schedule a demo / call" button. */
export const SCHEDULE_APPOINTMENT_URL = 'https://calendar.app.google/5WqZQDXD559r7Am1A'
