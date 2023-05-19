export const emailControl =
  process.env.NEXT_PUBLIC_AUTHENTICATOR_EMAIL === undefined
    ? ''
    : process.env.NEXT_PUBLIC_AUTHENTICATOR_EMAIL

export const passwordControl =
  process.env.NEXT_PUBLIC_AUTHENTICATOR_PASSWORD === undefined
    ? ''
    : process.env.NEXT_PUBLIC_AUTHENTICATOR_PASSWORD
