import React, { useState } from 'react';
import photo1 from './img/395198181.png';
import photo2 from './img/Screenshot_5.png';
import photo3 from './img/Screenshot_7.png';
import next from './img/caret-left-duotone-svgrepo-com.svg';
import previous from './img/caret-right-duotone-svgrepo-com.svg';
import {
  ORION,
  PHOTO_DIV,
  IMG,
  IMG_DIV,
  BUTTON,
  PAG_DIV,
  PAGINATION,
  INFO_DIV,
  TITLE_P,
  DOP_INFO,
  SALE,
  PRICE,
  CHOICE_DIV,
  COLOR,
  SELECT,
  PURCHASE_BUTTON,
} from './Orion.styled';
const photos = [photo1, photo2, photo3];
const colors = ['Чорний', 'Білий'];

export const Orion = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const goToNextPhoto = () => {
    setCurrentPhotoIndex(
      currentPhotoIndex === photos.length - 1 ? 0 : currentPhotoIndex + 1
    );
  };

  const goToPreviousPhoto = () => {
    setCurrentPhotoIndex(
      currentPhotoIndex === 0 ? photos.length - 1 : currentPhotoIndex - 1
    );
  };
  const handleDotClick = index => {
    setCurrentPhotoIndex(index);
  };
  // -----
  const [selectedColor, setSelectedColor] = useState('');

  const handleChange = event => {
    setSelectedColor(event.target.value);
  };

  return (
    <ORION>
      <PHOTO_DIV>
        <IMG_DIV>
          <BUTTON onClick={goToPreviousPhoto}>
            <img src={next} alt="Next" width="20px" />
          </BUTTON>
          <IMG
            src={photos[currentPhotoIndex]}
            alt={`photo${currentPhotoIndex + 1}`}
            width="320px"
          />
          <BUTTON onClick={goToNextPhoto}>
            <img src={previous} alt="Previous" width="20px" />
          </BUTTON>
        </IMG_DIV>
        <PAGINATION>
          {photos.map((photo, index) => (
            <PAG_DIV
              key={index}
              active={index === currentPhotoIndex}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </PAGINATION>
      </PHOTO_DIV>
      <INFO_DIV>
        <TITLE_P>Proove Orion</TITLE_P>
        <DOP_INFO data-customstyle="yes">
          Навушники Proove Orion - ваш надійний супутник у світі звуку та
          зв'язку, забезпечуючи якісний звук та комфортне спілкування у
          будь-якому місці, що створює неповторний аудіо-досвід.
        </DOP_INFO>
        <SALE>
          799грн.<PRICE>1299грн.</PRICE>
        </SALE>
        <CHOICE_DIV>
          <COLOR>Кольори:</COLOR>
          <SELECT
            id="colorSelect"
            value={selectedColor}
            onChange={handleChange}
          >
            {colors.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </SELECT>
        </CHOICE_DIV>
        <PURCHASE_BUTTON>Замовити</PURCHASE_BUTTON>
      </INFO_DIV>
    </ORION>
  );
};
