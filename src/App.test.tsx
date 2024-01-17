import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('header', function() {
  
  render(<App/>)
  const header = screen.getByRole('banner');

  it('should exist in App', () => {
    expect(header).toBeInTheDocument();
  })

  it('should contain the text Hello World!', () => {
    expect(header).toHaveTextContent('Hello World!');
  })
});
