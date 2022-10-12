import {useEffect} from 'react';
import styles from './CurrencyBox.module.css';

function CurrencyBox ({
  onChange, num, readonly, rateOptions,
  onCurrencySelectClick, boxId, currencyDestiny
}) {

    useEffect(() => {
      var selectDestiny = document.getElementById("destiny");
      selectDestiny.value = currencyDestiny;
    });

    return <div className={styles.CurrencyBox}>
      <select
        className={styles.CurrencySelect}
        onChange={onCurrencySelectClick}
        id={boxId}
        name={boxId}
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
