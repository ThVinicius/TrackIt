import { Box, Container } from './style'

function UserHabits({ name, done }) {
  const icon = () => {
    if (done === false) {
      return <ion-icon name="close-circle"></ion-icon>
    }
    return <ion-icon name="checkmark-circle-outline"></ion-icon>
  }

  const color = () => {
    if (done === false) return '#ea5767'
    return '#8cc655'
  }

  return (
    <Box color={color()}>
      <h6>{name}</h6>
      {icon()}
    </Box>
  )
}

export default function HabitDescription({ day }) {
  const render = () => {
    if (day.click === true) {
      return (
        <Container>
          <h3>{day.name}</h3>
          {day.list.map((item, index) => (
            <UserHabits key={index} done={item.done} name={item.name} />
          ))}
        </Container>
      )
    }
    return <></>
  }

  return render()
}
