import { z } from 'zod'

export const formTermsOfUseSchema = z.object({
  termsOfUse: z
    .boolean()
    .refine((value) => value, { message: 'Aceite os termos de uso' }),
})
