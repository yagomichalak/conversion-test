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
    const rates = currencies ? Object.keys(currencies.rates) : [];

    // if (this.props.)
    this.currencyOrigin = this.props.currencyOrigin ? this.props.currencyOrigin : currencies.base_code;
    this.currencyDestiny = this.props.currencyDestiny;

    console.log("Currencies", this.currencyOrigin, this.currencyDestiny);
    const rateOptionsOrigin = this.getSelectRateOptions(this.props.currencyOrigin, rates);
    const rateOptionsDestiny = this.getSelectRateOptions(this.props.currencyDestiny, rates);

    //{this.getReverseCurrencyRate(this.props.num, this.props.currencyOrigin)}
    return (<div className={styles.CurrencyDiv} data-testid="CurrencyDiv">
      <CurrencyBox
        onChange={(e) => this.onTextChange(e.target)}
        num={this.props.num}
        rateOptions={rateOptionsOrigin}
        onCurrencySelectClick={(e) => this.onCurrencySelectClick(e.target)}
        boxId={1}
      ></CurrencyBox>

      <CurrencyBox
        onChange={(e) => this.onTextChange(e.target)}
        num={this.getCurrencyRate(this.props.num, this.props.currencyDestiny)}
        readonly={true}
        rateOptions={rateOptionsDestiny}
        onCurrencySelectClick={(e) => this.onCurrencySelectClick(e.target)}
        boxId={2}
      ></CurrencyBox>
    </div>)
  }

}

CurrencyDiv.propTypes = {};

CurrencyDiv.defaultProps = {};

export default CurrencyDiv;
