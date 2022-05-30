export default function weekdays(arrayDays) {
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
