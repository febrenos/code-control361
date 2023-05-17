import { create } from 'zustand'
import type { SignupState } from '@/store/types'

export const useSignupStore = create<SignupState>((set) => ({
  step: 'TERMSOFUSE',
  payload: {
    company: {
      cnpj: '',
      commercialPhone: '',
      corporateName: '',
      emailCompany: '',
      cnpjCardCompany: '',
      fantasyName: '',
    },
  },
  setStep: (step) => set(() => ({ step })),
  setCompanyState: (company) => set(() => ({ payload: { company } })),
}))
