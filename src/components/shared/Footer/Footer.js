import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../providers/auth'
import { buildStyles } from 'react-circular-progressbar'
import { Container, Progressbar, Box } from './styles'

export default function Footer() {
  const { user } = useContext(UserContext)

  return (
    <Container>
      <Box>
        <Link to="/habitos">
          <h4>Hábitos</h4>
        </Link>
      </Box>
      <Link to="/hoje">
        <Progressbar
          value={user.todayHabits.progress}
          text="Hoje"
          background
          backgroundPadding={6}
          styles={buildStyles({
            width: '91px',
            height: '91px',
            backgroundColor: '#52B6FF',
            textColor: '#FFFFFF',
            textSize: '17.976px',
            pathColor: '#FFFFFF',
            trailColor: 'transparent'
          })}
        />
      </Link>
      <Box>
        <Link to="/historico">
          <h4>Histórico</h4>
        </Link>
      </Box>
    </Container>
  )
}
