import { create } from 'zustand'
import type { SignupState } from '@/store/types'

export const useSignupStore = create<SignupState>((set) => ({
  step: 'TERMSOFUSE',
  setStep: (step) => set(() => ({ step })),
}))
