/**
 * Interfaz CryptoCurrencyData
 * 
 * Esta interfaz define la estructura de los datos de una criptomoneda.
 * Contiene propiedades como id, nombre, símbolo, precio en USD, rango, capitalización de mercado y cambios porcentuales para diferentes períodos de tiempo.
 */
interface CryptoCurrencyData {
    id: string;
    name: string;
    symbol: string;
    price_usd: string;
    rank: number;
    market_cap_usd: string;
    percent_change_24h: string;
    percent_change_1h: string;
    percent_change_7d: string;
  }
  
  /**
   * Clase CryptoCurrency
   * 
   * Esta clase representa una criptomoneda.
   * Tiene propiedades que corresponden a las están definidas en la interfaz CryptoCurrencyData.
   * El constructor toma un objeto de tipo CryptoCurrencyData y asigna sus propiedades a las propiedades de la instancia de CryptoCurrency.
   */
  class CryptoCurrency {
    id: string;
    name: string;
    symbol: string;
    price_usd: string;
    rank: number;
    market_cap_usd: string;
    percent_change_24h: string;
    percent_change_1h: string;
    percent_change_7d: string;
  
    /**
     * Constructor de la clase CryptoCurrency
     * 
     * @param {CryptoCurrencyData} data - Un objeto que contiene los datos de una criptomoneda.
     * El objeto debe cumplir con la estructura definida en la interfaz CryptoCurrencyData.
     */
    constructor(data: CryptoCurrencyData) {
      this.id = data.id;
      this.name = data.name;
      this.symbol = data.symbol;
      this.price_usd = data.price_usd;
      this.rank = data.rank;
      this.market_cap_usd = data.market_cap_usd;
      this.percent_change_24h = data.percent_change_24h;
      this.percent_change_1h = data.percent_change_1h;
      this.percent_change_7d = data.percent_change_7d;
    }
  }
  