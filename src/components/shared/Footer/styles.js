import styled from 'styled-components'
import { CircularProgressbar } from 'react-circular-progressbar'

const Container = styled.footer`
  width: 375px;
  height: 10.49vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
  font-size: 50px;

  .CircularProgressbar-text {
    font: normal 400 17.976px 'Lexend Deca', sans-serif;
  }
`

const Box = styled.div`
  height: 10.49vh;
  display: flex;
  align-items: center;
`
export { Container, Progressbar, Box }
