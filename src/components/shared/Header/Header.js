import { useNavigate } from 'react-router-dom'
import { Container } from './styles'

export default function Header({ image }) {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <Container>
      <h5>TrackIt</h5>
      <img onClick={logout} src={image} alt="imagem do usuário" />
    </Container>
  )
}
