import React, {useState, useEffect} from 'react';
import {
  ParallaxBackgroundImg4, ParallaxBackgroundImg3, ParallaxBackgroundImg2, ParallaxBackgroundImg1, ParallaxSection,
} from './styledComponents';

const Parallax = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ParallaxSection>
      <ParallaxBackgroundImg1
        style={{transform: `translateY(-${offsetY * 0.3}px)`}}
      />
      <ParallaxBackgroundImg2
        style={{transform: `translateY(-${offsetY * 0.3}px)`}}
      />
      <ParallaxBackgroundImg3
        style={{transform: `translateY(-${offsetY * 0.3}px)`}}
      />
      <ParallaxBackgroundImg4
        style={{transform: `translateY(-${offsetY * 0.3}px)`}}
      />
    </ParallaxSection>
  );
};

export default Parallax;
