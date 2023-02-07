import { Link } from 'react-router-dom'
import logo from '../../../assets/images/Group 8.png'
import Form from '../Form/Form'
import { Container, Content } from './styles'

export default function RegisterScreen() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />
        <Form />
        <Link to="/">
          <h6>Já tem uma conta? Faça login!</h6>
        </Link>
      </Content>
    </Container>
  )
}
