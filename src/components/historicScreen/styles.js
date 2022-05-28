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

const CalendarContainer = styled.div`
  /* .react-calendar {
    width: 400px;
    max-width: 100%;
    background-color: #fff;
    color: #222;

    border-radius: 8px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }
  /* .react-calendar__tile--now {
    background: pink;
  } */
  /* .react-calendar__tile--hasActive {
    border-radius: 55px;
    height: 44px;
    background-color: #dfdfdf;
  }
  abbr[title] {
    text-decoration: none;
  } */
`

export { Container, Content, CalendarContainer }
