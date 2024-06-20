import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #E7EFC5;
  font-family: "Luckiest Guy", cursive;
}

@font-face {
    font-family: 'SeoulNamsanM';
    src: url('./src/assets/fonts/SEOULNAMSANM.TTF') format('truetype');
    font-weight: normal;
    font-style: normal;
}

`;

export default GlobalStyles;
