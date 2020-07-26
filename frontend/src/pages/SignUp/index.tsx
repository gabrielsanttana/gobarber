import React from 'react';
import {FiArrowLeft, FiLock, FiMail} from 'react-icons/fi';
import {Container, Content, Background} from './styles';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Signup: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={logo} alt="logo" />

      <form>
        <h1>Faça seu cadastro</h1>

        <Input
          name="username"
          type="text"
          placeholder="Nome"
          autoFocus
          icon={FiMail}
        />
        <Input name="email" type="email" placeholder="E-mail" icon={FiMail} />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          icon={FiLock}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="/">
        <FiArrowLeft />
        Voltar para login
      </a>
    </Content>
  </Container>
);

export default Signup;
