import React from 'react';

import { Container, HomeContent, HomeContentImg } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <HomeContent>
        <HomeContentImg src="https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2020/Alexa/GW/Agosto/W32/DesktopHero_1500x600_Echo_branco._CB406691354_.jpg" alt=""/>
      </HomeContent>
    </Container>
  );
}

export default Home;