import styled from 'styled-components';
import img38582 from '../../images/38582.jpg';
import img38593 from '../../images/38593.jpg';
import img91 from '../../images/q9.jpg';
import img01 from '../../images/pw1.jpg';

export const ParallaxSection = styled.section`
  display: flex;
  justify-content: center;
`;

export const ParallaxBackgroundImg1 = styled.div`
  display: block;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  min-width: 50%;
  min-height: 50%;
  background-size: cover;
  background-position: 100%;
  background-repeat: no-repeat;
  position: absolute;
  background-image: url(${img38582});
`;

export const ParallaxBackgroundImg2 = styled.div`
  left: 0;
  top: 100%;
  display: block;
  z-index: -1;
  min-width: 100%;
  min-height: 100%;
  background-size: cover;
  background-position: 100%;
  background-repeat: no-repeat;
  position: absolute;
  background-image: url(${img38593});
`;

export const ParallaxBackgroundImg3 = styled.div`
  left: 0;
  top: 200%;
  display: block;
  z-index: -1;
  min-width: 100%;
  min-height: 100%;
  background-size: cover;
  background-position: 100%;
  background-repeat: no-repeat;
  position: absolute;
  background-image: url(${img91});
`;

export const ParallaxBackgroundImg4 = styled.div`
  left: 0;
  top: 300%;
  display: block;
  z-index: -1;
  min-width: 100%;
  min-height: 100%;
  background-size: cover;
  background-position: 100%;
  background-repeat: no-repeat;
  position: absolute;
  background-image: url(${img01});
`;
