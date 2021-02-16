import React from 'react';
import Capa from '../src/components/commons/Capa';
import Cabecalho from '../src/components/commons/Cabecalho';
import Projetos from '../src/components/commons/Projetos';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flex: '1',
        flexWrap: 'wrap'        
      }}
    >
      <Capa />

      <Cabecalho />

      <Projetos />
    </div>
  )
}
