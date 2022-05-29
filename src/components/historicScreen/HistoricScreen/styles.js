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
`

const CalendarContainer = styled.div`
  .react-calendar {
    margin: 0 auto;
    border: none;
    box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.15);
    /* .complete {
      background-color: var(--green-done);
      color: #fff;
    }
    .incomplete {
      background-color: var(--red-incomplete);
      color: #fff;
    } */
    /* &__month-view__days__day {
      border-radius: 17px;
      max-width: 34px;
      max-height: 34px;
      margin: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    } */
    /* &__tile--now {
      background-color: var(--blue-light) !important ;
      color: #fff !important;
    } */
    /* &__tile--active {
      background-color: var(--blue-dark) !important;
    } */

    .fail {
      background-color: red;
      color: #ffffff;
      border-radius: 100px;
    }
    .success {
      background-color: green;
      color: #ffffff;
      border-radius: 100px;
    }
  }

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
const Description = styled.div`
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

export { Container, Content, CalendarContainer, Description }
