import React from 'react';
import styles from './CurrencyBox.module.css';

const CurrencyBox = ({currency, value, readonly}) => (
  <div className={styles.CurrencyBox}>
  <label
    for="currencyInput"
    className={styles.CurrencyLabel}>{currency}</label>
  <input
    type="number"
    className={styles.CurrencyInput}
    data-testid="CurrencyBox"
    value={value}
    name="currencyInput"
    readOnly={readonly}
  />
  </div>
);

CurrencyBox.propTypes = {};

CurrencyBox.defaultProps = {};

export default CurrencyBox;
