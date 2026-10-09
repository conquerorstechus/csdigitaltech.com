type CareersWebhookInput = {
  name: string
  email: string
  phone: string
  projectType: string
  whyCornerstone: string
  linkedin?: string
  formType?: string
  formId?: string
  resumeLink?: string
  resumeFileName?: string
  resumeFileMime?: string
  resumeFileBase64?: string
  resumeDownloadUrl?: string
}

export type CareersWebhookPayload = {
  formType: string
  source: 'careers'
  formId?: string
  submittedAt: string
  name: string
  email: string
  phone: string
  projectType: string
  role: string
  message: string
  whyCornerstone: string
  linkedin?: string
  securityVerificationStatus: string
  applicationVerificationStatus: string
  applicationStatus: string
  verificationNote: string
  securityAnswer: string
  verificationAnswer: string
  captchaAnswer: string
  resume?: string
  resumeUrl?: string
  resumeLink?: string
  resumeDownloadUrl?: string
  resumeFileName?: string
  resumeFileMime?: string
  resumeFileBase64?: string
  hasUploadedResume?: boolean
}

export function mapCareersFormId(formId?: string, projectType?: string): string | undefined {
  const raw = String(formId || projectType || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '_')

  if (!raw) return undefined

  // Keep frontend form IDs so the live n8n Switch can route correctly.
  if (raw === 'senior_full_stack_engineer') return 'senior_full_stack_engineer'
  if (raw === 'digital_marketing_specialist') return 'digital_marketing_specialist'
  if (raw === 'project_manager') return 'project_manager'
  if (raw === 'aws_engineer') return 'aws_engineer'

  return raw
}

export function buildCareersWebhookPayload(input: CareersWebhookInput): CareersWebhookPayload {
  const verifiedStatus = '✅ Verified'
  const trimmedLinkedin = String(input.linkedin || '').trim()
  const trimmedResumeLink = String(input.resumeLink || '').trim()
  const trimmedResumeFileName = String(input.resumeFileName || '').trim()
  const resumeAccessUrl = String(input.resumeDownloadUrl || trimmedResumeLink || '').trim()

  return {
    formType: input.formType || 'csdigitaltech-careers',
    source: 'careers',
    formId: mapCareersFormId(input.formId, input.projectType),
    submittedAt: new Date().toISOString(),
    name: input.name,
    email: input.email,
    phone: input.phone,
    projectType: input.projectType,
    role: input.projectType,
    message: input.whyCornerstone,
    whyCornerstone: input.whyCornerstone,
    linkedin: trimmedLinkedin || undefined,
    securityVerificationStatus: verifiedStatus,
    applicationVerificationStatus: verifiedStatus,
    applicationStatus: '✅ VERIFIED',
    verificationNote: 'All required verification checks were successfully completed.',
    securityAnswer: verifiedStatus,
    verificationAnswer: verifiedStatus,
    captchaAnswer: verifiedStatus,
    ...(trimmedResumeFileName
      ? {
          resumeFileName: trimmedResumeFileName,
          hasUploadedResume: true,
          ...(input.resumeFileBase64 ? { resumeFileBase64: input.resumeFileBase64 } : {})
        }
      : {}),
    ...(resumeAccessUrl
      ? {
          resume: resumeAccessUrl,
          resumeUrl: resumeAccessUrl,
          resumeLink: resumeAccessUrl,
          resumeDownloadUrl: resumeAccessUrl
        }
      : trimmedResumeFileName
        ? { resume: trimmedResumeFileName }
        : {}),
    ...(input.resumeFileMime ? { resumeFileMime: input.resumeFileMime } : {})
  }
}

export function wrapCareersWebhookPayload(payload: Record<string, unknown>) {
  const { resumeFileBase64, ...withoutFile } = payload

  return {
    ...payload,
    body: withoutFile
  }
}
