import styled, { css } from 'styled-components';

export default styled.button`
  font-family: 'Fira Sans Condensed', sans-serif;
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
  font-size: 1.125rem;
  border: none;

  ${({ ghost }) => {
    if (ghost) {
      return css`
        color: ${({ theme }) => theme.colors.secondary.main.contrastText};
        background: none;
      `;
    }
    return css`
        background: ${({ theme }) => theme.colors.primary.main.color};
      `;
  }}
`;
