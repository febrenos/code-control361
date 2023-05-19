'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ShowToast } from '@/components'
import { apiSandbox } from '@/services'
import { emailControl, passwordControl } from '@/services/Autheticator'

export default function LoginForm() {
  const { push } = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handlePostLogin = async () => {
    try {
      const data = { email, password, deviceName: 'Web' }

      const response = await apiSandbox.post('/v1/auth/login', data, {
        auth: {
          username: emailControl,
          password: passwordControl,
        },
      })

      const json = response.data
      const token = json.content.accessToken.token
      const name = JSON.stringify(json.content.user.admin)
      localStorage.setItem('token', token)
      localStorage.setItem('user', name)
      push('/home')
      return json
    } catch (error) {
      ShowToast({
        title: 'Usuário não encontrado',
        toastType: 'ERROR',
      })
      console.error('Ocorreu um erro:', error)
    }
  }

  return (
    <div>
      <input
        className="w-full py-3 pl-3 mb-4 text-black bg-white rounded-lg"
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full py-3 pl-3 mb-4 text-black bg-white rounded-lg"
        type="password"
        placeholder="senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handlePostLogin}
        className="block w-full mb-4 px-5 py-3 text-sm bg-blue-500 hover:bg-blue-700 text-white font-semibold border border-blue-500 hover:border-blue-700 rounded transition duration-200"
        type="button"
      >
        Entrar
      </button>
      <button
        onClick={() => push('/signup')}
        className="block px-5 py-3 text-sm bg-blue-500 hover:bg-blue-700 text-white font-semibold border border-blue-500 hover:border-blue-700 rounded transition duration-200"
        type="button"
      >
        Cadastrar
      </button>
    </div>
  )
}
