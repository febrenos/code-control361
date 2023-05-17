// Pagina inicial nextjs
import Button from '@/components/button'
import Input from '../input'
import Logo from '../assets/control361.png'
import Terms from '@/components/termsOfUse'


export default function Home() {
  return (
    <>
        <form action="#">
          {/* <img src={Logo} alt=""/> */}
          <span className="text-sm text-gray-500 font-semibold uppercase">Sign Up</span>
          <h3 className="mb-8 text-2xl font-bold font-heading">Create new account</h3>
          <Terms/>
          <label className="">
            <input className="mr-1" type="checkbox" name="terms" value="1"/>
            <span className="text-sm text-gray-500">By signing up, you agree to our <a className="font-bold hover:underline" href="#">Terms, Data Policy</a> and <a className="font-bold hover:underline" href="#">Cookies Policy</a>.</span>
          </label>
          <Button>Get Startted</Button>
        </form>
    </>
  )
}
