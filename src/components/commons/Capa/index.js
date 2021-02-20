import React from 'react';
import { CapaWrapper } from './styles/CapaWrapper';
import { Title } from '../Title';

export default function Capa() {
  return (
    <CapaWrapper>
      <img src="/images/plantTopLeft.png" style={{
        alignSelf: "flex-start",
        marginBottom: "auto"
      }}/>

      <Title textAlign="center" width="min-content">
        <h1>Josafá Veríssimo</h1>
        <p>Portfolio</p>
      </Title>
      
      <img src="/images/plantBottomRight.png" style={{
        marginTop: "auto",
        alignSelf: "flex-end"
      }}/>
    </CapaWrapper>
  )
}