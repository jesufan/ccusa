/**
 * Componente CryptoListItem
 * 
 * Este componente muestra los detalles del item criptomoneda en una lista. Los detalles incluyen el rango, nombre, símbolo y precio en dólares de la criptomoneda.
 * Es un componente de clase PureComponent, lo que significa que implementa la optimización de rendimiento incorporada de React para reducir re-renderizados innecesarios.
 * Además, el componente está envuelto con React.memo para evitar re-renderizados innecesarios en su nivel superior.
 * 
 * @param {Object} props - Las props que recibe el componente:
 *   @param {string} id - El ID de la criptomoneda, utilizado como clave en la lista.
 *   @param {string} name - El nombre de la criptomoneda.
 *   @param {string} symbol - El símbolo de la criptomoneda.
 *   @param {string} price_usd - El precio en dólares de la criptomoneda.
 *   @param {number} rank - El rango de la criptomoneda.
 */

import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { CryptoListItemStyle } from './styles';
import { CryptoListItemProps } from '../interfaces/CryptoListItem.interface';

class CryptoListItem extends PureComponent<CryptoListItemProps> {
  render() {
    const { id, name, symbol, price_usd, rank } = this.props;

    return (
      <View style={CryptoListItemStyle.container} key={id}>

        <Text style={CryptoListItemStyle.rank}>Rango: {rank}</Text>

        <Text style={CryptoListItemStyle.name}>{name}</Text>

        <Text style={CryptoListItemStyle.symbol}>{symbol}</Text>

        <Text style={CryptoListItemStyle.price}>Precio: ${price_usd}</Text>
        
      </View>
    );
  }
}

export default React.memo(CryptoListItem);
