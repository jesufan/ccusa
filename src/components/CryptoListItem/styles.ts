import { StyleSheet } from 'react-native';

export const CryptoListItemStyle = StyleSheet.create({
    container: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    symbol: {
      fontSize: 16,
    },
    price: {
      fontSize: 16,
      marginTop: 8,
    },
    rank: {
      fontSize: 18,
      marginTop: 8,
    },
});