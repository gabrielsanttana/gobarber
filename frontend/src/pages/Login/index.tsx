import React from 'react';
import {FiLogIn, FiLock, FiMail} from 'react-icons/fi';
import {Container, Content, Background} from './styles';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />

        <form>
          <h1>Faça seu login</h1>

          <Input
            name="email"
            type="email"
            placeholder="E-mail"
            autoFocus
            icon={FiMail}
          />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />

          <Button type="submit">Entrar</Button>

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
