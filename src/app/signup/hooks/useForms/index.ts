import { useSignupStore } from '@/store'

export function useForms() {
  const { step, setStep } = useSignupStore()
}
