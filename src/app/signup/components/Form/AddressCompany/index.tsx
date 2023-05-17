// Pagina inicial nextjs
import Button from '@/components/button'
// import Input from '../../../../components/input'
// import Logo from '../assets/control361.png'
// import Terms from '@/components/TermsOfUseCompany'
import Input from '@/components/input'
import './style.css'

export default function Home() {
  return (
    <div className="cardSign">
      <form action="#">
        {/* <img src={Logo} alt=""/> */}
        <span className="text-sm text-gray-500 font-semibold uppercase">
          Sign Up
        </span>
        <h3 className="mb-8 text-2xl font-bold font-heading">
          Create new account
        </h3>
        <div className="content">
          <Input type="text" label="CEP" placeholder="00000-000" />
          <Input
            type="text"
            label="Endereço"
            placeholder="Digite o endereço da empresa"
          />
          <Input type="text" label="Número" placeholder="000" />
          <Input
            type="text"
            label="Complemento"
            placeholder="Digite o complemento"
          />
          <Input type="text" label="Bairro" placeholder="Digite o bairro" />
          <Input type="text" label="Cidade" placeholder="Digite cidade" />
          <Input type="select" label="Estado" placeholder="UF" />
          <Input
            scale="md"
            type="file"
            label="Comprovante de endereço"
            placeholder="Escolher arquivo"
          />
        </div>
        <Button>Continuar</Button>
        <Button background="transparent">Voltar</Button>
      </form>
    </div>
  )
}
