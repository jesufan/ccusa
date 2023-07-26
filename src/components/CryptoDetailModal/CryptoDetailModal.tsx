/**
 * Componente CryptoDetailModal
 * 
 * Este componente muestra una ventana modal con información detallada sobre una criptomoneda.
 * Muestra el nombre, símbolo, precio, capitalización de mercado y cambio porcentual para diferentes periodos de tiempo.
 * La modal se puede cerrar al tocar el botón "Cerrar".
 * 
 * @param {Object} coin - El objeto que contiene detalles de la criptomoneda, como nombre, símbolo, precio y cambio porcentual.
 * @param {boolean} visible - Un valor booleano para controlar la visibilidad de la modal. Cuando es `true`, la modal se muestra, y cuando es `false`, se oculta.
 * @param {Function} onClose - Una función de devolución de llamada que se ejecuta cuando se cierra la modal. Se llama cuando el usuario toca el botón "Cerrar".
 */
import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { CryptoModalStyles } from './styles';
import { CryptoDetailModalProps } from '../interfaces/CryptoDetailModal.interface';

const CryptoDetailModal: React.FC<CryptoDetailModalProps> = ({ coin, visible, onClose }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={CryptoModalStyles.modalContainer}>
        <View>
          {/* Sección de Encabezado */}
          <View style={CryptoModalStyles.modalRow}>
            <View>

              <Text style={CryptoModalStyles.name}>{coin?.name}</Text>
              <Text style={CryptoModalStyles.symbol}>{coin?.symbol}</Text>

            </View>
            <View style={CryptoModalStyles.finaceContainer}>

              <Text style={CryptoModalStyles.price}>${coin?.price_usd}</Text>
              <Text style={CryptoModalStyles.cap}>Capitalización: ${coin?.market_cap_usd}</Text> 

            </View>
          </View>

          {/* Sección de Cambio porcentual */}
          <Text style={CryptoModalStyles.name}>Porcentaje de cambio:</Text>
          <View style={CryptoModalStyles.modalRow}>
            <View style={CryptoModalStyles.column}>

              <Text style={CryptoModalStyles.period}>1h</Text>
              <Text style={parseFloat(coin?.percent_change_1h || '0') >= 0 ? CryptoModalStyles.greenText : CryptoModalStyles.redText}>{coin?.percent_change_1h}%</Text>
            
            </View>
            <View style={CryptoModalStyles.column}>

              <Text style={CryptoModalStyles.period}>24h</Text>
              <Text style={parseFloat(coin?.percent_change_24h || '0') >= 0 ? CryptoModalStyles.greenText : CryptoModalStyles.redText}>{coin?.percent_change_24h}%</Text>
            
            </View>
            <View style={CryptoModalStyles.column}>

              <Text style={CryptoModalStyles.period}>7d</Text>
              <Text style={parseFloat(coin?.percent_change_7d || '0') >= 0 ? CryptoModalStyles.greenText : CryptoModalStyles.redText}>{coin?.percent_change_7d}%</Text>
            
            </View>
          </View>
        </View>

        {/* Botón de Cerrar */}
        <TouchableOpacity style={CryptoModalStyles.closeButton} onPress={onClose}>
          <Text style={CryptoModalStyles.closeButtonText}>Cerrar</Text>         
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CryptoDetailModal;
