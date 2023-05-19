'use client'

import LoginForm from '@/components/FormLogin'

export default function LoginPage() {
  return (
    <section className="py-20 flex items-center justify-center h-screen">
      <div className="absolute top-0 left-0 lg:bottom-0 h-96 lg:h-auto w-full lg:w-8/12 primary-color"></div>
      <div className="relative container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-md mx-auto py-12 px-8 bg-gray-100 rounded-lg text-center items-center justify-center">
              <div className="mb-4">
                <span className="text-gray-500 font-semibold uppercase">
                  Bem vindo ao <b>Control 361</b>
                </span>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
