import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 56px;
  border: 2px solid #232129;
  border-radius: 10px;
  background: #232129;
  padding: 16px;
  display: flex;
  align-items: center;

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
