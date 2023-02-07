import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #a9a9a9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 32px;
  }

  h6 {
    color: #52b6ff;
    text-decoration-line: underline;
    font: normal 400 13.976px 'Lexend Deca', sans-serif;
    margin-top: 25px;
  }
`

const Content = styled.div`
  width: 375px;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export { Container, Content }
