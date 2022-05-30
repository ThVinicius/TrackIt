import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import logo from '../../../assets/images/Group 8.png'
import Form from '../Form/Form'
import { Container } from './styles'
import { UserContext } from '../../providers/auth'

export default function LoginScreen() {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    const userData = localStorage.getItem('userData')
    if (userData !== null) {
      const aux = JSON.parse(userData)
      user.token = aux.token
      user.image = aux.image
      navigate('/hoje')
    }
  }, [])

  return (
    <Container>
      <img src={logo} alt="logo" />
      <Form />
      <Link to="/cadastro">
        <h6>Não tem uma conta? Cadastre-se!</h6>
      </Link>
    </Container>
  )
}
