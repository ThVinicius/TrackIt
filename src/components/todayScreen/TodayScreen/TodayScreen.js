import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { UserContext } from '../../providers/auth'
import { ThreeCircles } from 'react-loader-spinner'
import Footer from '../../shared/Footer/Footer'
import Header from '../../shared/Header/Header'
import Habits from '../Habits/Habits'
import { Container, Content, BoxDiv, BoxHabits } from './styles'
import progressBar from '../../../functions/progressBar'

const now = dayjs().locale('pt-br')
const date = now.format('DD/MM')

function weekday() {
  const aux = now.format('dddd').replace('-feira', '')
  return aux[0].toUpperCase() + aux.substring(1)
}

export default function TodayScreen() {
  const { user, setUser } = useContext(UserContext)
  const [loading] = useState({ status: undefined })
  const navigate = useNavigate()

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
    const URL =
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'

    const promisse = axios.get(URL, config)

    promisse
      .then(res => {
        if (res.data.length === 0) {
          loading.status = false
          setUser({
            ...user,
            todayHabits: { progress: 0, list: [] }
          })
        } else {
          loading.status = true
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
        }
      })
      .catch(() => {
        navigate('/')
      })
  }, [])

  const completedHabits = () => {
    if (loading.status === undefined) return null
    let cont = 0
    user.todayHabits.list.forEach(item => {
      if (item.done === true) cont++
    })
    if (cont > 0) {
      return (
        <h5>
          {parseInt((cont / user.todayHabits.list.length) * 100)}% dos hábitos
          concluídos
        </h5>
      )
    }
    return <p>Nenhum hábito concluído ainda</p>
  }

  const habits = () => {
    if (loading.status === undefined) {
      return (
        <ThreeCircles
          color="#52B6FF"
          height={110}
          width={110}
          ariaLabel="three-circles-rotating"
        />
      )
    } else if (loading.status === false) {
      return <h6>Você não possui hábitos hoje</h6>
    }

    return user.todayHabits.list.map((item, index) => (
      <Habits key={index} data={item} />
    ))
  }

  return (
    <Container>
      <Header />
      <Content>
        <BoxDiv>
          <h6>
            {weekday()}, {date}
          </h6>
          {completedHabits()}
        </BoxDiv>
        <BoxHabits>{habits()}</BoxHabits>
      </Content>
      <Footer />
    </Container>
  )
}
