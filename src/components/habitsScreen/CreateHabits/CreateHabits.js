import axios from 'axios'
import { useState, useContext } from 'react'
import { UserContext } from '../../providers/auth'
import { Container, ContainerCheck, Check, Form, Box } from './styles'

export default function CreateHabits({ setCreateHabits }) {
  const { user, setUser } = useContext(UserContext)
  const [inputValue, setInputValue] = useState('')
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
      .then(response => {
        console.log(response)
        setCreateHabits(false)
      })
      .catch(() => {
        alert('Dados incorretos')
      })
  }

  return (
    <Container>
      <Form onSubmit={toSend}>
        <input
          type="text"
          placeholder="nome do hábito"
          required
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <ContainerCheck>
          <Check check={check[0].state} onClick={() => setState(7)}>
            D
          </Check>
          <Check check={check[1].state} onClick={() => setState(1)}>
            S
          </Check>
          <Check check={check[2].state} onClick={() => setState(2)}>
            T
          </Check>
          <Check check={check[3].state} onClick={() => setState(3)}>
            Q
          </Check>
          <Check check={check[4].state} onClick={() => setState(4)}>
            Q
          </Check>
          <Check check={check[5].state} onClick={() => setState(5)}>
            S
          </Check>
          <Check check={check[6].state} onClick={() => setState(6)}>
            S
          </Check>
        </ContainerCheck>
        <Box>
          <h6 onClick={() => setCreateHabits(false)}>Cancelar</h6>
          <button type="submit">Salvar</button>
        </Box>
      </Form>
    </Container>
  )
}
