import styled from 'styled-components'

const Container = styled.div`
  width: 340px;
  height: 91px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h6 {
    font: normal 400 19.976px 'Lexend Deca', cursive;
    color: #666666;
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
  background-color: ${props => props.backGroundColor};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font: normal 400 19.976px 'Lexend Deca', cursive;
  color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled.div`
  height: 91px;
  padding-top: 11px;
  cursor: pointer;
`

export { Container, ContainerCheck, Check, Icon }