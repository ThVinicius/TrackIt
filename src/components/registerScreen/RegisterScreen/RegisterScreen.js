import logo from '../../../assets/images/Group 8.png'
import Form from '../Form/Form'
import { Container } from './styles'

export default function RegisterScreen() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Form />
      <h6>Já tem uma conta? Faça login!</h6>
    </Container>
  )
}
