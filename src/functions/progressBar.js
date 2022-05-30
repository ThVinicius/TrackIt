export default function progressBar(array) {
  let cont = 0
  array.forEach(item => {
    if (item.done === true) cont++
  })
  if (cont > 0) {
    return parseInt((cont / array.length) * 100)
  }
  return cont
}
