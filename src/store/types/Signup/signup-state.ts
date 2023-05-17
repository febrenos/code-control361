export type Steps =
  | 'TERMSOFUSE'
  | 'FORMCOMPANY'
  | 'FORMCOMPANYADDRESS'
  | 'FORMADMIN'
  | 'FORMADMINADRESS'
  | 'PASSWORD'

export type SignupState = {
  step: Steps
  setStep: (step: Steps) => void
}
