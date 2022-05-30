import axios from 'axios'
import { useState, useContext } from 'react'
import { UserContext } from '../../providers/auth'
import { Container, ContainerCheck, Check, Icon } from './styles'
import progressBar from '../../../functions/progressBar'
import weekdays from '../../../functions/weekdays'

const confirm = name => {
  return window.confirm(
    `O hábito -- ${name} -- será deletado.\nVocê confirma essa ação?`
  )
}

export default function UserHabits({ habit }) {
  const [check] = useState(weekdays(habit.days))
  const { user, setUser } = useContext(UserContext)

  function backGroundColor(index) {
    if (check[index].state === false) return '#FFFFFF'
    return '#CFCFCF'
  }
  function color(index) {
    if (check[index].state === false) return '#CFCFCF'
    return '#FFFFFF'
  }

  const deleteHabit = () => {
    if (confirm(habit.name) === false) return

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }

    const promisse = axios.delete(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`,
      config
    )

    promisse
      .then(() => {
        user.habits = user.habits.filter(item => item.id !== habit.id)
        user.todayHabits.list = user.todayHabits.list.filter(
          item => item.id !== habit.id
        )

        setUser({
          ...user,
          todayHabits: {
            ...user.todayHabits,
            progress: progressBar(user.todayHabits.list)
          }
        })
      })
      .catch(() => {})
  }

  return (
    <Container>
      <div>
        <h6>{habit.name}</h6>
        <ContainerCheck>
          <Check color={color(0)} backGroundColor={backGroundColor(0)}>
            D
          </Check>
          <Check color={color(1)} backGroundColor={backGroundColor(1)}>
            S
          </Check>
          <Check color={color(2)} backGroundColor={backGroundColor(2)}>
            T
          </Check>
          <Check color={color(3)} backGroundColor={backGroundColor(3)}>
            Q
          </Check>
          <Check color={color(4)} backGroundColor={backGroundColor(4)}>
            Q
          </Check>
          <Check color={color(5)} backGroundColor={backGroundColor(5)}>
            S
          </Check>
          <Check color={color(6)} backGroundColor={backGroundColor(6)}>
            S
          </Check>
        </ContainerCheck>
      </div>
      <Icon onClick={deleteHabit}>
        <ion-icon name="trash-outline"></ion-icon>
      </Icon>
    </Container>
  )
}
