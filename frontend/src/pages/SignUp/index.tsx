import React, {useCallback, useRef} from 'react';
import {FiArrowLeft, FiLock, FiMail} from 'react-icons/fi';
import {FormHandles} from '@unform/core';
import {Form} from '@unform/web';
import * as Yup from 'yup';
import {Container, Content, Background} from './styles';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (formData: object) => {
    formRef.current?.setErrors({});

    try {
      const dataValidationSchema = Yup.object().shape({
        username: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('E-mail obrigatório'),
        password: Yup.string().min(
          6,
          'A senha deve conter no mínimo 6 dígitos',
        ),
      });

      await dataValidationSchema.validate(formData, {
        abortEarly: false,
      });
    } catch (error) {
      const validationErrors = getValidationErrors(error);

      formRef.current?.setErrors(validationErrors);
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <img src={logo} alt="logo" />

        <Form ref={formRef} initialData={{}} onSubmit={handleSubmit}>
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
