import React, { useState } from 'react';
import TestimonialItem from '../TestimonialItem';
import ManAvatar from '../../assets/man-avatar.jpg';
import WomenAvatar from '../../assets/woman-avatar.jpg';
import LegoAvatar from '../../assets/lego-avatar.jpg';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { Container } from './styles';

const Testimonials = () => {
  const [slides] = useState([
    {
      imgSource: ManAvatar,
      name: 'John Fang',
      title: "wordfaang.com",
      description: 'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor'
    },
    {
      imgSource: WomenAvatar,
      name: 'Jeny Doe',
      title: "UX Engineer",
      description: 'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.'
    },
    {
      imgSource: LegoAvatar,
      name: 'Dennis Doe',
      title: "Title",
      description: 'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor'
    }
  ]);

  let [currentPosition, setCurrentPosition] = useState(0);
  let currentSlide = slides[currentPosition];

  const arrowRightClick = () => {
    currentPosition !== slides.length - 1 ?
      setCurrentPosition(currentPosition + 1) : setCurrentPosition(currentPosition = 0);
    currentSlide = slides[currentPosition];
  }

  const arrowLeftClick = () => {
    currentPosition !== 0 ?
      setCurrentPosition(currentPosition - 1) : setCurrentPosition(currentPosition = slides.length - 1);
    currentSlide = slides[currentPosition];
  }

  return (
    <Container>
      <div className="content">
        <h3>
          Testimonials
      </h3>

        <div className="testimonials-area">
          <TestimonialItem
            name={currentSlide.name}
            title={currentSlide.title}
            avatar={currentSlide.imgSource}
            description={currentSlide.description}
          />

        </div>

        <div className="arrows-area">
          <div id="arrow-left" onClick={arrowLeftClick}>
            <BsArrowLeft color="#fff" size={50} />
          </div>
          <div id="arrow-right" onClick={arrowRightClick}>
            <BsArrowRight color="#fff" size={50} />
          </div>
        </div>
      </div>

    </Container>
  )
}

export default Testimonials;