import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../providers/auth'
import axios from 'axios'
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'
import dayjs from 'dayjs'
import Footer from '../../shared/Footer/Footer'
import Header from '../../shared/Header/Header'
import { Container, Content, CalendarContainer } from './styles'

const getFormatedDate = dateValue => dayjs(dateValue).format('DD/MM/YYYY')

export default function HistoricScreen() {
  const [habit, setHabit] = useState()
  const [habitDate, setHabitDate] = useState({
    list: [],
    check: []
  })
  const { user } = useContext(UserContext)

  useEffect(() => {
    const config = { headers: { Authorization: `Bearer ${user.token}` } }
    const promisse = axios.get(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily',
      config
    )
    promisse.then(res => {
      setHabitDate({
        ...habitDate,
        list: res.data,
        check: res.data.map(item => {
          let status
          const complete = item.habits.find(ele => {
            return ele.done === false
          })
          if (complete === undefined) {
            status = true
          } else {
            status = false
          }

          return { day: item.day, status: status }
        })
      })
    })
  }, [])
  console.log(habitDate)

  function tileClassName({ date, view }) {
    if (view === 'month') {
      let status
      let find

      habitDate.check.find(item => {
        if (item.day === getFormatedDate(date)) {
          status = item.status
          find = true
        }
        return null
      })
      if (find) {
        return status ? 'success' : 'fail'
      }
    }
  }

  function clickDay(day) {
    const formatDay = getFormatedDate(day)
    const dayClick = habitDate.list.find(item => item.day === formatDay)

    if (dayClick !== undefined) console.log('oi')
  }

  return (
    <Container>
      <Header image={user.image} />
      <Content>
        <h5>Histórico</h5>
        <CalendarContainer>
          <Calendar
            tileClassName={tileClassName}
            onClickDay={value => clickDay(value)}
          />
        </CalendarContainer>
      </Content>
      <Footer value={66} text={'Hoje'} />
    </Container>
  )
}
