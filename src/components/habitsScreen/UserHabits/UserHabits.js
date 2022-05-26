import axios from 'axios'
import { useState, useContext } from 'react'
import { UserContext } from '../../providers/auth'
import { Container, ContainerCheck, Check, Icon } from './styles'

export default function UserHabits({ user }) {
  const [check] = useState([])
  const { user: token, setUser } = useContext(UserContext)
  user.days = user.days.sort((a, b) => a - b)

  let aux = 0
  for (let i = 1; i <= 7; i++) {
    if (user.days[aux] === i) {
      check.push({ day: i, state: true })
      aux++
    } else {
      check.push({ day: i, state: false })
    }
  }

  function backGroundColor(index) {
    if (check[index].state === false) return '#FFFFFF'
    return '#CFCFCF'
  }
  function color(index) {
    if (check[index].state === false) return '#CFCFCF'
    return '#FFFFFF'
  }

  const deleteHabit = () => {
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
        setUser(user.filter(item => item.id !== user.id))
        console.log(user)
      })
      .catch(() => {
        console.log('não deletou')
        console.log(config)
      })
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
