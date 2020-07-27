import React from 'react';
import {FiLogIn, FiLock, FiMail} from 'react-icons/fi';
import {Form} from '@unform/web';
import {Container, Content, Background} from './styles';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />

        <Form initialData={{}} onSubmit={() => {}}>
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

          <a href="/cadastrar">
            <FiLogIn />
            Cadastrar-se
          </a>
        </Form>
      </Content>

      <Background />
    </Container>
  );
};

export default Login;
