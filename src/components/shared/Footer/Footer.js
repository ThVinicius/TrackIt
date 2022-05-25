import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar'
import { Container, Progressbar } from './styles'

export default function Footer({ value, text }) {
  return (
    <Container>
      <h4>Hábitos</h4>
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
      <h4>Histórico</h4>
    </Container>
  )
}
