import React from 'react';
import { render, RenderAPI, fireEvent } from '@testing-library/react-native';
import TopBarFilter from '../TopBarFilter/TopBarFilter';

describe('TopBarFilter', () => {
  let component: RenderAPI;
  let searchText: string;
  let minPrice: string;
  let maxPrice: string;
  let onSearchTextChangeMock: jest.Mock;
  let onFilterPressMock: jest.Mock;
  let onClearSearchMock: jest.Mock;
  let onMinPriceChangeMock: jest.Mock;
  let onMaxPriceChangeMock: jest.Mock;

  beforeEach(() => {
    searchText = '';
    minPrice = '';
    maxPrice = '';
    onSearchTextChangeMock = jest.fn();
    onFilterPressMock = jest.fn();
    onClearSearchMock = jest.fn();
    onMinPriceChangeMock = jest.fn();
    onMaxPriceChangeMock = jest.fn();

    component = render(
      <TopBarFilter
        searchText={searchText}
        onSearchTextChange={onSearchTextChangeMock}
        onFilterPress={onFilterPressMock}
        onClearSearch={onClearSearchMock}
        minPrice={minPrice}
        onMinPriceChange={onMinPriceChangeMock}
        maxPrice={maxPrice}
        onMaxPriceChange={onMaxPriceChangeMock}
      />
    );
  });

  // Prueba que el campos de búsqueda de texto se renderice correctamente.
  it('renders the search text input', () => {
    const { getByPlaceholderText } = component;
    expect(getByPlaceholderText('Buscar Crypto')).toBeTruthy();
  });

  // Prueba que los campos de precio mínimo y máximo se rendericen correctamente.
  it('renders the price inputs', () => {
    const { getByPlaceholderText } = component;
    expect(getByPlaceholderText('Precio mínimo')).toBeTruthy();
    expect(getByPlaceholderText('Precio máximo')).toBeTruthy();
  });

  // Prueba que se llame la función onSearchTextChange al cambiar el texto de búsqueda.
  it('calls onSearchTextChange when search text is changed', () => {
    const { getByPlaceholderText } = component;
    const searchTextInput = getByPlaceholderText('Buscar Crypto');
    fireEvent.changeText(searchTextInput, 'Bitcoin');
    expect(onSearchTextChangeMock).toHaveBeenCalledWith('Bitcoin');
  });

  // Prueba que se llame la función onMinPriceChange al cambiar el precio mínimo.
  it('calls onMinPriceChange when min price is changed', () => {
    const { getByPlaceholderText } = component;
    const minPriceInput = getByPlaceholderText('Precio mínimo');
    fireEvent.changeText(minPriceInput, '1000');
    expect(onMinPriceChangeMock).toHaveBeenCalledWith('1000');
  });

  // Prueba que se llame la función onMaxPriceChange al cambiar el precio máximo.
  it('calls onMaxPriceChange when max price is changed', () => {
    const { getByPlaceholderText } = component;
    const maxPriceInput = getByPlaceholderText('Precio máximo');
    fireEvent.changeText(maxPriceInput, '5000');
    expect(onMaxPriceChangeMock).toHaveBeenCalledWith('5000');
  });

});
