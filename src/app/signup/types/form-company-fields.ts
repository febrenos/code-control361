import { z } from 'zod'
import { formCompanySchema } from '@/app/signup/schemas'

export type FormCompanyFields = z.infer<typeof formCompanySchema>
