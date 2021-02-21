import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import TypographyVariants from '../../../theme/typographyVariants';
import propToStyle from '../../../theme/utils/propToStyle';

const TextBase = styled.span`
  ${({ variant }) => TypographyVariants[variant]}

  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  font-family: ${({ theme }) => theme.fontFamily};

  ${propToStyle('width')}
  ${propToStyle('textAlign')}
  ${propToStyle('fontFamily')}
  ${propToStyle('margin')}
`;

export default function Text({
  tag, variant, children, ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      { children }
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
