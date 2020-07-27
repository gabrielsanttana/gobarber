import React, {useCallback} from 'react';
import {FiArrowLeft, FiLock, FiMail} from 'react-icons/fi';
import {Form} from '@unform/web';
import * as Yup from 'yup';
import {Container, Content, Background} from './styles';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Signup: React.FC = () => {
  const handleSubmit = useCallback(async (formData: object) => {
    try {
      const dataValidationSchema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
      });

      await dataValidationSchema.validate(formData, {
        abortEarly: false,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <img src={logo} alt="logo" />

        <Form initialData={{}} onSubmit={handleSubmit}>
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
        </Form>

        <a href="/">
          <FiArrowLeft />
          Voltar para login
        </a>
      </Content>
    </Container>
  );
};

export default Signup;
