import { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { UserContext } from '../../providers/auth'
import { ThreeCircles } from 'react-loader-spinner'
import Footer from '../../shared/Footer/Footer'
import Header from '../../shared/Header/Header'
import Habits from '../Habits/Habits'
import { Container, Content, BoxDiv, BoxHabits } from './styles'

const now = dayjs().locale('pt-br')
const date = now.format('DD/MM')

function weekday() {
  const aux = now.format('dddd').replace('-feira', '')
  return aux[0].toUpperCase() + aux.substring(1)
}

export default function TodayScreen() {
  const { user } = useContext(UserContext)
  const [listHabits, setListHabits] = useState({
    exist: undefined,
    list: []
  })

  useEffect(() => {
    const URL =
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'

    const config = { headers: { Authorization: `Bearer ${user.token}` } }
    const promisse = axios.get(URL, config)

    promisse.then(response => {
      if (response.data.length === 0) {
        setListHabits({ ...listHabits, exist: false })
      } else {
        setListHabits({
          ...listHabits,
          exist: true,
          list: response.data.map(item => {
            if (item.currentSequence === item.highestSequence) {
              item.sequence = true
            } else {
              item.sequence = false
            }
            return item
          })
        })
      }
    })
  }, [])

  const completedHabits = () => {
    let cont = 0
    listHabits.list.forEach(item => {
      if (item.done === true) cont++
    })
    if (cont > 0) {
      return (
        <h5>
          {parseInt((cont / listHabits.list.length) * 100)}% dos hábitos
          concluídos
        </h5>
      )
    }
    return <p>Nenhum hábito concluído ainda</p>
  }
  function progressBar() {
    let cont = 0
    listHabits.list.forEach(item => {
      if (item.done === true) cont++
    })
    if (cont > 0) {
      return parseInt((cont / listHabits.list.length) * 100)
    }
    return cont
  }

  const habits = () => {
    if (listHabits.exist === undefined) {
      return (
        <ThreeCircles
          color="blue"
          height={110}
          width={110}
          ariaLabel="three-circles-rotating"
        />
      )
    } else if (listHabits.exist === false) {
      return <h6>Você não possui hábitos hoje</h6>
    }

    return listHabits.list.map((item, index) => (
      <Habits
        key={index}
        data={item}
        setListHabits={setListHabits}
        listHabits={listHabits}
      />
    ))
  }

  return (
    <Container>
      <Header image={user.image} />
      <Content>
        <BoxDiv>
          <h6>
            {weekday()}, {date}
          </h6>
          {completedHabits()}
        </BoxDiv>
        <BoxHabits>{habits()}</BoxHabits>
      </Content>
      <Footer value={progressBar()} text={'Hoje'} />
    </Container>
  )
}
