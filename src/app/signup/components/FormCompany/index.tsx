// Pagina inicial nextjs
import Button from '@/components/button'
// import Input from '../../../../components/input'
// import Logo from '../assets/control361.png'
// import Terms from '@/components/termsOfUse'
import Input from '@/components/input'
import './style.css'

export default function Home() {
  return (
    <>
      <form action="#">
        {/* <img src={Logo} alt=""/> */}
        <span className="text-sm text-gray-500 font-semibold uppercase">
          Sign Up
        </span>
        <h3 className="mb-8 text-2xl font-bold font-heading">
          Create new account
        </h3>
        <div className="content">
          <Input type="text" label="CNPJ" placeholder="CNPJ" />
          <Input
            type="text"
            label="Razão Social"
            placeholder="Nome oficial empresa"
          />
          <Input
            type="text"
            label="Nome da Empresa"
            placeholder="Nome conhecido da empresa"
          />
          <Input
            type="text"
            label="E-mail da empresa"
            placeholder="Exemplo@gmail.com"
          />
          <Input
            type="text"
            label="Telefone"
            placeholder="Telefone para contato"
          />
          <Input
            scale="md"
            type="file"
            label="Cartao CNPJ"
            placeholder="Telefone para contato"
          />
        </div>
        <Button background="solid">Continuar</Button>
        <Button background="transparent">Voltar</Button>
      </form>
    </>
  )
}
