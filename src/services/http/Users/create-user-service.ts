import { apiSandbox } from '@/services'
import type { CreateUserServiceProps } from '@/services/types'

export const createUserService = async (request: CreateUserServiceProps) => {
  const formData = new FormData()

  for (const key in request) {
    formData.append(key, (request as any)[key])
  }

  const response = await apiSandbox.post('/v1/users/create', formData, {
    headers: {
      'Content-Type': 'multipart/formdata',
    },
  })

  return response.data
}
