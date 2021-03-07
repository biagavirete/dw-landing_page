import React from 'react'
import { render, screen } from '@testing-library/react'
import FeatureItem from './index';
import Security from '../../assets/security.png';

describe('Feature item', () => {

  it('should have title and content', () => {
    render(<FeatureItem title="Título" image={Security}>Conteúdo</FeatureItem>)

    const title = screen.getByText('Título');
    const content = screen.getByText('Conteúdo');

    expect(title).toHaveTextContent('Título');
    expect(content).toHaveTextContent('Conteúdo');
  })
})