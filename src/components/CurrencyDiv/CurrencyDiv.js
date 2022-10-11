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
      this.props.setNum(target.value);
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
