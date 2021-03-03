import styled from 'styled-components';

export const Container = styled.div`
  flex: 0 0 calc(25% - 1em);
  margin: 1.563rem;
  border: solid 2px #3a3a3a;
  border-radius: 1.25rem;
  background-color: #F8F8F8;
  transition: 0.5s;
  overflow: hidden;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 5px 10px 15px 1px rgba(0, 0, 0, 0.25) !important;
    border: solid 2px #005ad8 !important;
  }
`;

export const ImageContainer = styled.div`
  background: lightgrey;
  width: inherit;
  height: 18.75rem;
  text-align: center;
  overflow: hidden;
`;

export const Image = styled.img`
  overflow: hidden;
  height: inherit;
  width: 100%;
  transform: scale(1);
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.8);
  }
`;

export const CardBody = styled.div`
  padding: 1.25rem;
  text-align:center;
`;

export const Title = styled.h4`
  word-break: break-word;
  font-weight: bolder;
  text-align: center;
  margin: 0 0 0.938rem;
`;

export const Description = styled.p`
  font-size: 14px;
  text-align: justify;
  overflow: hidden;
`;
