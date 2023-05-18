import type { ToastType } from '@/components/types'
export const transformTypeToast = (toastType: ToastType) => {
  switch (toastType) {
    case 'SUCCESS':
      return 'bg-green-500 border-2 border-green-500'
    case 'ERROR':
      return 'bg-red-500 border-2 border-red-500'
    case 'INFO':
      return 'bg-blue-500 border-2 border-blue-500'
    case 'WARNING':
      return 'bg-yellow-500 border-2 border-yellow-500'
    default:
  }
}
