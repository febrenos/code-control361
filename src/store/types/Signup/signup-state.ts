import type { FormCompanyFields } from '@/app/signup/types'
export type StepsSignUp =
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
  step: StepsSignUp
  payload: Payload
  setStep: (step: StepsSignUp) => void
  setCompanyState: (company: FormCompanyFields) => void
}
