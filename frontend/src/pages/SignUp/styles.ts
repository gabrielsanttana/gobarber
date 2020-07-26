import styled from 'styled-components';
import signupBackground from '../../assets/signup-background.png';

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
      font-size: 24px;
      margin-bottom: 24px;
    }

    div {
      & + div {
        margin-top: 8px;
      }
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    color: #f4ede8;
    text-decoration: none;
    transition: filter 0.2s;

    svg {
      margin-right: 6px;
    }

    &:hover {
      filter: brightness(85%);
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
  background: url(${signupBackground}) no-repeat center;
  background-size: cover;
`;
