import React from 'react';
import CapaWrapper from './styles/CapaWrapper';
import Text from '../../foundation/Text';

export default function Capa() {
  return (
    <CapaWrapper>
      <img
        src="/images/plantTopLeft.png"
        style={{
          alignSelf: 'flex-start',
          marginBottom: 'auto',
        }}
        alt="planta no topo"
      />

      <Text
        tag="h1"
        variant="biggestException"
        color="background.main.constrastText"
        textAlign="center"
        width="min-content"
        margin="0"
      >
        Josafá Veríssimo
      </Text>
      <Text
        as="p"
        variant="subTitle"
        color="black"
        textAlign="center"
        width="min-content"
      >
        Portfolio
      </Text>

      <img
        src="/images/plantBottomRight.png"
        style={{
          marginTop: 'auto',
          alignSelf: 'flex-end',
        }}
        alt="planta em baixo"
      />
    </CapaWrapper>
  );
}
