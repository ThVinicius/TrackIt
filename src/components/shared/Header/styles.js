import styled from 'styled-components'

const Container = styled.header`
  width: 375px;
  height: 10.49vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 0 10px;

  h5 {
    font: normal 400 38.982px 'Playball', cursive;
    color: #ffffff;
  }

  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    cursor: pointer;
  }

  @media (max-width: 420px) {
    width: 100vw;
    height: 10.49vh;
    padding: 0 2.66vw;
  }
`
export { Container }
