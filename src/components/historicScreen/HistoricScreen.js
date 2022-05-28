import { useState, useContext } from 'react'
import { UserContext } from '../providers/auth'
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'
import Footer from '../shared/Footer/Footer'
import Header from '../shared/Header/Header'
import { Container, Content, CalendarContainer } from './styles'

export default function HistoricScreen() {
  // [new Date(2017, 0, 1), new Date(2017, 7, 1)]
  // const [value] = useState(['2022-05-24'])
  const { user } = useContext(UserContext)

  return (
    <Container>
      <Header image={user.image} />
      <Content>
        <h5>Histórico</h5>
        <h4>Em breve você poderá ver o histórico dos seus hábitos aqui!</h4>

        {/* <CalendarContainer>
          <Calendar
            formatDay={(locale, date) => formatDate(date, 'd')}
            value={value}
            // tileClassName={({ activeStartDate, date, view }) =>
            //   view === 'month' && date.getDay() === 3 ? 'wednesday' : null
            // }
          />
        </CalendarContainer> */}
      </Content>
      <Footer value={66} text={'Hoje'} />
    </Container>
  )
}
