'use client'
import type { FormCompanyFields } from '@/app/signup/types'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formCompanySchema } from '@/app/signup/schemas'

export function useFormCompany() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormCompanyFields>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(formCompanySchema),
  })

  const onSubmit = (data: FormCompanyFields) => {
    console.log(data)
  }
  console.log(errors)
  console.log('razao', watch('corporateName'))
  return {
    errors,
    onSubmit,
    register,
    handleSubmit,
  }
}
