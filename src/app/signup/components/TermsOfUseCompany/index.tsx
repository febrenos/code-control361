import Button from '@/components/button'
// import Input from '../../../../components/input'
// import Logo from '../assets/control361.png'
// import Terms from '@/components/TermsOfUseCompany'
import TimeLine from '@/components/TimeLine'
import './style.css'

export function TermsOfUse() {
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
        <TimeLine finished={1} steps={7} />
        <div className="content">
          <div className="terms">
            <h2 className="titleTerms">Termos de uso</h2>

            <b>
              TERMO DE CONSENTIMENTO PARA TRATAMENTO DE DADOS PESSOAIS – LGPD
              PARA PESSOAS FÍSICAS E JURÍDICAS
            </b>

            <p>
              <b>CONTROL 361º TECNOLOGIA E SERVIÇOS LTDA</b> devidamente
              inscrita no CNPJ sob o nº pessoa jurídica de direito privado,
              inscrita no CNPJ/MF de nº 24.867.242/001-45, com sede na Alameda
              Araguaia, nº 2044, Conjunto 707, Bloco 1, Alphaville Industrial,
              cidade de Barueri,estado de São Paulo, CEP 06455-906, doravante
              denominada <b>CONTROLADORA</b>
            </p>

            <p>
              Este termo de consentimento foi elaborado em conformidade com a
              Lei Geral de Proteção de Dados Pessoais - LGPD. Consoante ao
              artigo 5º inciso XII da Lei 13.709, este documento viabiliza a
              manifestação livre, informada e inequívoca, pela qual o titular/
              responsável concorda com o tratamento de seus dados pessoais e os
              dados do menor sob os seus cuidados, para as finalidades a seguir
              determinadas:
            </p>

            <b>PARÁGRAFO PRIMEIRO - DO CONSENTIMENTO</b>

            <p>
              Eu o <b>TITULAR</b> dos dados cadastrados, concordo para que a{' '}
              <b>CONTROLADORA</b> proceda com o <b>tratamento</b> dos meus
              dados, tanto no site da Contro 361º, como no aplicativo.
            </p>

            <p>
              Entende-se por tratamento de acordo com o artigo 5º inciso X, a
              coleta, produção, recepção, classificação, utilização, acesso,
              reprodução, transmissão, distribuição, processamento,
              arquivamento, armazenamento, eliminação, avaliação ou controle da
              informação, modificação, comunicação, transferência, difusão ou
              extração.
            </p>

            <b>PARÁGRAFO SEGUNDO – DOS DADOS TRATADOS</b>

            <p>
              Os dados da pessoa física a serem tratados: e-mail, nome completo,
              cidade de residência e profissão, RG, CPF e RNE, localização em
              tempo real, latitude e longitude, relatório de gastos.
            </p>

            <p>
              Os dados da pessoa jurídica a serem tratados: e-mail, CNPJ, nome
              fantasia, telefone comercial, razão social.
            </p>

            <p>
              Salvo se tratando de autônomos na modalidade PJ, que conta com o
              fornecimento de localização em tempo real, latitude e longitude,
              relatório de gastos.
            </p>

            <h3>PARÁGRAFO ÚNICO</h3>

            <p>
              O usuário fica ciente de que as informações geradas pelo
              aplicativo, podem ser passíveis de compartilhamentos, e os dados
              gerados poderão ser utilizados por terceiros com sua devida
              anuência.
            </p>

            <h4>PARÁGRAFO TERCEIRO - DADOS PESSOAIS</h4>

            <p>
              Poderão ser tratados mediante anuência expressa do titular /
              responsável os seguintes dados pessoais, pelo (a) controlador (a):
            </p>
            <p>
              E-mail, nome completo, estado civil, cidade, endereço completo e
              profissão, RG, CPF e RNE.
            </p>
            <p>
              Em atendimento ao artigo 8º §4 este termo guarda finalidade
              determinada, sendo que os dados serão utilizados especificamente
              para fins de:
            </p>
            <p>
              O usuário fica ciente que ao fornecer seus dados para a Control
              361º, para cada contratação ocorrida, seus dados serão repassados
              para as empresas realizarem o tratamento, mediante sua
              autorização.
            </p>
            <h4>PARÁGRAFO QUARTO - SEGURANÇA DOS DADOS</h4>
            <p>
              A Controladora responsabiliza-se pela manutenção de medidas de
              segurança, técnicas e administrativas aptas a proteger os dados
              pessoais de acessos não autorizados e de situações acidentais ou
              ilícitas de destruição, perda, alteração, comunicação ou qualquer
              forma de tratamento inadequado ou ilícito.
            </p>
            <p>Barueri, 26 de agosto, de 2022.</p>
          </div>
          {/* <div className="checks">
                <div className="check">
                    <Input type="checkbox" id="scales" name="scales1"/>
                    <label htmlFor="scales1">Li e aceito os Termos de Consentimento de Uso dos Dados Pessoais</label>
                </div>
                <div className="check">
                    <Input type="checkbox" id="scales" name="scales1"/>
                    <label htmlFor="scales1">Li e aceito a Politica de Privacidade</label>
                </div>
                <div className="check">
                    <Input type="checkbox" id="scales" name="scales1"/>
                    <label htmlFor="scales1">Li e aceito os Termos e Condições de Uso</label>
                </div>
            </div> */}
        </div>
        <label className="">
          <input className="mr-1" type="checkbox" name="terms" value="1" />
          <span className="text-sm text-gray-500">
            By signing up, you agree to our{' '}
            <a className="font-bold hover:underline" href="#">
              Terms, Data Policy
            </a>{' '}
            and{' '}
            <a className="font-bold hover:underline" href="#">
              Cookies Policy
            </a>
            .
          </span>
        </label>
        <Button>Get Startted</Button>
      </form>
    </div>
  )
}
