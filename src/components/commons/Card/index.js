import React from 'react';
import { CardWrapper } from './styles/CardWrapper';
import { HighlightedCardWrapper } from './styles/HighlightedCardWrapper';

function HighlightedCard() {
  return (
    <HighlightedCardWrapper>
      <p>Destaque</p>
    </HighlightedCardWrapper>
  )
}

export default function Card({text, background, highlighted}) {
  return (
    <CardWrapper background={background}>
      <div>
        <HighlightedCard />
      </div>

      <p>
        {text}
      </p>
    </CardWrapper>
  )
}

Card.defaultProps = {
  highlighted: false
}