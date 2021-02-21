import React from 'react';
import PropTypes from 'prop-types';
import Base from './styles/Base';
import Text from '../../foundation/Text';

export default function Card({
  header, description, img, highlighted,
}) {
  return (
    <Base.Wrapper highlighted={highlighted}>
      <Base.Header highlighted={highlighted}>
        <img src={img} alt="Imagem do card" />
      </Base.Header>

      <Base.TextWrapper highlighted={highlighted}>
        <Text tag="h1" variant="titleCard" color="background.main.contrastText">{header}</Text>
        <Text tag="p" variant="paragraph1" color="background.main.contrastText">{description}</Text>
      </Base.TextWrapper>
    </Base.Wrapper>
  );
}

Card.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  highlighted: PropTypes.bool.isRequired,
};
