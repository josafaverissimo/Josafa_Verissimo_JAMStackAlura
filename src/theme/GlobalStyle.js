import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize'

export default createGlobalStyle`

  ${normalize}

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