import React from 'react'
import { render, screen } from '@testing-library/react'
import LearnMore from './index';

describe('Learn More component', () => {

  it('should render', () => {
    render(<LearnMore />)

    const component = screen.getByTestId('anchor');

    expect(component).toBeInTheDocument();
  })
})