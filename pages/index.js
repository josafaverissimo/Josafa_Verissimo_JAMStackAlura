import React from 'react';
import Capa from '../src/components/commons/Capa';
import Cabecalho from '../src/components/commons/Cabecalho';
import Projetos from '../src/components/commons/Projetos';
import Footer from '../src/components/commons/Footer';

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

      <Footer />
    </div>
  )
}
