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
  align-items: center;
  gap: 25px;
  h6 {
    font: normal 400 15.976px 'Lexend Deca', cursive;
    color: ${props => props.color};
  }

  ion-icon {
    font-size: 25px;
    color: ${props => props.color};
  }

  h1 {
    font: normal 400 12.976px 'Lexend Deca', cursive;
  }
  div {
    width: 25px;
    height: 25px;
    border-radius: 25px;
  }
  .red {
    background-color: #ea5767;
  }
  .green {
    background-color: #8cc655;
  }
  .yellow {
    width: 25px;
    height: 25px;
    background-color: #ffff81;
    border-radius: inherit;
  }
`

export { Container, Box }
