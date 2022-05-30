import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../providers/auth'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ThreeCircles } from 'react-loader-spinner'
import Header from '../../shared/Header/Header'
import Footer from '../../shared/Footer/Footer'
import UserHabits from '../UserHabits/UserHabits'
import CreateHabits from '../CreateHabits/CreateHabits'
import { Container, Content, Menu, ContainerHabits } from './styles'

export default function HabitsScreen() {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)
  const [addHabits, setAddHabits] = useState(false)
  console.log(user)

  useEffect(() => {
    const URL =
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
    const promisse = axios.get(URL, config)

    promisse
      .then(response => {
        user.habits = response.data
        setUser({ ...user, habits: response.data })
        user.habits.forEach((item, index, array) => {
          array[index].days = item.days.sort((a, b) => a - b)
        })
      })
      .catch(() => {
        navigate('/')
      })
  }, [])

  function userHabits() {
    if (user.habits === undefined) {
      return (
        <ThreeCircles
          color="#52B6FF"
          height={110}
          width={110}
          ariaLabel="three-circles-rotating"
        />
      )
    } else if (user.habits.length === 0) {
      return (
        <h4>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </h4>
      )
    }
    return user.habits.map((item, index) => (
      <UserHabits habit={item} key={index} />
    ))
  }

  function createHabits() {
    if (addHabits === false) return null
    return <CreateHabits setAddHabits={setAddHabits} />
  }

  return (
    <Container>
      <Header />
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
      <Footer />
    </Container>
  )
}
