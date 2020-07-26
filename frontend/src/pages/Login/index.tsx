import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Container, Content, Background} from './styles';
import logo from '../../assets/logo.svg';

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />

        <form>
          <h1>Faça seu login</h1>

          <input type="email" placeholder="E-mail" autoFocus />
          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>

          <a href="reset">Esqueci minha senha</a>

          <a href="reset">
            <FiLogIn />
            Registrar-se
          </a>
        </form>
      </Content>

      <Background />
    </Container>
  );
};

export default Login;
