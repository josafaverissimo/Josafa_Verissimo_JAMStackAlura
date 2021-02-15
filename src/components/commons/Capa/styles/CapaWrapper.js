import styled from 'styled-components';

export const CapaWrapper = styled.div`
  background-image: url('/images/plantBottomRight.png'), url('/images/plantTopLeft.png');
  background-repeat: no-repeat;
  background-position: right bottom, left top;
  background-size: 250px 350px, 250px 350px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  h1, p {
    font-family: 'Fira Sans Condensed', sans-serif;
  }

  h1 {
    font-weight: 400;
  }

  p {
    font-weight: lighter;
  }
`;