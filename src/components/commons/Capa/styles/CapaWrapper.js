import styled from 'styled-components';

export const CapaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  h1, p {
    font-family: 'Fira Sans Condensed', sans-serif;
  }

  h1 {
    font-weight: 400;
  }

  p {
    font-weight: 300;
  }
`;