import type { ErrorMessageProps } from '@/components/types'
import './styles.css'

export function ErrorMessage({ children }: ErrorMessageProps) {
  return <p className="error-message">{children}</p>
}
