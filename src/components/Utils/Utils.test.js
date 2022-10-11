import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Utils from './Utils';

describe('<Utils />', () => {
  test('it should mount', () => {
    render(<Utils />);
    
    const utils = screen.getByTestId('Utils');

    expect(utils).toBeInTheDocument();
  });
});