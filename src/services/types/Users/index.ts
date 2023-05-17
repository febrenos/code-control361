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
}
