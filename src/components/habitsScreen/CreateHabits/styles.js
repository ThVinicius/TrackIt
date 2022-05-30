import styled from 'styled-components'

const Container = styled.div`
  width: 340px;
  height: 180px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 18px;

  @media (max-width: 420px) {
    width: 90.66vw;
    height: 26.98vh;
    padding: 2.69vh 4.8vw;
  }
`

const ContainerCheck = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 4px;
`

const Check = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props => (props.check ? '#CFCFCF' : '#FFFFFF')};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font: normal 400 19.976px 'Lexend Deca', cursive;
  color: ${props => (props.check ? '#FFFFFF' : '#DBDBDB')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const Form = styled.form`
  input {
    width: 303px;
    height: 45px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    background-color: ${props => props.color};
    font: normal 400 19.976px 'Lexend Deca', cursive;
    color: #666666;
    padding-left: 11px;
  }

  input::placeholder {
    font: normal 400 19.976px 'Lexend Deca', cursive;
    color: #dbdbdb;
    padding: 0 11px;
  }

  @media (max-width: 420px) {
    input {
      width: 80.8vw;
      padding-left: 2.93vw;
    }
  }
`
const Box = styled.div`
  width: 303px;
  background-color: #ffffff;
  margin-top: 36px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 23px;

  h6 {
    font: normal 400 15.976px 'Lexend Deca', cursive;
    color: #52b6ff;
    cursor: pointer;
  }

  button {
    width: 84px;
    height: 35px;
    background-color: #52b6ff;
    border-radius: 4.63636px;
    color: #ffffff;
    font: normal 400 15.976px 'Lexend Deca', cursive;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 420px) {
    width: 80.8vw;
    margin-top: 5.39vh;
    gap: 6.13vw;
  }
`
export { Container, ContainerCheck, Check, Form, Box }
