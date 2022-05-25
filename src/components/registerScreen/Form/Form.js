import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Container } from './styles'

export default function Form() {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    email: '',
    password: '',
    name: '',
    image: ''
  })
  const toSend = event => {
    event.preventDefault()

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
        navigate('/')
      })
      .catch(response => {
        alert(response.data.message)
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
  console.log(input)
  return (
    <Container onSubmit={toSend}>
      <input
        type="email"
        required
        placeholder="email"
        name="email"
        id="email"
        value={input.email}
        onChange={e => hanleChangeInputEmail(e.target.value)}
      />
      <input
        type="password"
        required
        placeholder="senha"
        id="passsword"
        value={input.password}
        onChange={e => hanleChangeInputPassword(e.target.value)}
      />
      <input
        type="text"
        required
        placeholder="nome"
        id="name"
        value={input.name}
        onChange={e => hanleChangeInputName(e.target.value)}
      />
      <input
        type="url"
        required
        placeholder="foto"
        id="picture"
        value={input.picture}
        onChange={e => hanleChangeInputImage(e.target.value)}
      />
      <button type="submit">Cadastrar</button>
    </Container>
  )
}
