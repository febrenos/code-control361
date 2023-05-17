'use client'
import Button from '@/components/button'
// import Input from '../../../../components/input'
// import Logo from '../assets/control361.png'
// import Terms from '@/components/termsOfUse'
import { Input, ErrorMessage } from '@/components'
import './style.css'
import { useFormCompany } from '@/app/signup/hooks'
import type { FormCompanyFields } from '@/app/signup/types'
import { checkHasError } from '@/functions'

export function FormCompany() {
  const { handleSubmit, onSubmit, register, errors } = useFormCompany()
  return (
    <>
      {/* <img src={Logo} alt=""/> */}
      <span className="text-sm text-gray-500 font-semibold uppercase">
        Sign Up
      </span>
      <h3 className="mb-8 text-2xl font-bold font-heading">
        Create new account
      </h3>
      <div className="content">
        <form method="post">
          <Input<FormCompanyFields>
            name="cnpj"
            register={register}
            type="text"
            label="CNPJ"
            placeholder="CNPJ"
            hasError={checkHasError(errors.cnpj)}
            errorMessage={() =>
              errors.cnpj?.message && (
                <ErrorMessage>{errors.cnpj?.message}</ErrorMessage>
              )
            }
          />
          <Input<FormCompanyFields>
            type="text"
            label="Razão Social"
            placeholder="Nome oficial empresa"
            register={register}
            name="corporateName"
            hasError={checkHasError(errors.corporateName)}
            errorMessage={() =>
              errors.corporateName?.message && (
                <ErrorMessage>{errors.corporateName?.message}</ErrorMessage>
              )
            }
          />
          <Input<FormCompanyFields>
            type="text"
            name="fantasyName"
            register={register}
            label="Nome da Empresa"
            placeholder="Nome conhecido da empresa"
          />
          <Input<FormCompanyFields>
            register={register}
            name="emailCompany"
            type="text"
            label="E-mail da empresa"
            placeholder="Exemplo@gmail.com"
            hasError={checkHasError(errors.emailCompany)}
            errorMessage={() =>
              errors.emailCompany?.message && (
                <ErrorMessage>{errors.emailCompany?.message}</ErrorMessage>
              )
            }
          />
          <Input<FormCompanyFields>
            register={register}
            name="commercialPhone"
            type="text"
            label="Telefone"
            placeholder="Telefone para contato"
            hasError={checkHasError(errors.commercialPhone)}
            errorMessage={() =>
              errors.commercialPhone?.message && (
                <ErrorMessage>{errors.commercialPhone?.message}</ErrorMessage>
              )
            }
          />
          <Input<FormCompanyFields>
            scale="md"
            type="file"
            label="Cartao CNPJ"
            register={register}
            placeholder="Coloque o cartão cnpj da sua empresa"
            hasError={checkHasError(errors.cnpjCardCompany)}
            name="cnpjCardCompany"
            errorMessage={() =>
              errors.cnpjCardCompany?.message && (
                <ErrorMessage>
                  {errors.cnpjCardCompany?.message as string}
                </ErrorMessage>
              )
            }
          />
          <Button onClick={handleSubmit(onSubmit)} background="solid">
            Continuar
          </Button>
          <Button background="transparent">Voltar</Button>
        </form>
      </div>
    </>
  )
}
