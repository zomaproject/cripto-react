import styled from '@emotion/styled';
import { useState } from 'react';
import { useEffect } from 'react';
import { monedas } from '../data/monedas';
import useSelectMoneda from '../hooks/useSelectMoneda';
const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  margin-top: 30px;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;
const Formulario = () => {
  const [criptos, setCriptos] = useState([]);
  const [SelectMonedas, moneda] = useSelectMoneda(
    'Selecciona tu Moneda',
    monedas
  );



  useEffect(() => {
    const consultarApi = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD';

      const data = await fetch(url).then((res) =>
        res.json().then((res) => res.Data)
      );

      const array = data.map((cripto) => {
        return {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
      });
      setCriptos(array);
    };
    consultarApi();
  }, []);

  const [SelectCriptoMonedas, criptoMoneda] = useSelectMoneda(
    'Selecciona tu cripto',
    criptos
  );
  return (
    <form>
      <SelectMonedas />
      <SelectCriptoMonedas/>
      <InputSubmit type={'submit'} value='Cotizar' />
    </form>
  );
};

export default Formulario;
