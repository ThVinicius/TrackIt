import { Link } from 'react-router-dom'
import { buildStyles } from 'react-circular-progressbar'
import { Container, Progressbar } from './styles'

export default function Footer({ value, text }) {
  return (
    <Container>
      <Link to="/habitos">
        <h4>Hábitos</h4>
      </Link>
      <Link to="/hoje">
        <Progressbar
          value={value}
          text={text}
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
      <Link to="/historico">
        <h4>Histórico</h4>
      </Link>
    </Container>
  )
}
