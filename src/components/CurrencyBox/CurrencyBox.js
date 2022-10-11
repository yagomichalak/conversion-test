import React from 'react';
import styles from './CurrencyBox.module.css';

function CurrencyBox ({
  onChange, num, readonly, rateOptions,
  onCurrencySelectClick, boxId
}) {
  
  return <div className={styles.CurrencyBox}>
    <select
      className={styles.CurrencySelect}
      onChange={onCurrencySelectClick}
      id={boxId}
    >
      {rateOptions}
    </select>
    <input
      onChange={onChange}
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
