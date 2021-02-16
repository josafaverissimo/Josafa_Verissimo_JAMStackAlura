import React from 'react';
import { Card } from './styles/Card';
import { HighlightedCardWrapper } from './styles/HighlightedCardWrapper';

function HighlightedCard() {
  return (
    <HighlightedCardWrapper>
      <p>Destaque</p>
    </HighlightedCardWrapper>
  )
}

export default function ProjectCard({text, background, highlighted}) {
  console.log(highlighted)
  return (
    <Card.Wrapper>
      <img src={background} />

      {highlighted && <HighlightedCard />}

      <Card.Text>
        {text}
      </Card.Text>
    </Card.Wrapper>
  )
}

Card.defaultProps = {
  highlighted: false
}