import React from 'react';
import styles from './CurrencyDiv.module.css';
import CurrencyBox from '../CurrencyBox/CurrencyBox';

function CurrencyDiv({num, setNum}) {
  const currency_origin = "USD";
  const currency_destiny = "BRL";

  const onTextChange=(target) => {
    setNum(target.value);
  }

  return (<div className={styles.CurrencyDiv} data-testid="CurrencyDiv">
    <CurrencyBox onChange={(e)=>onTextChange(e.target)} num={num} currency={currency_origin}></CurrencyBox>
    <CurrencyBox onChange={(e)=> onTextChange(e.target)} num={num} currency={currency_destiny} readonly={true}></CurrencyBox>
  </div>)
}

CurrencyDiv.propTypes = {};

CurrencyDiv.defaultProps = {};

export default CurrencyDiv;
