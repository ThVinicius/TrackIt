import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h6 {
    font: normal 400 22.976px 'Lexend Deca', cursive;
    color: #126ba5;
  }

  p {
    font: normal 400 17.976px 'Lexend Deca', cursive;
    color: #bababa;
  }
`

const Content = styled.div`
  width: 375px;
  height: 79.02vh;
  background-color: #e8e8e8;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 41px;
`

const BoxDiv = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 28px;

  h5 {
    font: normal 400 17.976px 'Lexend Deca', cursive;
    color: #8fc549;
  }
`
const BoxHabits = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export { Container, Content, BoxDiv, BoxHabits }
