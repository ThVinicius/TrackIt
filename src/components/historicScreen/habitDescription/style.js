import styled from 'styled-components'

const Container = styled.div`
  background-color: #ffffff;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
  gap: 5px;
  padding: 10px;
  border-radius: 15px;

  h3 {
    font: normal 400 19.976px 'Lexend Deca', cursive;
    color: #126ba5;
  }
`

const Box = styled.div`
  display: flex;
  gap: 25px;
  h6 {
    font: normal 400 17.976px 'Lexend Deca', cursive;
    color: ${props => props.color};
  }

  ion-icon {
    font-size: 25px;
    color: ${props => props.color};
  }
`

export { Container, Box }
