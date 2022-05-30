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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 36px;
  overflow: auto;
  overflow-x: hidden;

  h5 {
    width: 375px;
    padding: 0 17px;
    font: normal 400 22.976px 'Lexend Deca', cursive;
    color: #126ba5;
    margin: 17px 0;
  }
  h4 {
    font: normal 400 17.976px 'Lexend Deca', cursive;
    color: #666666;
  }

  @media (max-width: 420px) {
    width: 100vw;
    padding-top: 2.99vh;
    padding: 0 4.53vw;
    padding-bottom: 5.39vh;

    h5 {
      width: 100vw;
      padding: 0 4.53vw;
      margin: 2.54vh 0;
    }
  }
`

const CalendarContainer = styled.div`
  .react-calendar {
    margin: 0 auto;
    border: none;
    box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.15);

    abbr[title] {
      text-decoration: none;
    }

    .fail {
      abbr {
        padding: 10px 10px;
        border-radius: 62px;
        background-color: #ea5767;
        color: #ffffff;
      }
    }

    .success {
      abbr {
        padding: 10px 10px;
        border-radius: 62px;
        background-color: #8cc655;
        color: #ffffff;
      }
    }
  }

  @media (max-width: 420px) {
    .react-calendar {
      width: 93.33vw;
    }
  }
`

export { Container, Content, CalendarContainer }
