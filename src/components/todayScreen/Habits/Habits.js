import axios from 'axios'
import { useState, useContext } from 'react'
import { UserContext } from '../../providers/auth'
import { ContainerHabits, Box, CheckBox, Current, Highest } from './styles'

export default function Habits({ data, setListHabits, listHabits }) {
  const { user } = useContext(UserContext)
  const [habits] = useState({
    id: data.id,
    currentSequence: data.currentSequence,
    done: data.done,
    highestSequence: data.highestSequence,
    sequence: data.sequence
  })

  function checkHabits() {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${data.id}`
    const config = { headers: { Authorization: `Bearer ${user.token}` } }

    const { done, currentSequence, highestSequence } = habits
    if (done === false) {
      const promisse = axios.post(`${URL}/check`, null, config)
      promisse.then(() => {})

      habits.done = true

      if (habits.sequence === true) {
        habits.currentSequence = currentSequence + 1
        habits.highestSequence = highestSequence + 1
      } else {
        habits.currentSequence = currentSequence + 1
      }

      setListHabits({
        ...listHabits,
        list: listHabits.list.map(item => {
          const { done } = item
          if (item.id === habits.id) item.done = !done
          return item
        })
      })
    } else {
      const promisse = axios.post(`${URL}/uncheck`, null, config)
      promisse.then(() => {})

      habits.done = false

      if (habits.sequence === true) {
        habits.currentSequence = currentSequence - 1
        habits.highestSequence = highestSequence - 1
      } else {
        habits.currentSequence = currentSequence - 1
      }

      setListHabits({
        ...listHabits,
        list: listHabits.list.map(item => {
          const { done } = item
          if (item.id === habits.id) item.done = !done
          return item
        })
      })
    }
  }

  function colorCheck() {
    if (habits.done === false) return '#EBEBEB'
    return '#8FC549'
  }
  function currentColor() {
    if (habits.done === false) return '#666666'
    return '#8FC549'
  }
  function highestColor() {
    if (
      habits.done === true &&
      habits.currentSequence === habits.highestSequence
    ) {
      return '#8FC549'
    }
    return '#666666'
  }
  return (
    <ContainerHabits>
      <div>
        <h5>{data.name}</h5>
        <Box>
          <h4>
            Sequência atual:{' '}
            <Current color={currentColor()}>
              {habits.currentSequence} dias
            </Current>
          </h4>
          <h4>
            Seu recorde:{' '}
            <Highest color={highestColor()}>
              {habits.highestSequence} dias
            </Highest>
          </h4>
        </Box>
      </div>
      <CheckBox onClick={checkHabits} color={colorCheck()}>
        <ion-icon name="checkmark-sharp"></ion-icon>
      </CheckBox>
    </ContainerHabits>
  )
}
