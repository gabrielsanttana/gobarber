import styled from 'styled-components';
import loginBackground from '../../assets/login-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;

  form {
    width: 340px;
    margin: 90px 0;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      width: 100%;
      height: 56px;
      border: 2px solid #232129;
      border-radius: 10px;
      background: #232129;
      padding: 16px;
      color: #f4ede8;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      margin-top: 24px;
      width: 100%;
      height: 56px;
      border: 0;
      border-radius: 10px;
      background: #ff9000;
      color: #312e38;
      padding: 0 16px;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(85%);
      }
    }

    a {
      display: block;
      margin-top: 24px;
      color: #f4ede8;
      text-decoration: none;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(85%);
      }

      & + a {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          margin-right: 6px;
        }
      }
    }
  }

  @media screen and (max-width: 375px) {
    form {
      margin: 20px 0;
      padding: 0 24px;

      h1 {
        font-size: 22px;
      }
    }

    overflow: hidden;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${loginBackground}) no-repeat center;
  background-size: cover;
`;
