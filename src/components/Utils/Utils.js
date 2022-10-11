import React, {Component} from 'react';
import styles from './Utils.module.css';

class Utils extends Component {

  availableCurrencies;

  render() {
    return (
      <div className={styles.Utils} data-testid="Utils">
        Utils Component
      </div>
    );
  }

  getAvailableCurrencies() {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then(response => response.json())
      .then(data => {
        this.availableCurrencies = data;
      });
  }

  getCurrencyRate(num, currencyDestiny) {

    const currencies = this.availableCurrencies;
    if (!currencies) {
      return num;
    }

    const rates = currencies.rates;
    const currency = rates[currencyDestiny];
    if (isNaN(num)) {
      return num;
    }
    return parseFloat(num * currency).toFixed(2);
  }

  replaceStringAtIndex(string, index, replacement) {
    return string.substring(0, index) + replacement + string.substring(index + 1);
  }

}

Utils.propTypes = {};

Utils.defaultProps = {};

export default Utils;
