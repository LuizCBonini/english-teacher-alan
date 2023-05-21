import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
  
  :root {
    --primary-color: #6772f0;
    --second-color: #FAD550;
    --black: #333333;
    --bg-color: #f4f5ff;

    --font-style: Poppins, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: var(--bg-color);
  }

`;
export default GlobalStyle;
