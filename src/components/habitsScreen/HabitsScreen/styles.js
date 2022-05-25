import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  width: 375px;
  height: 79.02vh;
  background-color: #e8e8e8;
  padding-top: 20px;
`
const Menu = styled.div`
  width: 375px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 17px;

  h4 {
    font: normal 400 22.976px 'Lexend Deca', cursive;
    color: #126ba5;
  }

  button {
    width: 40px;
    height: 35px;
    background-color: #52b6ff;
    color: #ffffff;
    border-radius: 4.63636px;
    font: normal 400 26.976px 'Lexend Deca', cursive;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const ContainerHabits = styled.div`
  margin-top: 28px;
  padding: 0 17px;

  h4 {
    font: normal 400 17.976px 'Lexend Deca', cursive;
    color: #666666;
  }
`

export { Container, Content, Menu, ContainerHabits }
