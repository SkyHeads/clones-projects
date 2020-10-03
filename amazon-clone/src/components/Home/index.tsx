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
            title="Echo Dot (3ª Geração): Smart Speaker com Alexa - Cor Preta"
            price={299}
            image="https://images-na.ssl-images-amazon.com/images/I/61Rr8uxmREL._AC_SL1000_.jpg"
            rating={5}
          />
          <Product
            title="Echo Show 8 - Smart Speaker com tela de 8 e Alexa - Cor Preta"
            price={899}
            image="https://images-na.ssl-images-amazon.com/images/I/51uUR1j-kfL._AC_SL1000_.jpg"
            rating={3}
          />
        </HomeContentRow>
        <HomeContentRow>
          <Product
            title="Controle Dualshock 4 - PlayStation 4 - Preto"
            price={259}
            image="https://images-na.ssl-images-amazon.com/images/I/51Ieq0twp%2BL._AC_SL1000_.jpg"
            rating={3}
          />
          <Product
            title="Notebook Acer 15.6 A315-34-C5EY Celeron N4000 4GB 500GB"
            price={2199}
            image="https://images-na.ssl-images-amazon.com/images/I/61cndENlY7L._AC_SL1000_.jpg"
            rating={4}
          />
          <Product
            title="
            Xiaomi Redmi Note 9 128GB 4GB RAM - Versão Global - Midnight Grey"
            price={999}
            image="https://images-na.ssl-images-amazon.com/images/I/61VmUpCs7PL._AC_SL1000_.jpg"
            rating={3}
          />
        </HomeContentRow>
        <HomeContentRow>
          <Product
            title="Pc Gamer/Home Office I5 3470-8gb - 1tb Top27"
            price={1999}
            image="https://images-na.ssl-images-amazon.com/images/I/61mdUKyykGL._AC_SL1000_.jpg"
            rating={5}
          />
        </HomeContentRow>
      </HomeContent>
    </Container>
  );
};

export default Home;
