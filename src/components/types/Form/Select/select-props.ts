import { ReactNode, SelectHTMLAttributes, OptionHTMLAttributes } from 'react'
import { UseFormRegister, FieldValues, Path } from 'react-hook-form'

export type SelectProps<TFormValues extends FieldValues = Record<string, any>> =
  SelectHTMLAttributes<HTMLSelectElement> & {
    label?: () => ReactNode
    className?: string
    errorMessage?: () => ReactNode
    register?: UseFormRegister<TFormValues>
    name?: Path<TFormValues>
    hasError?: boolean
  }

export type SelectOptionProps = OptionHTMLAttributes<HTMLOptionElement> & {}
export type SelectLabelProps = {
  children: ReactNode
  className?: string
  hasError?: boolean
}
