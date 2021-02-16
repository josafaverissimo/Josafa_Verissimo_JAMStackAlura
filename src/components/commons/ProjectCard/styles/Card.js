import styled from 'styled-components';

export const Card = {
  Wrapper: styled.div`
    border: 1px solid #E9C46A;
    position: relative;

    div {
      transition: .5s ease;
      position: absolute;
      top: 2%;
      left: 3%;
      transform: translate(-2%, -3%);
      -ms-transform: translate(-50%, -50%);
      width: 40%;
    }

    img {
      width: 300px;
      height: 170px;
      object-fit: cover;
    }
  `,
  Text: styled.p`
    padding: 30px;
    text-align: center;
    font-weight: 700;
    font-size: 1.5rem;
  `
}