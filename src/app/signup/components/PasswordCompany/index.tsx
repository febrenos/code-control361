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
          <Input type="password" label="senha" placeholder="Test@1234" />
          <Input
            type="password"
            label="Confirme a senha"
            placeholder="Test@1234"
          />
        </div>
        {/* 
        Mínimo 1 letra Maiúscula
        Mínimo 1 letra Minúscula
        Mínimo 1 número
        Mínimo 1 caractere especial (@,#,$)
        Mínimo 8 caracteres
        Confirmação de senha
        */}
        <Button>Continuar</Button>
        <Button background="transparent">Voltar</Button>
      </form>
    </div>
  )
}
