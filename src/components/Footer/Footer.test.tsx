import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './index';

describe('Footer', () => {

  it('should contain logo and two lists', () => {
    render(<Footer />)

    const logo = screen.getByText('DataWarehouse');
    const lists = screen.getAllByRole('list');

    expect(logo).toBeInTheDocument();
    expect(lists).toHaveLength(2);
  })
})