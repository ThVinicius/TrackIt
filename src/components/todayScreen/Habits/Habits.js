import axios from 'axios'
import { useState, useContext } from 'react'
import { UserContext } from '../../providers/auth'
import { ContainerHabits, Box, CheckBox, Current, Highest } from './styles'
import progressBar from '../../../functions/progressBar'

export default function Habits({ data }) {
  const { user, setUser } = useContext(UserContext)
  const [habits] = useState({
    id: data.id,
    currentSequence: data.currentSequence,
    done: data.done,
    highestSequence: data.highestSequence,
    sequence: data.sequence,
    status: false
  })

  function checkHabits() {
    if (habits.status === true) return

    habits.status = true

    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${data.id}`
    const config = { headers: { Authorization: `Bearer ${user.token}` } }

    const { done, currentSequence, highestSequence } = habits
    if (done === false) {
      const promisse = axios.post(`${URL}/check`, null, config)
      promisse.then(() => {
        habits.status = false
      })

      habits.done = true

      if (habits.sequence === true) {
        habits.currentSequence = currentSequence + 1
        habits.highestSequence = highestSequence + 1
      } else {
        habits.currentSequence = currentSequence + 1
      }

      user.todayHabits.list = user.todayHabits.list.map(item => {
        const { done } = item
        if (item.id === habits.id) item.done = !done
        return item
      })
      setUser({
        ...user,
        todayHabits: {
          ...user.todayHabits,
          progress: progressBar(user.todayHabits.list)
        }
      })
    } else {
      const promisse = axios.post(`${URL}/uncheck`, null, config)

      promisse.then(() => {
        axios
          .get(
            'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
            config
          )
          .then(res => {
            user.todayHabits.list = res.data

            res.data.find(item => {
              if (item.id === data.id) {
                habits.currentSequence = item.currentSequence
                habits.highestSequence = item.highestSequence
              }
            })

            setUser({
              ...user,
              todayHabits: {
                ...user.todayHabits,
                progress: progressBar(user.todayHabits.list)
              }
            })
            habits.status = false
          })
      })

      habits.done = false
    }
  }

  function day(number) {
    if (number > 1 || number < -1) return 'dias'
    return 'dia'
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
              {habits.currentSequence} {day(habits.currentSequence)}
            </Current>
          </h4>
          <h4>
            Seu recorde:{' '}
            <Highest color={highestColor()}>
              {habits.highestSequence} {day(habits.highestSequence)}
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
