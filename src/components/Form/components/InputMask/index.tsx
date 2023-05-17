import React from 'react'
import './style.css'
import type { InputMaskProps } from '@/components/types'
import type { FieldValues } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  isFocus: boolean
}

export function InputMask<TFormValues extends FieldValues>({
  label = '',
  type,
  scale,
  children,
  name,
  mask = '',
  maskChar = null,
  hasError = false,
  register,
  errorMessage,
  ...rest
}: InputMaskProps<TFormValues>) {
  return (
    <div className="content">
      <label className="label" htmlFor={label} {...(rest as LabelProps)}>
        {label}
      </label>
      {register ? (
        <ReactInputMask
          mask={mask}
          maskChar={null}
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
        <ReactInputMask
          mask={mask}
          maskChar={null}
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
