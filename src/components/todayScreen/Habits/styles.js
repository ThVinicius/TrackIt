import styled from 'styled-components'

const ContainerHabits = styled.div`
  width: 340px;
  height: 94px;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  h5 {
    font: normal 400 19.976px 'Lexend Deca', cursive;
    color: #666666;
    width: 233px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h4 {
    font: normal 400 12.976px 'Lexend Deca', cursive;
    color: #666666;
  }

  @media (max-width: 420px) {
    width: 90.66vw;
    height: 14.09vh;
    border-radius: 5px;
    padding: 0 4vw;

    h5 {
      width: 62.13vw;
    }
  }
`

const CheckBox = styled.div`
  width: 69px;
  height: 69px;
  background-color: ${props => props.color};
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ion-icon {
    color: #ffffff;
    font-size: 50px;
  }
`

const Box = styled.div`
  margin-top: 7px;
`
const Current = styled.span`
  color: ${props => props.color};
`

const Highest = styled.span`
  color: ${props => props.color};
`

export { ContainerHabits, Box, CheckBox, Current, Highest }
