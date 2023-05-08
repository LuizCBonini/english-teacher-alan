import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
  
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  :root {
    --primary-color: #6772f0
    --second-color: #FAD550
    --black: #333333
  }
`;
export default GlobalStyle;
