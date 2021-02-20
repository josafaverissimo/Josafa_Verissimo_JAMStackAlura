import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const Wrapper = styled.div`
  border: .125rem solid #E9C46A;
  background: #fff;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.2);
  transition: .2s box-shadow ease-in-out;
  border-radius: 8px;
  ${({ highlighted }) => highlighted && css`
    ${breakpointsMedia({
      lg: css`
        display: flex;
      `
    })}
  ` }

  &:hover {
    box-shadow: 0 14px 25px rgba(0,0,0,.16);
  }

  margin-bottom: 30px;

  font-family: "Fira Sans Condensed", sans-serif;
`

const Header = styled.div`
  img {
    width: 100%;
    height: 390px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  ${({ highlighted }) => highlighted && css`
    ${breakpointsMedia({
      lg: css`
        width: 70%;

        img {
          height: 100%;
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
        }
      `
    })}
  `}
`

const Text = styled.div`
  h1 {
    font-size: 32px;
    line-height: 38px;
    text-align: center;
  }

  p {
    display: none;
  }

  ${({ highlighted }) => highlighted && css`
    ${breakpointsMedia({
      lg: css`
        width: 30%;
        margin: auto 30px;

        h1 {
          text-align: left;
        }

        p {
          display: block;
        }
      `
    })}
  `}
`

export const Base = {
  Wrapper,
  Header,
  Text
};