import React from 'react';
import { render, RenderAPI, fireEvent } from '@testing-library/react-native';
import CryptoDetailModal from '../CryptoDetailModal/CryptoDetailModal';

describe('CryptoDetailModal', () => {
  // Creamos un objeto mockCoinData que simula los detalles de una criptomoneda.
  const mockCoinData = {
    id: '90',
    rank: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    price_usd: '6456.52',
    market_cap_usd: '12895642342',
    percent_change_1h: '0.05',
    percent_change_24h: '-1.47',
    percent_change_7d: '1.25',
  };

  let component: RenderAPI;
  let onCloseMock: jest.Mock;

  beforeEach(() => {
    onCloseMock = jest.fn();
    component = render(
      <CryptoDetailModal coin={mockCoinData} visible={true} onClose={onCloseMock} />
    );
  });

  // Prueba que el nombre se renderice correctamente.
  it('renders the name', () => {
    const { getByText } = component;
    expect(getByText('Bitcoin')).toBeTruthy();
  });

  // Prueba que el símbolo se renderice correctamente.
  it('renders the symbol', () => {
    const { getByText } = component;
    expect(getByText('BTC')).toBeTruthy();
  });

  // Prueba que el precio se renderice correctamente.
  it('renders the price', () => {
    const { getByText } = component;
    expect(getByText('$6456.52')).toBeTruthy();
  });

  // Prueba que la capitalización de mercado se renderice correctamente.
  it('renders the market cap', () => {
    const { getByText } = component;
    expect(getByText('Capitalización: $12895642342')).toBeTruthy();
  });

  // Prueba que el cambio porcentual de 1 hora se renderice correctamente.
  it('renders the 1h percent change', () => {
    const { getByText } = component;
    expect(getByText('1h')).toBeTruthy();
    expect(getByText('0.05%')).toBeTruthy();
  });

  // Prueba que el cambio porcentual de 24 horas se renderice correctamente.
  it('renders the 24h percent change', () => {
    const { getByText } = component;
    expect(getByText('24h')).toBeTruthy();
    expect(getByText('-1.47%')).toBeTruthy();
  });

  // Prueba que el cambio porcentual de 7 días se renderice correctamente.
  it('renders the 7d percent change', () => {
    const { getByText } = component;
    expect(getByText('7d')).toBeTruthy();
    expect(getByText('1.25%')).toBeTruthy();
  });

  // Prueba que la función onClose se llame cuando se presione el botón "Cerrar".
  it('calls onClose when close button is pressed', () => {
    const { getByText } = component;
    const closeButton = getByText('Cerrar');
    fireEvent.press(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });
});
