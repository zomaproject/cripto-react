import { useState } from 'react';
import styled from '@emotion/styled';
import ImagenCripto from './img/imagen-criptos.png';
import Formulario from './components/Formulario';
import { useEffect } from 'react';
import Resultado from './components/Resultado';
import Loading from './components/Loading';
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
`;

function App() {
  const [monedas, setMonedas] = useState({});
  const [resultado, setResulatdo] = useState({});
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    if (Object.keys(monedas).length) {
      setCargando(true)
      setResulatdo({})
      const { moneda, criptoMoneda } = monedas;
      console.log(monedas);
      const cotizarCripto = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;
        await fetch(url)
          .then((res) => res.json())
          .then((res) => setResulatdo(res.DISPLAY[criptoMoneda][moneda]))
      setCargando(false)
      };
      cotizarCripto();
    }
  }, [monedas]);
  return (
    <>
      <Contenedor>
        <Imagen src={ImagenCripto} alt='Imagen cripto' />
        <div>
          <Heading>Cotiza Criptomoneda al Instante</Heading>
          <Formulario setMonedas={setMonedas} />
          {cargando && <Loading/>}
          {resultado.PRICE && <Resultado resultado  = {resultado}/>}
        </div>
      </Contenedor>
    </>
  );
}

export default App;
