import React from 'react';
import styles from './CurrencyBox.module.css';

function CurrencyBox ({onChange, num, currency, readonly}) {

  
  return <div onChange={onChange} className={styles.CurrencyBox}>
    <label
      for="currencyInput"
      className={styles.CurrencyLabel}>{currency}</label>
    <input
      type="number"
      className={styles.CurrencyInput}
      data-testid="CurrencyBox"
      value={num ? num : 0}
      name="currencyInput"
      readOnly={readonly}
    />
  </div>
}

CurrencyBox.propTypes = {};

CurrencyBox.defaultProps = {};

export default CurrencyBox;
