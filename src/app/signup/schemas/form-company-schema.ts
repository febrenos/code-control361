/* eslint-disable prefer-regex-literals */
/* eslint-disable no-useless-escape */
import { z } from 'zod'

export const formCompanySchema = z.object({
  cnpj: z
    .string()
    .nonempty('Preencha o cnpj por favor')
    .regex(new RegExp(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/), {
      message: 'Coloque um cnpj válido',
    }),
  corporateName: z
    .string()
    .nonempty('Preencha a razão social da empresa por favor'),
  fantasyName: z.string().optional(),
  emailCompany: z
    .string()
    .nonempty('Preencha o email da empresa por favor')
    .email('Coloque um email válido'),
  commercialPhone: z
    .string()
    .nonempty('Preencha o telefone Comercial da empresa por favor')
    .refine((value) => value.length !== 14, {
      message: 'Por favor coloque um telefone válido',
    }),

  cnpjCardCompany: z.any().refine((file: FileList) => file.length !== 0, {
    message: 'Por favor coloque um arquivo',
  }),
})
