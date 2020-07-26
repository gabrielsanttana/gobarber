import styled from 'styled-components';

export const Container = styled.button`
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
`;
