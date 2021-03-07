/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CircledIcon from '../CircledIcon';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Balloon from '../../assets/balloon.png';
import LogoSvg from '../SVGs/Logo';
import { Container, LogoArea, AboutArea, HelpArea, SocialArea } from './styles';

const Footer = () => {
  return (
    <Container>
      <LogoArea>
        <div className="top">
          <LogoSvg />
          <strong>DataWarehouse</strong>
        </div>
        <div className="center">
          <strong>
            Warehouse Society, 234 <br /> Bahagia Ave Street PRBW 29281
          </strong>
          <p>
            info@warehouse.project <br /> 1-232-3434 (Main)
          </p>
        </div>
        <div className="bottom">
          <p>
            © Datawarehouse™, 2020. All rights reserved. <br /> Company Registration Number: 21479524.
          </p>
        </div>
      </LogoArea>

      <AboutArea>
        <h5>
          About
          </h5>

        <ul>
          <li>
            <a href="">Profile</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">DW News</a>
          </li>
        </ul>
      </AboutArea>

      <HelpArea>
        <h5>
          Help
          </h5>

        <ul>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Sign up</a>
          </li>
          <li>
            <a href="">Guide</a>
          </li>
          <li>
            <a href="">Reports</a>
          </li>
          <li>
            <a href="">Q&amp;A</a>
          </li>
        </ul>
      </HelpArea>

      <SocialArea>
        <h5>
          Social Media
          </h5>
        <div className="sm-area">
          <CircledIcon
            width="50px"
            height="50px"
            backgroundColor="#212353"
            opacity="0.1"
            href="https://www.facebook.com/"
          >
            <FaFacebookF color='#fff' size={20} />
          </CircledIcon>

          <CircledIcon
            width="50px"
            height="50px"
            backgroundColor="#212353"
            opacity="0.1"
            href="https://www.twitter.com/"
          >
            <FaTwitter color='#fff' size={20} />
          </CircledIcon>

          <CircledIcon
            width="50px"
            height="50px"
            backgroundColor="#212353"
            opacity="0.1"
            href="https://www.instagram.com/"
          >
            <FaInstagram color='#fff' size={20} />
          </CircledIcon>
        </div>

        <div className="last-icon">
          <CircledIcon
            width="60px"
            height="60px"
            backgroundColor="#e0caff"
            href="#"
          >
            <img src={Balloon} alt="baloon" />
          </CircledIcon>

        </div>
      </SocialArea>

    </Container>
  )
}

export default Footer;