'use client'
import { FormCompany, TermsOfUse } from '@/app/signup/components'
import { useForms } from '@/app/signup/hooks'
import { checkStep } from '@/app/signup/functions'
export function Forms() {
  const { step } = useForms()
  return (
    <div className="lg:max-w-md p-6 bg-gray-50 text-center rounded-lg">
      {checkStep(step, 'TERMSOFUSE') && <TermsOfUse />}
      {checkStep(step, 'FORMCOMPANY') && <FormCompany />}
    </div>
  )
}
