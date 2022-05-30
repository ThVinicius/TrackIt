import axios from 'axios'
import { useState, useContext } from 'react'
import 'dayjs/locale/pt-br'
import dayjs from 'dayjs'
import { UserContext } from '../../providers/auth'
import { ThreeDots } from 'react-loader-spinner'
import { Container, ContainerCheck, Check, Form, Box } from './styles'

const today = Number(dayjs().locale('pt-br').format('d'))

const weekdays = arrayDays => {
  arrayDays = arrayDays.sort((a, b) => a - b)

  const array = []
  let aux = 0
  for (let i = 0; i < 7; i++) {
    if (arrayDays[aux] === i) {
      array.push({ day: i, state: true })
      aux++
    } else {
      array.push({ day: i, state: false })
    }
  }
  return array
}

const days = array => {
  const aux = []
  array.forEach(item => {
    if (item.state === true) aux.push(item.day)
  })
  return aux
}

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

export default function CreateHabits({ setAddHabits }) {
  const { user } = useContext(UserContext)
  const [inputValue, setInputValue] = useState(user.createHabits.name)
  const [loading, setLoading] = useState({ value: false })
  const [check, setCheck] = useState(weekdays(user.createHabits.days))

  function setState(weekday) {
    setCheck(
      check.map(item => {
        const { state } = item
        if (item.day === weekday) {
          item.state = !state
        }
        return item
      })
    )
  }

  const cancel = () => {
    user.createHabits.name = inputValue
    user.createHabits.days = days(check)

    setAddHabits(false)
  }

  const toSend = event => {
    event.preventDefault()
    if (loading.value === true) return

    const arrayDays = days(check)

    if (arrayDays.length === 0) {
      alert('Escolha pelo menos um dia')
      return
    }
    setLoading({ ...loading, value: true })

    const body = {
      name: inputValue,
      days: arrayDays
    }
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }

    const promisse = axios.post(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
      body,
      config
    )
    promisse
      .then(({ data }) => {
        user.habits = [
          ...user.habits,
          { id: data.id, name: inputValue, days: arrayDays }
        ]

        let day = false
        arrayDays.find(item => {
          if (item === today) day = true
        })

        if (day === true) {
          user.todayHabits.list = [
            ...user.todayHabits.list,
            { id: data.id, done: false }
          ]
          user.todayHabits.progress = progressBar(user.todayHabits.list)
        }
        user.createHabits.name = ''
        user.createHabits.days = []

        loading.value = false
        setAddHabits(false)
      })
      .catch(() => {
        alert('Dados incorretos')
        setLoading({ ...loading, value: false })
      })
  }
  function buttonLoading() {
    if (loading.value === false) return 'Salvar'
    return <ThreeDots color="#FFFFFF" height={13} width={51} />
  }
  function disableInput() {
    if (loading.value === false) return ''
    return 'disable'
  }
  function InputColorLoading() {
    if (loading.value === false) return '#FFFFFF'
    return '#F2F2F2'
  }
  const checkClick = index => {
    if (loading.value === false) {
      setState(index)
    }
  }

  return (
    <Container>
      <Form onSubmit={toSend} color={InputColorLoading()}>
        <input
          type="text"
          placeholder="nome do hábito"
          required
          disabled={disableInput()}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <ContainerCheck>
          <Check check={check[0].state} onClick={() => checkClick(0)}>
            D
          </Check>
          <Check check={check[1].state} onClick={() => checkClick(1)}>
            S
          </Check>
          <Check check={check[2].state} onClick={() => checkClick(2)}>
            T
          </Check>
          <Check check={check[3].state} onClick={() => checkClick(3)}>
            Q
          </Check>
          <Check check={check[4].state} onClick={() => checkClick(4)}>
            Q
          </Check>
          <Check check={check[5].state} onClick={() => checkClick(5)}>
            S
          </Check>
          <Check check={check[6].state} onClick={() => checkClick(6)}>
            S
          </Check>
        </ContainerCheck>
        <Box>
          <h6 onClick={cancel}>Cancelar</h6>
          <button type="submit">{buttonLoading()}</button>
        </Box>
      </Form>
    </Container>
  )
}
