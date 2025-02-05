export type FormType = 'get-started' | 'pricing'

export interface FormData {
  name: string
  companyName: string
  email: string
  industry: string
  crm: string
  otherCrm: string
  formType: FormType
}

const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/hICrBcnDkMgl4yCxHhMT/webhook-trigger/5e9611ec-fc79-4ca7-99ba-12ff8210f8e6'

export async function submitToWebhook(formData: FormData): Promise<void> {
  const response = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...formData,
      formType: formData.formType // Explicitly include formType in the payload
    }),
  })

  if (!response.ok) {
    throw new Error(`Webhook submission failed: ${response.statusText}`)
  }
} 