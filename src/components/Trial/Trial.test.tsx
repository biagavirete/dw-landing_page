import React from 'react'
import { render, screen } from '@testing-library/react'
import Trial from './index';

describe('Trial component', () => {

  it('should contain text and buttons', () => {
    render(<Trial />)

    const text = screen.getByText('Try for free!');
    const buttons = screen.getAllByRole('button');

    expect(text).toBeInTheDocument();
    expect(buttons).toHaveLength(2);
  })
})