import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './index';

describe('Button', () => {

  it('should render with content', () => {
    render(<Button isShadowed>Button</Button>);

    const button = screen.getByText('Button');
    expect(button).toBeVisible();
  })
})