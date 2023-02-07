import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #a9a9a9;
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
  padding-bottom: 36px;
  overflow: auto;
  overflow-x: hidden;

  @media (max-width: 420px) {
    width: 100vw;
    padding-top: 2.99vh;
    padding-bottom: 5.31vh;
  }
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
    cursor: pointer;
  }

  @media (max-width: 420px) {
    width: 100vw;
    padding: 0 4.53vw;
  }
`
const ContainerHabits = styled.div`
  margin-top: 28px;
  padding: 0 17px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  h4 {
    font: normal 400 17.976px 'Lexend Deca', cursive;
    color: #666666;
  }

  @media (max-width: 420px) {
    margin-top: 4.19vh;
    padding: 0 4.53vw;
    gap: 1.49vh;
  }
`

export { Container, Content, Menu, ContainerHabits }
