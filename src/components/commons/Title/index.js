import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';

export const Title = styled.div`
  text-align: center;

  h1 {
    width: min-content;
    font-size: 4rem;
    padding: 0;
    margin: 0;

    ${breakpointsMedia({
    xs: css`
      font-size: 4rem;
    `,
    sm: css`
      font-size: 5rem;
    `
  })}
  }

  p {
    font-size: 3rem;
    margin: 0;
    padding: 0;

    ${breakpointsMedia({
    xs: css`
      font-size: 4rem;
    `,
    sm: css`
      font-size: 5rem;
    `
  })}
  }
  
`;