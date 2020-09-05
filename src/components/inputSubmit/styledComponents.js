import styled from 'styled-components';

export const Input = styled.input`
  width: 300px;
  padding: 10px 20px;
  border: solid 2px #686868;
  border-radius: 5px;
  margin-right: 5px;
  outline: none;
  &:focus {
    border-color: #005ad8;
    transition: 0.5s;
  }
`;

export const Button = styled.button`
  width: 300px;
  margin: 10px;
  margin-bottom: 0px;
  background-color: #005ad8;
  color: white;
  outline: none;
  cursor: pointer;
`;
