import { Box } from './style'

export default function HabitDescription({ name, done }) {
  const icon = () => {
    if (done === false) {
      return <ion-icon name="close-circle"></ion-icon>
    }
    return <ion-icon name="checkmark-circle-outline"></ion-icon>
  }

  const color = () => {
    if (done === false) return 'red'
    return 'green'
  }

  return (
    <Box color={color()}>
      <h6>{name}</h6>
      {icon()}
    </Box>
  )
}
