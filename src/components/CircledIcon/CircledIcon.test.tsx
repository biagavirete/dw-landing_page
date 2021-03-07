import React from 'react'
import { render, screen } from '@testing-library/react'
import CircledIcon from './index';

describe('Circled icon', () => {

  it('should render with content', () => {
    render(<CircledIcon width="50px" height="50px">Text</CircledIcon>);

    const circledIcon = screen.getByText('Text');
    expect(circledIcon).toBeVisible();
  })
})