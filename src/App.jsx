import { useState } from 'react';
import styled from '@emotion/styled';
import ImagenCripto from './img/imagen-criptos.png'
import Formulario from './components/Formulario';
const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
`;

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  text-align: center; 
  font-weight: 700;
  margin-top: 80px;
  margin-botttom: 50px ;
  font-size: 54px 
  &::after {
    content: ''; 
    width: 100px ; 
    height: 6px;
    background-color: #66AFFE;
    display: block;
    margin: 10px auto 0 auto;
  }
  @media (min-width: 992px) {
    display: grid; 
    grid-template-columns: repeat(2, 1fr) ;
    gap: 2 rem ; 
  }
`;
const Imagen = styled.img`
  max-width: 400px;
  width: 80%; 
  margin: 100px auto 0 auto; 
  display: block;
`

function App() {
  return (
    <>
      <Contenedor>
        <Imagen src={ImagenCripto}  alt='Imagen cripto'/>
        <div>
          <Heading>Cotiza Criptomoneda al Instante</Heading>
          <Formulario/>
        </div>
      </Contenedor>
    </>
  );
}

export default App;
