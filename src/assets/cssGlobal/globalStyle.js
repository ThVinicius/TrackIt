import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
  }

  html, body{
    overflow-x: hidden;
  }

  button{
    border: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`
export default GlobalStyle
