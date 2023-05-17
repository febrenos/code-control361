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
          <Input type="text" label="CPF" placeholder="000.000.000-00" />
          <Input
            type="text"
            label="Nome Completo"
            placeholder="Digite o nome completo"
          />
          <Input type="text" label="RG" placeholder="00.000.000-0" />
          <Input type="date" label="Data de Nascimento" />
          <Input
            type="text"
            label="Nome da mãe"
            placeholder="Digite o nome da mãe"
          />
          <Input type="text" label="E-mail" placeholder="Digite o e-mail" />
          <Input
            type="text"
            label="Celular"
            placeholder="Digite o numero para contato"
          />
          <Input
            type="text"
            label="Nacionalidade"
            placeholder="Digite a nacionalidade"
          />
          <Input
            type="select"
            label="Tipo de Documento"
            placeholder="Digite a nacionalidade"
          />
          <Input
            type="file"
            label="Tipo de Documento"
            placeholder="Digite a nacionalidade"
          />
        </div>
        <Button>Continuar</Button>
        <Button background="transparent">Voltar</Button>
      </form>
    </div>
  )
}
