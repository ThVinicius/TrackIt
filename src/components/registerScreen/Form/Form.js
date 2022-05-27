import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'
import { Container } from './styles'

export default function Form() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState({ value: false })
  const [input, setInput] = useState({
    email: '',
    password: '',
    name: '',
    image: ''
  })
  const toSend = event => {
    event.preventDefault()
    if (loading.value === true) return
    setLoading({ ...loading, value: true })

    const body = {
      email: input.email,
      password: input.password,
      name: input.name,
      image: input.image
    }

    const promisse = axios.post(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',
      body
    )
    promisse
      .then(response => {
        alert('Cadastro realizado com sucesso')
        loading.value = false
        navigate('/')
      })
      .catch(() => {
        alert('Usuário já cadastrado!')
        setLoading({ ...loading, value: false })
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

  const hanleChangeInputName = e => {
    setInput({
      ...input,
      name: e
    })
  }

  const hanleChangeInputImage = e => {
    setInput({
      ...input,
      image: e
    })
  }

  const disableInput = () => {
    if (loading.value === false) return ''
    return 'disable'
  }

  const InputColorLoading = () => {
    if (loading.value === false) return '#FFFFFF'
    return '#F2F2F2'
  }

  const buttonLoading = () => {
    if (loading.value === false) return 'Cadastrar'
    return <ThreeDots color="#FFFFFF" height={13} width={51} />
  }
  const opacityButton = () => {
    if (loading.value === false) return '1'
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
        required
        disabled={disableInput()}
        placeholder="email"
        name="email"
        id="email"
        value={input.email}
        onChange={e => hanleChangeInputEmail(e.target.value)}
      />
      <input
        type="password"
        required
        disabled={disableInput()}
        placeholder="senha"
        id="passsword"
        value={input.password}
        onChange={e => hanleChangeInputPassword(e.target.value)}
      />
      <input
        type="text"
        required
        disabled={disableInput()}
        placeholder="nome"
        id="name"
        value={input.name}
        onChange={e => hanleChangeInputName(e.target.value)}
      />
      <input
        type="url"
        required
        disabled={disableInput()}
        placeholder="foto"
        id="picture"
        value={input.picture}
        onChange={e => hanleChangeInputImage(e.target.value)}
      />
      <button type="submit">{buttonLoading()}</button>
    </Container>
  )
}
