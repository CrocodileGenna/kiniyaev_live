import { HERO, INFO, BUTTON, PHONE } from './Hero.styled';

export const Hero = () => {
  return (
    <HERO>
      <INFO>
        <PHONE>
          <p>Зв'яжись з нами: +380 99 000 00 00</p>
        </PHONE>
        <BUTTON>
          <p>Купити рюкзак</p>
        </BUTTON>
      </INFO>
    </HERO>
  );
};
