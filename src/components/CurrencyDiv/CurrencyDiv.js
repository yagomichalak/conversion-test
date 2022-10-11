import React from 'react';
import styles from './CurrencyDiv.module.css';
import CurrencyBox from '../CurrencyBox/CurrencyBox';
import Utils from '../Utils/Utils';

class CurrencyDiv extends Utils {

  constructor() {
    super();
    this.getAvailableCurrencies();
  }
  
  render() {
    const currencies = this.availableCurrencies;
    const currencyOrigin = currencies ? this.availableCurrencies.base_code : "USD";
    const currencyDestiny = "BRL";

    const onTextChange=(target) => {
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

    return (<div className={styles.CurrencyDiv} data-testid="CurrencyDiv">
      <CurrencyBox
        onChange={(e)=>onTextChange(e.target)}
        num={this.props.num}
        currency={currencyOrigin}
      ></CurrencyBox>

      <CurrencyBox
        onChange={(e)=> onTextChange(e.target)}
        num={this.getCurrencyRate(this.props.num, currencyDestiny)}
        currency={currencyDestiny}
        readonly={true}
      ></CurrencyBox>
    </div>)
  }

}

CurrencyDiv.propTypes = {};

CurrencyDiv.defaultProps = {};

export default CurrencyDiv;
