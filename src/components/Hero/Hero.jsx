import { HERO, INFO, BUTTON, PHONE,TITLE_TEXT } from './Hero.styled';

export const Hero = () => {
  return (
    <HERO>
          <TITLE_TEXT>ЗМІНИ СВОЄ ЖИТТЯ ЗАРАЗ!</TITLE_TEXT>
      <INFO>
        <PHONE>
        <p>Кинияев Фома Сергеевич</p>
        <br/>
        <p>Коуч, мунтор, наставник</p>
          <br/>
          <p> +380 99 000 00 00</p>
        </PHONE>
        <BUTTON>
          <p>Зв'язатись</p>
        </BUTTON>
      </INFO>
    </HERO>
  );
};
