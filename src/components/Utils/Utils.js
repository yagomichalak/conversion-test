import React, {Component} from 'react';
import styles from './Utils.module.css';

class Utils extends Component {

  availableCurrencies;
  currencyOrigin;
  currencyDestiny;

  render() {
    return (
      <div className={styles.Utils} data-testid="Utils">
        Utils Component
      </div>
    );
  }

  onTextChange(target) {
    var value = target.value

    // Replaces index 0 in case it's a 0
    if (value.length === 2 && value[0] === "0") {
      value = this.replaceStringAtIndex(value, 0, "");
    }

    // Checks if the result is a number
    if (!isNaN(value)) {
      value = parseFloat(value);
    }

    // Sets new value
    this.props.setNum(value);
  }

  onCurrencySelectClick(target) {
    const selectedCurrency = target.value;
    if (parseInt(target.id) === 1) {
      this.getAvailableCurrencies(selectedCurrency);
    } else {
      this.props.setCurrencyDestiny(selectedCurrency);
    }
  }

  getAvailableCurrencies(currency = "USD") {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then(response => response.json())
      .then(data => {
        this.availableCurrencies = data;
        this.props.setCurrencyOrigin(data.base_code);
        this.divDestinyValue = this.props.num * this.availableCurrencies.rates[this.props.currencyDestiny];
      });
  }1

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

  getSelectRateOptions(baseCurrency, rates, boxId) {

    var options = rates.map(
      el => <option value={el} key={el} id={boxId}> {el} </option>
    );

    return options;

  }

}

Utils.propTypes = {};

Utils.defaultProps = {};

export default Utils;
