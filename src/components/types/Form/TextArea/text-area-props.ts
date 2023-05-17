import { TextareaHTMLAttributes, ReactNode } from 'react'
import { UseFormRegister, FieldValues, Path } from 'react-hook-form'

export type TextAreaProps<
  TFormValues extends FieldValues = Record<string, any>,
> = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  errorMessage?: () => ReactNode
  label?: () => ReactNode
  register?: UseFormRegister<TFormValues>
  className?: string
  name?: Path<TFormValues>
  hasError?: boolean
  resizeDisabled?: boolean
}
export type TextAreaLabelProps = {
  children: ReactNode
  className?: string
  hasError?: boolean
}
