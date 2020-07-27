import styled, {css} from 'styled-components';

interface ButtonContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ButtonContainerProps>`
  width: 100%;
  height: 56px;
  border: 2px solid #232129;
  border-radius: 10px;
  background: #232129;
  padding: 16px;
  display: flex;
  align-items: center;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
      color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    background: transparent;
    width: 100%;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
