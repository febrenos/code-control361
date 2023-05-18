export type ToastType = 'SUCCESS' | 'INFO' | 'ERROR' | 'WARNING'
export type ToastProps = {
  title: string
  toastType?: ToastType
}

export type ShowToastProps = {
  title: string
  toastType?: ToastType
}
