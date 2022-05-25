import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../providers/auth'
import Header from '../../shared/Header/Header'
import Footer from '../../shared/Footer/Footer'
import CreateHabits from '../CreateHabits/CreateHabits'
import { Container, Content, Menu, ContainerHabits } from './styles'
import axios from 'axios'

export default function Habits() {
  const { user } = useContext(UserContext)
  const [createHabits, setCreateHabits] = useState(false)

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
    const promisse = axios.get(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
      config
    )

    promisse
      .then(response => {
        console.log(response)
      })
      .catch(() => {
        alert('Não foi possível exibir a lista de hábitos')
      })
  }, [])

  return (
    <Container>
      <Header image={user.image} />
      <Content>
        <Menu>
          <h4>Meus hábitos</h4>
          <button onClick={() => setCreateHabits(true)}>+</button>
        </Menu>
        <ContainerHabits>
          {createHabits ? (
            <CreateHabits setCreateHabits={setCreateHabits} />
          ) : null}
          <h4>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </h4>
        </ContainerHabits>
      </Content>
      <Footer value={66} text={'Hoje'} />
    </Container>
  )
}
