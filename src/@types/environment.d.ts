/* eslint-disable no-unused-vars */
type environment = 'development' | 'production'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SANDBOX_API: string
      NEXT_PUBLIC_DEFAULT_TIMEOUT_REQUEST: number
    }
  }
}

export {}
