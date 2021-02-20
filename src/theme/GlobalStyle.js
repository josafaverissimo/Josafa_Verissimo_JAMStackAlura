import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ${normalize}

  p {
    margin: 0;
    padding: 0;
  }

  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`