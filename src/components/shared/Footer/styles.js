import styled from 'styled-components'
import { CircularProgressbar } from 'react-circular-progressbar'

const Container = styled.footer`
  width: 375px;
  height: 10.49vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 31px;
  background-color: #ffffff;

  h4 {
    font: normal 400 17.976px 'Lexend Deca', cursive;
    color: #52b6ff;
  }
`

const Progressbar = styled(CircularProgressbar)`
  width: 91px;
  height: 91px;
  margin-bottom: 45px;
`
export { Container, Progressbar }
