import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';

export default styled.div`
  /* ${propToStyle('textAlign')}

  ${propToStyle('margin')}

  h1 {
    ${propToStyle('width')}
    font-size: 4rem;
    padding: 0;
    margin: 0;

    ${breakpointsMedia({
    xs: css`
        font-size: 4rem;
      `,
    sm: css`
        font-size: 5rem;
      `,
  })}

    ${propToStyle('margin')}
    ${propToStyle('fontWeight')}
    ${propToStyle('fontSize')}
    ${propToStyle('fontFamily')}
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
      `,
  })}

    ${propToStyle('margin')}
    ${propToStyle('fontWeight')}
    ${propToStyle('fontSize')}
    ${propToStyle('fontFamily')}
  } */

`;
