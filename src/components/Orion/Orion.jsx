import React, { useState } from 'react';
import photo1 from './img/flux_dev_a_highly_detailed_photorealistic_3d_render_of_a_middl_1_ee617f03-a108-4f36-a663-3dde6bb6f133.jpeg';
import photo2 from './img//flux_dev_highly_detailed_photorealistic_3d_render_of_a_middlea_0_837209cf-1569-4f14-aa92-642b12718129.jpeg';
import photo3 from './img/flux_dev_highly_detailed_photorealistic_3d_render_of_a_middlea_3_2443b5c9-c9d1-4f41-a707-06f7f98e980b.jpeg';
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
const colors = ['PRO-version', 'BEGINER-version'];

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
        <TITLE_P>Обьщая информация</TITLE_P>
        <DOP_INFO data-customstyle="yes">
        Кинияев Фома Сергеевич – чоловік середнього року, 42 роки. Родился и вырос в небольшом промышленном городе, где с детства привык к заводскому гулу, запаху машинного масла и металлической пыли. Суровые будни его не пугали – он рано понял, что путь к стабильности лежить через терпение и упорный труд.
        </DOP_INFO>
        <SALE>
          799грн.<PRICE>1299грн.</PRICE>
        </SALE>
        <CHOICE_DIV>
          <COLOR> Варианти курсів:</COLOR>
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
