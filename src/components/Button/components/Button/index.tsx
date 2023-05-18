import React from 'react'
import type { ButtonProps } from '@/components/types'
import './style.css'

export function Button({
  onClick,
  children,
  background,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      {...rest}
      onClick={onClick}
      data-background={background}
    >
      {children}
    </button>
  )
}
