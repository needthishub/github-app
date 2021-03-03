import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  padding: 0.938rem;
  width: 100%;
`;

export const Title = styled.h1`
  color: white;
  font-size: 1.125rem;
  margin-bottom: 0;
`;

export const Menu = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  margin-left: 0.375rem;
  &:nth-child(3) {
    margin-left: auto;
  }
`;
