import React from 'react';
import { Base } from './styles/Base';

export default function Card({text, img}) {
  return (
    <Base.Wrapper>
      <Base.Header>
        <img src={img} />
      </Base.Header>

      <Base.Description>
        {text}
      </Base.Description>
    </Base.Wrapper>    
  )
}