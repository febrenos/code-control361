'use client'
import React from 'react'
import { LayoutProvider } from '@/providers'
import '../global.css'
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from '@/constants/PrivateRoute'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <PrivateRoute>
          <LayoutProvider>{children}</LayoutProvider>
        </PrivateRoute>
      </body>
    </html>
  )
}
