import Footer from '../../shared/Footer/Footer'
import Header from '../../shared/Header/Header'
import picture from '../../../assets/images/Rectangle 14.png'
import { Container, Content } from './styles'

export default function TodayScreen() {
  return (
    <Container>
      <Header image={picture} />
      <Content></Content>
      <Footer value={0} text={'Hoje'} />
    </Container>
  )
}
