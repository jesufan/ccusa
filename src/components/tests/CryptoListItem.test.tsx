import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import { CryptoListItemProps } from '../interfaces/CryptoListItem.interface';
import CryptoListItem from '../CryptoListItem/CryptoListItem';

describe('CryptoListItem', () => {
  // Creamos un objeto mockCryptoData que simula los datos de una criptomoneda.
  const mockCryptoData: CryptoListItemProps = {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    price_usd: '6456.52',
    rank: 1,
  };

  let component: RenderAPI;

  // Antes de cada prueba, renderizamos el componente CryptoListItem con los datos de prueba (mockCryptoData).
  beforeEach(() => {
    component = render(<CryptoListItem {...mockCryptoData} />);
  });

  // Prueba: El componente debe renderizar el nombre de la criptomoneda correctamente.
  it('renders the name', () => {
    const { getByText } = component;
    expect(getByText('Bitcoin')).toBeTruthy();
  });

  // Prueba: El componente debe renderizar el símbolo de la criptomoneda correctamente.
  it('renders the symbol', () => {
    const { getByText } = component;
    expect(getByText('BTC')).toBeTruthy();
  });

  // Prueba: El componente debe renderizar el precio de la criptomoneda correctamente.
  it('renders the price', () => {
    const { getByText } = component;
    expect(getByText('Precio: $6456.52')).toBeTruthy();
  });
});
