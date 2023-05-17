import { InputHTMLAttributes, ReactNode } from 'react'
import { UseFormRegister, FieldValues, Path } from 'react-hook-form'

export type InputProps<TFormValues extends FieldValues = Record<string, any>> =
  InputHTMLAttributes<HTMLInputElement> & {
    className?: string
    errorMessage?: () => ReactNode
    register?: UseFormRegister<TFormValues>
    name?: Path<TFormValues>
    hasError?: boolean
    label?: string
    type: string
    scale?: string
    children?: ReactNode
  }
