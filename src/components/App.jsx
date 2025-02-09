import { GlobalStyle } from './App.styled';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Orion } from './Orion/Orion';
import { Advantages } from './Advantages/Advantages';
import { Galery } from './Galery/Galery';
export const App = () => {
  return (
    <GlobalStyle>
      <Header />
      <Hero />
      <Orion />
      <Advantages />
      <Galery />
    </GlobalStyle>
  );
};
