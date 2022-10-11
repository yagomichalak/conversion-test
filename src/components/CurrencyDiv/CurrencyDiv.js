import React from 'react';
import styles from './CurrencyDiv.module.css';
import CurrencyBox from '../CurrencyBox/CurrencyBox';

const CurrencyDiv = () => (
  <div className={styles.CurrencyDiv} data-testid="CurrencyDiv">
    <CurrencyBox currency={"USD"}></CurrencyBox>
    <CurrencyBox currency={"BRL"} readonly={true}></CurrencyBox>
  </div>
);

CurrencyDiv.propTypes = {};

CurrencyDiv.defaultProps = {};

export default CurrencyDiv;
