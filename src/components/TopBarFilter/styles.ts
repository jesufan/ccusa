import { StyleSheet } from 'react-native';

export const TopBarFilterStyle = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    marginTop: 1,
    padding: 10
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  input: {
    flex: 1,
    color: 'white',
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: 'rgba(222, 222, 222, 0.9)',
    borderRadius: 5,
    marginRight: 10,
  },
  input70: {
    width: '70%',
  },
  filterButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  filterButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  clearFilterButton: {
    marginLeft: 1,
    marginRight: 9,
    backgroundColor: 'rgba(200, 200, 200, 0.5)',
    padding: 4,
    borderRadius: 10,
  },
  clearFilterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  priceInput: {
    flex: 1,
    backgroundColor: 'rgba(222, 222, 222, 0.9)',
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 4,
    textAlign: 'center',
  },
});