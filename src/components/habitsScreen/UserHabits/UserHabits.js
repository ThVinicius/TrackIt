import axios from 'axios'
import { useState, useContext } from 'react'
import { UserContext } from '../../providers/auth'
import { Container, ContainerCheck, Check, Icon } from './styles'

const confirm = user => {
  return window.confirm(
    `O hábito -- ${user.name} -- será deletado.\nVocê confirma essa ação?`
  )
}

function userHabits(user) {
  user.days = user.days.sort((a, b) => a - b)

  const array = []
  let aux = 0
  for (let i = 0; i < 7; i++) {
    if (user.days[aux] === i) {
      array.push({ day: i, state: true })
      aux++
    } else {
      array.push({ day: i, state: false })
    }
  }
  return array
}

export default function UserHabits({ user }) {
  const [check] = useState(userHabits(user))
  const { user: token, setUser } = useContext(UserContext)

  function backGroundColor(index) {
    if (check[index].state === false) return '#FFFFFF'
    return '#CFCFCF'
  }
  function color(index) {
    if (check[index].state === false) return '#CFCFCF'
    return '#FFFFFF'
  }

  const deleteHabit = () => {
    if (confirm(user) === false) return

    const config = {
      headers: {
        Authorization: `Bearer ${token.token}`
      }
    }

    const promisse = axios.delete(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${user.id}`,
      config
    )

    promisse
      .then(() => {
        setUser({
          ...token,
          habits: token.habits.filter(item => item.id !== user.id)
        })
      })
      .catch(() => {})
  }

  return (
    <Container>
      <div>
        <h6>{user.name}</h6>
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
