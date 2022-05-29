import styled from 'styled-components'

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
export { Box }
