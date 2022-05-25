import styled from 'styled-components'

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;

  input {
    width: 303px;
    height: 45px;
    background-color: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
  }

  input::placeholder {
    font: normal 400 19.976px 'Lexend Deca', sans-serif;
    color: #dbdbdb;
    padding: 0 17px;
  }

  button {
    width: 303px;
    height: 45px;
    background-color: #52b6ff;
    border-radius: 4.63636px;
    color: #ffffff;
    font: normal 400 20.976px 'Lexend Deca', sans-serif;
    text-align: center;
  }
`
export { Container }
