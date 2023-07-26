/**
 * Componente TopBarFilter
 * 
 * Este componente representa una barra superior de filtrado que permite buscar criptomonedas por nombre y filtrar por rango de precios.
 * 
 * @param {Object} props - Las props que recibe el componente:
 *   @param {string} searchText - El texto de búsqueda para filtrar criptomonedas por nombre.
 *   @param {Function} onSearchTextChange - Función para actualizar el estado del texto de búsqueda.
 *   @param {Function} onFilterPress - Función que se ejecuta al presionar el botón de búsqueda/filtrar.
 *   @param {Function} onClearSearch - Función para limpiar el filtro de búsqueda y restablecer la lista completa de criptomonedas.
 *   @param {string} minPrice - El precio mínimo para filtrar criptomonedas por rango de precios.
 *   @param {string} maxPrice - El precio máximo para filtrar criptomonedas por rango de precios.
 *   @param {Function} onMinPriceChange - Función para actualizar el estado del precio mínimo.
 *   @param {Function} onMaxPriceChange - Función para actualizar el estado del precio máximo.
 */

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TopBarFilterProps } from '../interfaces/TopBarFilter.interface';
import { TopBarFilterStyle } from './styles';

const TopBarFilter: React.FC<TopBarFilterProps> = ({
  searchText,
  onSearchTextChange,
  onFilterPress,
  onClearSearch,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
}) => {
  const [isFilterActive, setIsFilterActive] = useState(false);

  useEffect(() => {
    // El filtro está activo si hay texto de búsqueda o se ha ingresado un rango de precios
    setIsFilterActive(searchText !== '' || minPrice !== '' || maxPrice !== '');
  }, [searchText, minPrice, maxPrice]);

  const handleClearFilter = () => {
    // Al borrar el filtro, se restablecen todos los estados relacionados al filtro y se limpia la búsqueda
    setIsFilterActive(false);
    onSearchTextChange('');
    onMinPriceChange('');
    onMaxPriceChange('');
    onClearSearch();
  };

  return (
    <View style={TopBarFilterStyle.container}>

      <View style={TopBarFilterStyle.filterRow}>

        <TextInput
          style={TopBarFilterStyle.input}
          placeholder="Buscar Crypto"
          onChangeText={(text) => onSearchTextChange(text)}
          value={searchText}
        />

        {/* Botón para borrar el filtro de búsqueda */}
        {isFilterActive && (
          <TouchableOpacity style={TopBarFilterStyle.clearFilterButton} onPress={handleClearFilter} testID="clear-filter-button">
            <Text style={TopBarFilterStyle.clearFilterButtonText}>x</Text>
          </TouchableOpacity>
        )}

        {/* Botón para activar el filtro de búsqueda */}
        <TouchableOpacity style={TopBarFilterStyle.filterButton} onPress={onFilterPress}>
          <Text style={TopBarFilterStyle.filterButtonText}>Buscar</Text>
        </TouchableOpacity>

      </View>

      <View style={TopBarFilterStyle.filterRow}>

        <TextInput
          style={TopBarFilterStyle.priceInput}
          placeholder="Precio mínimo"
          keyboardType="numeric"
          onChangeText={(text) => onMinPriceChange(text)}
          value={minPrice}
        />
        <TextInput
          style={TopBarFilterStyle.priceInput}
          placeholder="Precio máximo"
          keyboardType="numeric"
          onChangeText={(text) => onMaxPriceChange(text)}
          value={maxPrice}
        />

      </View>
    </View>
  );
};

export default TopBarFilter;
