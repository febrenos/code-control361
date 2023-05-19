'use client'
import { useRouter } from 'next/navigation'
import { Token } from '@/functions/check-token/index'
import { apiSandbox } from '@/services'

export default function LoginPage() {
  const { push } = useRouter()
  const token = Token()

  const logout = async () => {
    try {
      const response = await apiSandbox.post(
        '/v1/auth/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      localStorage.clear()
      push('/')
      return response.data
    } catch (error) {
      console.error('Ocorreu um erro:', error)
    }
  }

  return (
    <section className="py-20 flex items-center justify-center h-screen">
      <div className="absolute top-0 left-0 right-0 bg-blue-500 px-4 py-2 flex justify-end">
        <button
          onClick={logout}
          className="px-4 py-2 text-white font-semibold border border-white rounded transition duration-200"
          type="button"
        >
          Sair
        </button>
      </div>
      <div className="relative container mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <h1 className="text-4xl lg:text-6xl text-center font-bold w-full">
            Bem-vindo à nosso control 361
          </h1>
        </div>
      </div>
    </section>
  )
}
