import { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { UserContext } from '../../providers/auth'
import Footer from '../../shared/Footer/Footer'
import Header from '../../shared/Header/Header'
import Habits from '../Habits/Habits'
import picture from '../../../assets/images/Rectangle 14.png'
import { Container, Content, BoxDiv } from './styles'

const now = dayjs().locale('pt-br')
const weekday = now.format('dddd')
const date = now.format('DD/MM')

export default function TodayScreen() {
  const { user } = useContext(UserContext)
  const [listHabits, setListHabits] = useState([])

  useEffect(() => {
    const URL =
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'

    const config = { headers: { Authorization: `Bearer ${user.token}` } }
    const promisse = axios.get(URL, config)

    promisse
      .then(response => {
        console.log(response)
        setListHabits(response.data)
      })
      .catch(() => {
        console.log('deu ruim')
      })
  }, [])

  const completedHabits = () => {
    let cont = 0
    listHabits.forEach(item => {
      if (item.done === true) cont++
    })
    if (cont > 0) {
      return (
        <h5>
          {parseInt((cont / listHabits.length) * 100)}% dos hábitos concluídos
        </h5>
      )
    }
    return <p>Nenhum hábito concluído ainda</p>
  }

  const habits = () =>
    listHabits.map((item, index) => (
      <Habits
        key={index}
        data={item}
        setListHabits={setListHabits}
        listHabits={listHabits}
      />
    ))

  return (
    <Container>
      <Header image={picture} />
      <Content>
        <BoxDiv>
          <h6>
            {weekday}, {date}
          </h6>
          {completedHabits()}
        </BoxDiv>
        {habits()}
      </Content>
      <Footer value={0} text={'Hoje'} />
    </Container>
  )
}
