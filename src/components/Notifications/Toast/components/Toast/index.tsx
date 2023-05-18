import React from 'react'
import { transformTypeToast } from '@/components/Notifications/Toast/functions'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { TiWarningOutline } from 'react-icons/ti'
import type { ToastProps } from '@/components/types'
import { RiErrorWarningLine } from 'react-icons/ri'
import { IoIosClose } from 'react-icons/io'

export function Toast({ title = '', toastType = 'INFO' }: ToastProps) {
  const enabledIconAttention = toastType === 'INFO' || toastType === 'ERROR'
  const isErrorType = toastType === 'ERROR'
  const isSuccessType = toastType === 'SUCCESS'
  const isWarningType = toastType === 'WARNING'
  return (
    <div className="flex w-full h-full items-center justify-between">
      <div className="flex items-center pr-6">
        <div
          className={`flex-shrink-0  self-start inline-flex items-center justify-center w-10 h-10 mr-3 ${transformTypeToast(
            toastType,
          )} bg-opacity-20 rounded-xl`}
        >
          {enabledIconAttention && (
            <RiErrorWarningLine
              className={`${
                isErrorType ? 'fill-red-icon-toast' : 'fill-blue-300'
              } text-2xl`}
            />
          )}
          {isSuccessType && (
            <AiOutlineCheckCircle className="text-2xl fill-green-icon-toast" />
          )}
          {isWarningType && (
            <TiWarningOutline className="text-2xl fill-yellow-icon-toast" />
          )}
        </div>
        <span className="text-sm leading-5 text-black font-semibold">
          {title}
        </span>
      </div>
      <IoIosClose className="inline-block cursor-pointer text-2xl fill-gray-400 hover:fill-gray-300 " />
    </div>
  )
}
