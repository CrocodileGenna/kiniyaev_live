import { useEffect, useState } from 'react';
import { GlobalStyle, UP_BUTTON } from './App.styled';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Orion } from './Orion/Orion';
import { Advantages } from './Advantages/Advantages';
import { Galery } from './Galery/Galery';
import { Advantages90 } from './Advantages90/Advantages90';
import Footer from './Footer/Footer';
import arrow_top from './icons8-стрелка-вверх-50.png';

export const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [img, setImg] = useState('');
  const [openImg, setOpenImg] = useState(false);
  const [bodyOverflow, setBodyOverflow] = useState('visible');

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    document.body.style.overflow = bodyOverflow;
  }, [bodyOverflow]);

  // if (openImg === true) {
  //   document.body.style.overflow = 'hidden';
  // } else {
  //   document.body.style.overflow = 'visible';
  // }
  return (
    <GlobalStyle>
      <Header />
      <Hero />
      <Orion />
      <Galery />
      <Advantages />
      <Advantages90 />
      <Footer></Footer>
      {isVisible && (
        <UP_BUTTON
          className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
          onClick={scrollToTop}
        >
          <img src={arrow_top} alt="arrow_top" />
        </UP_BUTTON>
      )}
    </GlobalStyle>
  );
};
