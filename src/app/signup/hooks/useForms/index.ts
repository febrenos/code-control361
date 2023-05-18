'use client'
import { useSignupStore } from '@/store'

export function useForms() {
  const { step } = useSignupStore()

  return {
    step,
  }
}
