import React from 'react'
import { render, screen } from '@testing-library/react'
import TestimonialItem from './index';
import ManAvatar from '../../assets/man-avatar.jpg';

describe('Testimonial item', () => {

  it('should have name, title, avatar and content', () => {
    render(<TestimonialItem name="Nome" title="Título" avatar={ManAvatar} description="Descrição" />)

    const title = screen.getByText('Título');
    const content = screen.getByText('Descrição');
    const avatar = screen.getByAltText('Avatar');

    expect(title).toHaveTextContent('Título');
    expect(content).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
  })
})