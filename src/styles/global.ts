import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    outline: 0;
  }


  html, body, #root {
    height: 100vh;
  }

  body{
    font-family: "Roboto", sans-serif, Arial;
    font-size: .9375rem;
    line-height: 1.5;
    color: #fff;
    background-color: #333;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
