import { Container } from './styles'
export default function Header({ image }) {
  return (
    <Container>
      <h5>TrackIt</h5>
      <img src={image} alt="imagem do usuário" />
    </Container>
  )
}
