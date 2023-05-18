import { z } from 'zod'
import { formTermsOfUseSchema } from '@/app/signup/schemas'

export type FormTermsOfUseFields = z.infer<typeof formTermsOfUseSchema>
