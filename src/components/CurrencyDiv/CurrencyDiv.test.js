import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CurrencyDiv from './CurrencyDiv';

describe('<CurrencyDiv />', () => {
  test('it should mount', () => {
    render(<CurrencyDiv />);
    
    const currencyDiv = screen.getByTestId('CurrencyDiv');

    expect(currencyDiv).toBeInTheDocument();
  });
});