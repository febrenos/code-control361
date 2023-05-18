import { Button } from '@/components'
import './style.css'

export default function FormEnd() {
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
          <h3 className="subTitle">Dados em análise</h3>
          <p className="text">
            Você receberá um e-mail confirmando seu cadastro em breve!
          </p>
        </div>
        <Button>Continuar</Button>
        <Button background="transparent">Voltar</Button>
      </form>
    </div>
  )
}
