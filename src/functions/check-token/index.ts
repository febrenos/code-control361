export const Token = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    return token
  }
}

export const User = () => {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('user')
    const adim = user === null ? '{"name": ""}' : user
    const name = JSON.parse(adim)
    return name
  }
}
