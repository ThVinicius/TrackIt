import logo from '../../../assets/images/Group 8.png'
import Form from '../Form/Form'
import { Container } from './styles'

export default function LoginScreen() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Form />
      <h6>Não tem uma conta? Cadastre-se!</h6>
    </Container>
  )
}
