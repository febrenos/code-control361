import React from 'react'
import './style.css'
import type { InputProps } from '@/components/types'
import type { FieldValues } from 'react-hook-form'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  isFocus: boolean
}

export function Input<TFormValues extends FieldValues>({
  label = '',
  type,
  scale,
  children,
  name,
  hasError = false,
  register,
  errorMessage,
  ...rest
}: InputProps<TFormValues>) {
  return (
    <div className="content">
      <label className="label" htmlFor={label} {...(rest as LabelProps)}>
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
          {...rest}
        />
      )}
      {errorMessage && errorMessage()}
      {children}
    </div>
  )
}
