'use client'
import type { FormTermsOfUseFields } from '@/app/signup/types'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formTermsOfUseSchema } from '@/app/signup/schemas'
import { useSignupStore } from '@/store'
import { ShowToast } from '@/components'
import { useEffect } from 'react'
import { checkHasError } from '@/functions'

export function useTermsOfUse() {
  const { setStep } = useSignupStore()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTermsOfUseFields>({
    resolver: zodResolver(formTermsOfUseSchema),
  })
  useEffect(() => {
    if (checkHasError(errors.termsOfUse))
      ShowToast({
        title: 'Preencha os termos de uso',
        toastType: 'ERROR',
      })
  }, [errors.termsOfUse])
  const onSubmit = (data: FormTermsOfUseFields) => {
    setStep('FORMCOMPANY')
  }
  return {
    errors,
    onSubmit,
    register,
    handleSubmit,
  }
}
