/**
 * Componente principal App
 * 
 * Este componente es el punto de entrada de la aplicación y renderiza la pantalla CryptoCurrencyScreen.
 * Se encarga de estructurar la interfaz principal de la aplicación y aplicar estilos generales.
 */
import React from 'react';
import { View } from 'react-native';
import CryptoCurrencyScreen from './src/screens/CryptoCurrencyScreen';
import { AppStyles } from './styles'; 

const App = () => {
  return (
    <View style={AppStyles.container}>
      <CryptoCurrencyScreen />
    </View>
  );
};

export default App;
