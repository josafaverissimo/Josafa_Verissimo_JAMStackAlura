import React from 'react';
import { CabecalhoWrapper } from './styles/CabecalhoWrapper';
import { Button } from '../Button'

export default function Cabecalho() {
  return (
    <CabecalhoWrapper>
      <Button href="/about">{'<ME />'}</Button>

      <div style={{display: 'flex'}}>
        <Button ghost color="#000" href="/about">Sobre mim</Button>
        <Button ghost color="#000" href="/contact">Contato</Button>
      </div>
    </CabecalhoWrapper>
  )
}