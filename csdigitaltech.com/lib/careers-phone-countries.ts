export type PhoneCountryOption = {
  code: string
  label: string
}

export const PHONE_COUNTRY_CODES: PhoneCountryOption[] = [
  { code: '+1', label: '+1 United States' },
  { code: '+91', label: '+91 India' },
  { code: '+44', label: '+44 United Kingdom' },
  { code: '+61', label: '+61 Australia' },
  { code: '+49', label: '+49 Germany' },
  { code: '+33', label: '+33 France' },
  { code: '+39', label: '+39 Italy' },
  { code: '+34', label: '+34 Spain' },
  { code: '+31', label: '+31 Netherlands' },
  { code: '+46', label: '+46 Sweden' },
  { code: '+47', label: '+47 Norway' },
  { code: '+45', label: '+45 Denmark' },
  { code: '+41', label: '+41 Switzerland' },
  { code: '+32', label: '+32 Belgium' },
  { code: '+353', label: '+353 Ireland' },
  { code: '+351', label: '+351 Portugal' },
  { code: '+48', label: '+48 Poland' },
  { code: '+43', label: '+43 Austria' },
  { code: '+52', label: '+52 Mexico' },
  { code: '+55', label: '+55 Brazil' },
  { code: '+54', label: '+54 Argentina' },
  { code: '+57', label: '+57 Colombia' },
  { code: '+56', label: '+56 Chile' },
  { code: '+971', label: '+971 UAE' },
  { code: '+966', label: '+966 Saudi Arabia' },
  { code: '+974', label: '+974 Qatar' },
  { code: '+965', label: '+965 Kuwait' },
  { code: '+973', label: '+973 Bahrain' },
  { code: '+968', label: '+968 Oman' },
  { code: '+972', label: '+972 Israel' },
  { code: '+90', label: '+90 Turkey' },
  { code: '+27', label: '+27 South Africa' },
  { code: '+234', label: '+234 Nigeria' },
  { code: '+254', label: '+254 Kenya' },
  { code: '+20', label: '+20 Egypt' },
  { code: '+81', label: '+81 Japan' },
  { code: '+82', label: '+82 South Korea' },
  { code: '+86', label: '+86 China' },
  { code: '+852', label: '+852 Hong Kong' },
  { code: '+65', label: '+65 Singapore' },
  { code: '+60', label: '+60 Malaysia' },
  { code: '+62', label: '+62 Indonesia' },
  { code: '+63', label: '+63 Philippines' },
  { code: '+66', label: '+66 Thailand' },
  { code: '+84', label: '+84 Vietnam' },
  { code: '+64', label: '+64 New Zealand' },
  { code: '+7', label: '+7 Russia' },
  { code: '+380', label: '+380 Ukraine' },
  { code: '+92', label: '+92 Pakistan' },
  { code: '+880', label: '+880 Bangladesh' },
  { code: '+94', label: '+94 Sri Lanka' },
  { code: '+977', label: '+977 Nepal' }
]

export function formatCareersPhone(countryCode: string, phoneNumber: string): string {
  return `${countryCode} ${phoneNumber}`
}
