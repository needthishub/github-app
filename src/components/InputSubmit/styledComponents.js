import styled from 'styled-components';

export const Input = styled.input`
  width: 31.25rem;
  padding: 0.625rem 1.25rem;
  margin-bottom: 1.25rem;
  border: solid 2px #686868;
  border-radius: 5px;
  outline: none;
  &:focus {
    border-color: #005ad8;
    transition: 0.5s;
  }
`;

export const Button = styled.button`
  width: 18.75rem;
  margin: 0;
  background-color: #005ad8;
  color: white;
  outline: none;
  cursor: pointer;
`;
