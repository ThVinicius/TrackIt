import { useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'
import { UserContext } from '../../providers/auth'
import { Container } from './styles'

export default function Form() {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState({
    email: '',
    password: ''
  })
  const toSend = event => {
    event.preventDefault()
    setLoading(!loading)

    const body = {
      email: input.email,
      password: input.password
    }

    const promisse = axios.post(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',
      body
    )
    promisse
      .then(response => {
        console.log(response)
        user.image = response.data.image
        user.token = response.data.token
        navigate('/habitos')
      })
      .catch(response => {
        setLoading(!loading)
      })
  }

  const hanleChangeInputEmail = e => {
    setInput({
      ...input,
      email: e
    })
  }

  const hanleChangeInputPassword = e => {
    setInput({
      ...input,
      password: e
    })
  }
  function disableInput() {
    if (loading === false) return ''
    return 'disable'
  }
  function InputColorLoading() {
    if (loading === false) return '#FFFFFF'
    return '#F2F2F2'
  }
  function spinnerLoading() {
    if (loading === false) return 'Entrar'
    return <ThreeDots color="#FFFFFF" height={13} width={51} />
  }
  function opacityButton() {
    if (loading === false) return '1'
    return '0.7'
  }

  return (
    <Container
      onSubmit={toSend}
      color={InputColorLoading()}
      opacity={opacityButton()}
    >
      <input
        type="email"
        id="email"
        placeholder="email"
        required
        disabled={disableInput()}
        value={input.email}
        onChange={e => hanleChangeInputEmail(e.target.value)}
      />
      <input
        type="password"
        id="password"
        placeholder="senha"
        required
        disabled={disableInput()}
        value={input.password}
        onChange={e => hanleChangeInputPassword(e.target.value)}
      />
      <button type="submit">{spinnerLoading()}</button>
    </Container>
  )
}
