import React, { useState } from 'react';
import { GALERY, MAIN_PHOTO, CONTAIN_DIV, LIST_PHOTO } from './Galery.styled';

import photo1 from './img/openart-image_7T530WRg_1739086217242_raw.png';
import photo2 from './img/openart-image_Kr34oWb1_1739085891510_raw.png';
import photo3 from './img/openart-image_T-UR7Wje_1739086241124_raw.png';
import photo4 from './img/openart-image_V3ScPrDy_1739085538628_raw.png';
import photo5 from './img/openart-image_hi84rdfk_1739085264889_raw.png';

const photos = [photo4, photo5, photo3, photo2, photo1];
export const Galery = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleThumbnailClick = index => {
    setCurrentPhotoIndex(index);
  };

  //   const handlePrevClick = () => {
  //     setCurrentPhotoIndex(prevIndex =>
  //       prevIndex === 0 ? photos.length - 1 : prevIndex - 1
  //     );
  //   };

  //   const handleNextClick = () => {
  //     setCurrentPhotoIndex(prevIndex =>
  //       prevIndex === photos.length - 1 ? 0 : prevIndex + 1
  //     );
  //   };
  return (
    <GALERY>
      {/* <button onClick={handlePrevClick}>-</button> */}
      <MAIN_PHOTO
        src={photos[currentPhotoIndex]}
        alt={`Photo ${currentPhotoIndex + 1}`}
      />
      {/* <button onClick={handleNextClick}>+</button> */}
      <CONTAIN_DIV>
        {photos.map((photo, index) => (
          <LIST_PHOTO
            key={index}
            src={photo}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </CONTAIN_DIV>
    </GALERY>
  );
};
