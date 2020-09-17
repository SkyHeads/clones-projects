import React from 'react';

import Product from '../Product';

import {
  Container,
  HomeContent,
  HomeContentImg,
  HomeContentRow,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <HomeContent>
        <HomeContentImg
          src="https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2020/Alexa/GW/Agosto/W32/DesktopHero_1500x600_Echo_branco._CB406691354_.jpg"
          alt=""
        />
        <HomeContentRow>
          <Product
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2020/Alexa/GW/Agosto/W32/DesktopHero_1500x600_Echo_branco._CB406691354_.jpg"
            rating={5}
          />
          <Product
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2020/Alexa/GW/Agosto/W32/DesktopHero_1500x600_Echo_branco._CB406691354_.jpg"
            rating={2}
          />
        </HomeContentRow>

        {/* <HomeContentRow>
          <Product />
          <Product />
          <Product />
        </HomeContentRow>

        <HomeContentRow>
          <Product />
        </HomeContentRow> */}
      </HomeContent>
    </Container>
  );
};

export default Home;