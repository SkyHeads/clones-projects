import React, { useState, useCallback, FormEvent, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth, User } from 'firebase';
import firebase from '../../firebase';
import 'firebase/auth';

import { Store } from '../../hooks/Store';

import Logo from '../../assets/img/logo.png';

import { Container, LogoImg, LogInContent } from './styles';

const Login: React.FC = () => {
  const storeContext = useContext(Store);

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = useCallback(
    (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();

      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(response => {
          storeContext.setUser(response);
          history.push('/');
        })
        .catch(error => console.log(error.message));
    },
    [email, password, history, storeContext],
  );

  const signUp = useCallback(
    (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
          if (response) {
            history.push('/');
          }
        })
        .catch(error => console.log(error.message));
    },
    [email, password, history],
  );

  return (
    <Container>
      <Link to="/">
        <LogoImg src={Logo} />
      </Link>
      <LogInContent>
        <h1>Entrar</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Senha</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button
            onClick={signIn}
            className="login__signInButton"
            type="submit"
          >
            Continuar
          </button>
        </form>
        <p>
          Ao continuar, você concorda com as Condições de Uso da Amazon. Por
          favor verifique a Notificação de Privacidade, Notificação de Cookies e
          a Notificação de Anúncios Baseados em Interesse.
        </p>
        <button
          onClick={signUp}
          className="login__registerButton"
          type="submit"
        >
          Criar sua conta Amazon
        </button>
      </LogInContent>
    </Container>
  );
};

export default Login;
