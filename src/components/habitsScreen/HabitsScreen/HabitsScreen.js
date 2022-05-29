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

function progressBar(array) {
  let cont = 0
  array.forEach(item => {
    if (item.done === true) cont++
  })
  if (cont > 0) {
    return parseInt((cont / array.length) * 100)
  }
  return cont
}

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
    const promisse1 = axios.get(URL, config)

    promisse1
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

    const promisse2 = axios.get(`${URL}/today`, config)

    promisse2
      .then(res => {
        setUser({
          ...user,
          todayHabits: {
            progress: progressBar(res.data),
            list: res.data.map(item => {
              if (item.currentSequence === item.highestSequence) {
                item.sequence = true
              } else {
                item.sequence = false
              }
              return item
            })
          }
        })
      })
      .catch(() => {})
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
      <UserHabits user={item} key={index} />
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
