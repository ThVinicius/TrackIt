import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../providers/auth'
import { Container } from './styles'

export default function Header() {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('userData')
    user.token = undefined
    user.image = undefined
    user.habits = undefined
    user.todayHabits = { exist: undefined, progress: 0, list: [] }
    navigate('/')
  }

  return (
    <Container>
      <h5>TrackIt</h5>
      <img onClick={logout} src={user.image} alt="imagem do usuário" />
    </Container>
  )
}
