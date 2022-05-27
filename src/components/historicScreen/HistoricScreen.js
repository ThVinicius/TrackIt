import { useContext } from 'react'
import { UserContext } from '../providers/auth'
import Footer from '../shared/Footer/Footer'
import Header from '../shared/Header/Header'
import picture from '../../assets/images/Rectangle 14.png'
import { Container, Content } from './styles'

export default function HistoricScreen() {
  const { user } = useContext(UserContext)
  return (
    <Container>
      <Header image={user.image} />
      <Content>
        <h5>Histórico</h5>
        <h4>Em breve você poderá ver o histórico dos seus hábitos aqui!</h4>
      </Content>
      <Footer value={66} text={'Hoje'} />
    </Container>
  )
}
