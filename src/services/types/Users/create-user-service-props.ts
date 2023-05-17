export type documentType = 'RG' | 'RNE' | 'CNH'

export type CreateUserServiceProps = {
  cnpjCardCompany: File
  addressProofCompany: File
  cnhAdmin?: File
  addressProofAdmin: File
  frontAdminDocument?: File
  backAdminDocument?: File
  password: string
  emailCompany: string
  corporateName: string
  fantasyName: string
  cnpj: string
  commercialPhone: string
  zipCodeCompany: string
  addressCompany: string
  districtCompany: string
  cityCompany: string
  stateCompany: string
  numberCompany?: number
  complementCompany?: number
  emailAdmin: string
  cpf: string
  name: string
  motherName: string
  rg: string
  nationality: string
  cellPhone: string
  birthDate: Date
  zipCodeAdmin: string
  addressAdmin: string
  districtAdmin: string
  cityAdmin: string
  stateAdmin: string
  numberAdmin?: number
  complementAdmin?: string
  documentAdminType: documentType
}
