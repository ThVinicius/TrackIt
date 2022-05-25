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
  padding: 0 17px;

  h5 {
    font: normal 400 22.976px 'Lexend Deca', cursive;
    color: #126ba5;
    margin: 17px 0;
  }
  h4 {
    font: normal 400 17.976px 'Lexend Deca', cursive;
    color: #666666;
  }
`

export { Container, Content }
