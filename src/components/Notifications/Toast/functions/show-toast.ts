import { toast, Slide } from 'react-toastify'
import { Toast } from '@/components'
import type { ShowToastProps } from '@/components/types'

export const ShowToast = ({
  title = '',
  toastType = 'INFO',
}: ShowToastProps) => {
  toast(Toast({ title, toastType }), {
    autoClose: 5000,
    transition: Slide,
    position: 'bottom-right',
    hideProgressBar: true,
    closeButton: false,
  })
}
