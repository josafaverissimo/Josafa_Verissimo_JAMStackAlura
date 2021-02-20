import React from 'react';
import { Base } from './styles/Base';

export default function Card({header, description, img, highlighted}) {
  return (
    <Base.Wrapper highlighted={highlighted}>
      <Base.Header highlighted={highlighted}>
        <img src={img} />
      </Base.Header>

      <Base.Text highlighted={highlighted}>
        <div>
          <h1>{header}</h1>
          <p>{description}</p>
        </div>
      </Base.Text>
    </Base.Wrapper>    
  )
}