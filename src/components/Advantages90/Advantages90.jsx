import {
  ADVANT_DIV,
  TOTAL_ADVANT_DIV,
  TOTAL_P,
  INFO_DIV,
  INFO_IMG,
  DOP_INFO_DIV,
  DOP_TITLE,
  DOP_P,
} from './Advantages.styled';
import photo1 from './img/openart-image_KQLLtn8l_1739088763850_raw.png';

export const Advantages90 = () => {
  return (
    <ADVANT_DIV>
      <TOTAL_ADVANT_DIV>
        <TOTAL_P>
        Тёмные пятна біографії</TOTAL_P>
        <INFO_DIV>
          <INFO_IMG src={photo1} alt="photo1" />
          
          <DOP_TITLE>Фома не ангел</DOP_TITLE>
          <DOP_INFO_DIV>
            <DOP_P>
 У 90-е його, ще зовсім молодого, втягнули в нехорошу історію з криміналом. Друзья дитинства умовляли "поучаствовать" в темних справах – він відмовився, але неприятності його все же коснулись. Тоді він дал поняти, що не має наміру грати за чужими правилами, і вийшов сухим із води, але пару раз був на грані.

Тепер він старається триматися в стороні від будь-якої мутної історії, але життя в промисловому місті диктує свої закони. І якщо в заводському цеху вдруге виникне що-то дивне або небезпечне – він точно буде серед тих, хто першим заподозріть неладне.</DOP_P>
          </DOP_INFO_DIV>
        </INFO_DIV>
        
      </TOTAL_ADVANT_DIV>
    </ADVANT_DIV>
  );
};
