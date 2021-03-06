import React from 'react';
import Logo from '../../assets/Logo.svg';
import { Container, LogoArea, AboutArea, HelpArea, SocialArea } from './styles';

const Footer = () => {
  return (
    <Container>
      <LogoArea>
        <div className="top">
          <img src={Logo} alt="Logo" />
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
      </SocialArea>

    </Container>
  )
}

export default Footer;