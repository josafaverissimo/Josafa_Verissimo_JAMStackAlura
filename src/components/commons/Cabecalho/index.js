import React from 'react';
import CabecalhoWrapper from './styles/CabecalhoWrapper';
import Button from '../Button';

export default function Cabecalho() {
  return (
    <CabecalhoWrapper>
      <Button href="/about">{'<ME />'}</Button>

      <CabecalhoWrapper.ButtonWrapper>
        <Button ghost href="/about">Sobre mim</Button>
        <Button ghost href="/contact">Contato</Button>
      </CabecalhoWrapper.ButtonWrapper>
    </CabecalhoWrapper>
  );
}
