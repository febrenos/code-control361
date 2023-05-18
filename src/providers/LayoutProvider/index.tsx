'use client'
import { ToastContainer } from 'react-toastify'
import type { LayoutProviderProps } from '@/providers/types'

export function LayoutProvider({ children }: LayoutProviderProps) {
  return (
    <>
      <ToastContainer toastClassName={() => 'toast'} />
      {children}
    </>
  )
}
