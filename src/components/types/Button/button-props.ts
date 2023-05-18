import { ButtonHTMLAttributes } from 'react'
import type { ReactNode } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
  isLoading?: boolean
  loading?: () => ReactNode
  background?: 'transparent' | 'solid'
}
