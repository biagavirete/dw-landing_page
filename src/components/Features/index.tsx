import React from 'react';
import { Container, Title, Details } from './styles';
import FeatureItem from '../FeatureItem';
import GreenBG from '../SVGBackgrounds/Green';
import Search from '../../assets/search.png';
import Security from '../../assets/security.png';
import TwentyFour from '../../assets/twentyfour.png';
import Printer from '../../assets/printer.png';
import PurpleBG from '../SVGBackgrounds/Purple';
import PinkBG from '../SVGBackgrounds/Pink';
import BlueBG from '../SVGBackgrounds/Blue';

const Features = () => {

  return (
    <Container>
      <Title>
        <h3>Features</h3>
        <p>Some of the features and advantages that we provide
        for those of you <br /> who store data in this Data Warehouse.</p>
      </Title>

      <Details>

        <FeatureItem title="Search Data" backgroundImage={<GreenBG />} image={Search}>
          Don’t worry if your data is very large, the Data Warehoue provides a search engine, which
          is useful for making it easier to find data effectively saving time.
        </FeatureItem>

        <FeatureItem title="24 Hours Access" backgroundImage={<PurpleBG />} image={TwentyFour}>
          Access is given 24 hours a full morning to night and meet again in the morning, giving you
          comfort when you need data when urgent.
        </FeatureItem>

        <FeatureItem title="Print Out" backgroundImage={<PinkBG />} image={Printer}>
          Print out service gives you convenience if someday you need print data, just edit it all and
          just print it.
        </FeatureItem>

        <FeatureItem title="Security Code" backgroundImage={<BlueBG />} image={Security}>
          Data Security is one of our best facilities. Allows for your files to be safer. The file can be
          secured with a code or password that you created, so only you can open the file.
        </FeatureItem>

      </Details>

    </Container>
  )
}

export default Features;