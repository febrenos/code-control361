import type { FormCompanyFields } from '@/app/signup/types'
export type Steps =
  | 'TERMSOFUSE'
  | 'FORMCOMPANY'
  | 'FORMCOMPANYADDRESS'
  | 'FORMADMIN'
  | 'FORMADMINADRESS'
  | 'PASSWORD'

export type Payload = {
  company: FormCompanyFields
}

export type SignupState = {
  step: Steps
  payload: Payload
  setStep: (step: Steps) => void
  setCompanyState: (company: FormCompanyFields) => void
}
