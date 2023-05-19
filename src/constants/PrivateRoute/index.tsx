import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import { APP_ROUTES } from '@/constants/app-routes'

type PrivateRouteProps = {
  children: ReactNode
}
export const checkUserToken = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    return !!token
  }
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { push } = useRouter()

  const userAutentication = checkUserToken()

  useEffect(() => {
    if (!userAutentication) {
      push(APP_ROUTES.public.login)
    }
  }, [userAutentication, push])

  return (
    <>
      {!userAutentication && null}
      {userAutentication && children}
    </>
  )
}

export default PrivateRoute
