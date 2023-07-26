/**
 * CryptoCurrencyScreen
 * 
 * Esta pantalla muestra una lista de criptomonedas y permite filtrarlas por nombre y rango de precio.
 * También muestra un modal con el detalle de la criptomoneda seleccionada.
 */
import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import CryptoListItem from '../components/CryptoListItem/CryptoListItem';
import CryptoService from '../services/CryptoServices';
import TopBarFilter from '../components/TopBarFilter/TopBarFilter';
import CryptoDetailModal from '../components/CryptoDetailModal/CryptoDetailModal';
import { ALLCOINS_ENDPOINT } from '../utils/Constants';

const CryptoCurrencyScreen = () => {
  // Estado para almacenar las listas de criptomonedas
  const [cryptos, setCryptos] = useState<CryptoCurrencyData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredCryptos, setFilteredCryptos] = useState<CryptoCurrencyData[]>([]);
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoCurrencyData | null>(null);
  const [searchText, setSearchText] = useState<string>('');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  // Carga inicial de los datos de criptomonedas al montar la pantalla
  useEffect(() => {
    async function fetchData() {
      try {
        const cryptoService = new CryptoService();
        const data = await cryptoService.fetchCryptos(ALLCOINS_ENDPOINT);
        setCryptos(data);
        setFilteredCryptos(data);
        if(data){
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  // Función para filtrar las criptomonedas por nombre y rango de precio
  const handleFilterCoinNameOrValue = () => {
    const filteredData = cryptos.filter((crypto) => {
      const lowerCaseCoinName = crypto.name.toLowerCase();
      const lowerCaseSearchText = searchText.toLowerCase();
      const isValidMinPrice = !isNaN(parseFloat(minPrice));
      const isValidMaxPrice = !isNaN(parseFloat(maxPrice));

      if (isValidMinPrice && isValidMaxPrice) {
        const minPriceNumber = parseFloat(minPrice);
        const maxPriceNumber = parseFloat(maxPrice);
        return lowerCaseCoinName.includes(lowerCaseSearchText) && parseFloat(crypto.price_usd) >= minPriceNumber && parseFloat(crypto.price_usd) <= maxPriceNumber;
      } else if (isValidMinPrice) {
        const minPriceNumber = parseFloat(minPrice);
        return lowerCaseCoinName.includes(lowerCaseSearchText) && parseFloat(crypto.price_usd) >= minPriceNumber;
      } else if (isValidMaxPrice) {
        const maxPriceNumber = parseFloat(maxPrice);
        return lowerCaseCoinName.includes(lowerCaseSearchText) && parseFloat(crypto.price_usd) <= maxPriceNumber;
      } else {
        return lowerCaseCoinName.includes(lowerCaseSearchText);
      }
    });
    setFilteredCryptos(filteredData);
  };

  // Función para limpiar el filtro de búsqueda
  const handleClearSearch = () => {
    setFilteredCryptos(cryptos);
  };

  // Función para mostrar la modal con el detalle de la criptomoneda seleccionada
  const handleShowModal = (crypto: CryptoCurrencyData) => {
    setSelectedCrypto(crypto);
    setIsModalVisible(true);
  };
  
  // Función para cerrar la modal
  const handleCloseModal = () => {
    setSelectedCrypto(null);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Componente de filtro superior */}
      <TopBarFilter
        searchText={searchText}
        onSearchTextChange={setSearchText}
        onFilterPress={handleFilterCoinNameOrValue}
        onClearSearch={handleClearSearch}
        minPrice={minPrice}
        onMinPriceChange={setMinPrice}
        maxPrice={maxPrice}
        onMaxPriceChange={setMaxPrice}
      />

      {isLoading ? (
        <ActivityIndicator size="large" style={styles.loadingSpinner} />
      ) : (
        // Mostramos la lista de criptomonedas una vez que se hayan recibido los datos
        <FlatList
          data={filteredCryptos}
          keyExtractor={(coin) => coin.id.toString()}
          renderItem={({ item: coin }) => (
            <TouchableOpacity onPress={() => handleShowModal(coin)}>
              <CryptoListItem
                id={coin.id}
                name={coin.name}
                symbol={coin.symbol}
                price_usd={coin.price_usd}
                rank={coin.rank}
              />
            </TouchableOpacity>
          )}
        />
      )}
      {/* Modal con el detalle de la criptomoneda seleccionada */}
      <CryptoDetailModal coin={selectedCrypto} visible={isModalVisible} onClose={handleCloseModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingSpinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CryptoCurrencyScreen;
