export type DefaultResponse = {
  statusCode: number
  message: string
}

export type DefaultResponseWithContent<TContent> = DefaultResponse & {
  content: TContent
}

export type DefaultPaginate<TItems> = {
  atualPage: number
  totalRegisters: number
  totalPages: number
  registersPerPage: number
  items: TItems[]
}
