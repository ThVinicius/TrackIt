import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../providers/auth'
import axios from 'axios'
import Header from '../../shared/Header/Header'
import Footer from '../../shared/Footer/Footer'
import UserHabits from '../UserHabits/UserHabits'
import CreateHabits from '../CreateHabits/CreateHabits'
import { Container, Content, Menu, ContainerHabits } from './styles'

export default function Habits() {
  const { user, setUser } = useContext(UserContext)
  const [addHabits, setAddHabits] = useState(false)
  console.log(user)

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
        user.habits = response.data
        setUser({ ...user, habits: response.data })
        user.habits.forEach((item, index, array) => {
          array[index].days = item.days.sort((a, b) => a - b)
        })
        console.log(user)
      })
      .catch(() => {
        // alert('Não foi possível exibir a lista de hábitos')
      })
  }, [])

  function createHabits() {
    if (addHabits === false) return null
    return <CreateHabits setAddHabits={setAddHabits} />
  }

  function userHabits() {
    if (user.habits === undefined) {
      return (
        <h4>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </h4>
      )
    }
    return user.habits.map((item, index) => (
      <UserHabits user={item} key={index} />
    ))
  }

  return (
    <Container>
      <Header image={user.image} />
      <Content>
        <Menu>
          <h4>Meus hábitos</h4>
          <button onClick={() => setAddHabits(true)}>+</button>
        </Menu>
        <ContainerHabits>
          {createHabits()}
          {userHabits()}
        </ContainerHabits>
      </Content>
      <Footer value={66} text={'Hoje'} />
    </Container>
  )
}
