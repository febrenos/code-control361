import React from 'react'
import './style.css'
import type { InputProps } from '@/components/types'
import type { FieldValues } from 'react-hook-form'

// interface CustomInputProps extends InputProps<FieldValues> {
//   maxLength?: number
//   minLength?: number
// }

// <FieldValues>
export function Input<TFormValues extends FieldValues>({
  label = '',
  type,
  scale,
  children,
  name,
  hasError = false,
  register,
  errorMessage,
  maxLength = 30,
  minLength = 15,
  ...rest
}: InputProps<TFormValues>) {
  return (
    <div className="content">
      <label className="label" htmlFor={label}>
        {label}
      </label>
      {register ? (
        <input
          {...register(name!)}
          className="input"
          data-haserror={hasError}
          data-scale={scale}
          type={type}
          id={label}
          autoComplete="off"
          placeholder="Digite algo..."
          maxLength={maxLength}
          minLength={minLength}
          {...rest}
        />
      ) : (
        <input
          className="input"
          data-scale={scale}
          type={type}
          id={label}
          data-haserror={hasError}
          autoComplete="off"
          placeholder="Digite algo..."
          maxLength={maxLength}
          minLength={minLength}
          {...rest}
        />
      )}
      {errorMessage && errorMessage()}
      {children}
    </div>
  )
}
