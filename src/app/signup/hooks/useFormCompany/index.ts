'use client'
import type { FormCompanyFields } from '@/app/signup/types'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formCompanySchema } from '@/app/signup/schemas'
import { useSignupStore } from '@/store'

export function useFormCompany() {
  const { setCompanyState } = useSignupStore()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormCompanyFields>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(formCompanySchema),
  })

  const onSubmit = (data: FormCompanyFields) => {
    setCompanyState(data)
  }

  return {
    errors,
    onSubmit,
    register,
    handleSubmit,
  }
}
