import React from 'react'
import { render, screen } from '@testing-library/react'
import NavBar from './index';

describe('Navbar', () => {

  it('should contain links and button', () => {
    render(<NavBar />)

    const linkAbout = screen.getByText('About');
    const linkHelp = screen.getByText('Help');
    const linkFeatures = screen.getByText('Features');
    const linkSignup = screen.getByText('Signup');
    const button = screen.getByTestId('button');

    expect(linkAbout).toHaveTextContent('About');
    expect(linkHelp).toHaveTextContent('Help');
    expect(linkFeatures).toHaveTextContent('Feature');
    expect(linkSignup).toHaveTextContent('Signup');
    expect(button).toBeInTheDocument();
  })
})