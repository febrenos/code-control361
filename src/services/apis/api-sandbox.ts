import axios from 'axios'

export const apiSandbox = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SANDBOX_API,
  timeout: process.env.NEXT_PUBLIC_DEFAULT_TIMEOUT_REQUEST,
})

// apiSandbox.interceptors.request.use((config) => {
//

//   if (token) {
//     config.headers!.authorization = `Bearer ${token}`
//   }
//   return config
// })
