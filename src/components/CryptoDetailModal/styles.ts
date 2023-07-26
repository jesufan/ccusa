import { StyleSheet } from 'react-native';

export const CryptoModalStyles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      maxHeight: '60%',
      backgroundColor: 'rgba(250, 250, 250, 0.85)',
      marginTop: '25%'
    },
    modalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    column: {
        flex: 1,
        marginHorizontal: 8, 
    },
    closeButton: {
      backgroundColor: 'blue',
      padding: 12,
      borderRadius: 8,
      marginTop: 20,
    },
    closeButtonText: {
      color: 'white',
      fontSize: 16,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    period: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    symbol: {
        fontSize: 16,
    },
    cap:  {
        fontSize: 15,
    },
    price: {
        fontSize: 18,
    },
    finaceContainer: {
        marginLeft: 12
    },
    greenText: {
        color: 'green',
      },
    redText: {
        color: 'red',
    },
});