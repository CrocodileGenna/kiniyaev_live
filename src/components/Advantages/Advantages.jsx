import {
  ADVANT_DIV,
  TOTAL_ADVANT_DIV,
  TOTAL_P,
  INFO_DIV,
  INFO_IMG,
  DOP_INFO_DIV,
  DOP_TITLE,
  DOP_P,
  IMG_BG_DIV,
} from './Advantages.styled';
import photo1 from './img/Screenshot_1.png';
import photo2 from './img/Screenshot_2.png';
import photo3 from './img/Screenshot_3.png';

export const Advantages = () => {
  return (
    <ADVANT_DIV>
      <TOTAL_ADVANT_DIV>
        <TOTAL_P>ПЕРЕВАГИ</TOTAL_P>
        <INFO_DIV>
          <INFO_IMG src={photo1} alt="photo1" />
          <DOP_INFO_DIV>
            <DOP_TITLE>ВИСОКОЯКІСНИЙ ЗВУК</DOP_TITLE>
            <DOP_P>
              Слухайте музику та отримуйте задоволення від кожного звуку.
              Навушники Proove Orion оснащені передовою системою з точно
              налаштованими динамічними випромінювачами, які забезпечують
              відтворення чітких високих частот і насичених глибоких басів та
              дозволяють насолодитися всіма деталями музики, яка на будь-якій
              гучності звучить яскраво та кристально чисто. Вбудовані в кожному
              навушнику мікрофони ефективно вловлюють звуки голосу, технологія
              активного шумозаглушення відокремлює його від зовнішніх шумів і
              посилює для комфортного спілкування навіть на багатолюдній вулиці.
            </DOP_P>
          </DOP_INFO_DIV>
        </INFO_DIV>
        <INFO_DIV>
          <INFO_IMG src={photo3} alt="photo3" />
          <DOP_INFO_DIV>
            <DOP_TITLE>ЛЕГКИЙ ДОТИК</DOP_TITLE>
            <DOP_P>
              Ви можете не тільки слухати музику, але й приймати дзвінки,
              перебуваючи у навушниках Proove Orion. Висока функціональність
              гарнітури вдало поєднується із простим керуванням. Достатньо
              торкнутися сенсорної панелі, щоб керувати відтворенням, а також
              прийняти або відхилити дзвінок.
            </DOP_P>
          </DOP_INFO_DIV>
        </INFO_DIV>
        <INFO_DIV>
          <INFO_IMG src={photo2} alt="photo2" />
          <DOP_INFO_DIV>
            <DOP_TITLE>АВТОНОМНІСТЬ</DOP_TITLE>
            <DOP_P>
              Завдяки тому, що навушники підтримують сучасний стандарт
              бездротового підключення Bluetooth 5.3, вам забезпечено стабільне
              підключення, високошвидкісна передача сигналу та триваліший час
              автономної роботи. На одному повному заряді навушники Proove Orion
              здатні відтворювати музику до 5 годин, а зарядний кейс у кілька
              разів збільшує цей час, щоб ви могли слухати музику та подкасти
              хоч цілий день і не думати про підзарядку.
            </DOP_P>
          </DOP_INFO_DIV>
        </INFO_DIV>
      </TOTAL_ADVANT_DIV>
      <IMG_BG_DIV></IMG_BG_DIV>
    </ADVANT_DIV>
  );
};
