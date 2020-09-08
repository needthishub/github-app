import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  padding: 10px;
  width: 100%;
  margin-bottom: 15px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 18px;
`;

export const Menu = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 15px;
`;
