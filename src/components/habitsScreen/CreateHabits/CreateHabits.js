import axios from 'axios'
import { useState, useContext } from 'react'
import { UserContext } from '../../providers/auth'
import { ThreeDots } from 'react-loader-spinner'
import { Container, ContainerCheck, Check, Form, Box } from './styles'

export default function CreateHabits({ setAddHabits }) {
  const { user, setUser } = useContext(UserContext)
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState({ value: false })
  const [check, setCheck] = useState([
    { day: 7, state: false },
    { day: 1, state: false },
    { day: 2, state: false },
    { day: 3, state: false },
    { day: 4, state: false },
    { day: 5, state: false },
    { day: 6, state: false }
  ])

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

  const toSend = event => {
    event.preventDefault()
    if (loading.value === true) return

    let cont = 0
    const days = []

    check.forEach(item => {
      if (item.state === true) days.push(item.day)
      else if (item.state === false) cont++
    })

    if (cont === check.length) {
      alert('Escolha pelo menos um dia')
      return
    }
    setLoading({ ...loading, value: true })

    const body = {
      name: inputValue,
      days: days
    }
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
    console.log(body)

    const promisse = axios.post(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
      body,
      config
    )
    promisse
      .then(({ data }) => {
        console.log(data)
        setUser({
          ...user,
          habits: [
            ...user.habits,
            { id: data.id, name: inputValue, days: days }
          ]
        })
        setAddHabits(false)
        loading.value = false
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
          <Check check={check[0].state} onClick={() => checkClick(7)}>
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
          <h6 onClick={() => setAddHabits(false)}>Cancelar</h6>
          <button type="submit">{buttonLoading()}</button>
        </Box>
      </Form>
    </Container>
  )
}
