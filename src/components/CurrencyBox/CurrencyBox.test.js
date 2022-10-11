import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CurrencyBox from './CurrencyBox';

describe('<CurrencyBox />', () => {
  test('it should mount', () => {
    render(<CurrencyBox />);
    
    const currencyBox = screen.getByTestId('CurrencyBox');

    expect(currencyBox).toBeInTheDocument();
  });
});