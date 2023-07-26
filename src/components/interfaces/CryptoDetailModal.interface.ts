export interface CryptoDetailModalProps {
    visible: boolean;
    onClose: () => void;
    coin: CryptoCurrencyData | null;
};