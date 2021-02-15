import styled, { css } from 'styled-components'

export const Button = styled.button`
  font-family: 'Fira Sans Condensed', sans-serif;
  color: ${(props) => props.color ? props.color : "#fff"};
  font-size: 1.125rem;
  border: none;

  ${(props) => {
    if(!!props.ghost) {
      return css`
        background: none;
      `
    } else {
      return css`
        background: #E9C46A;
      `
    }
  }}
`