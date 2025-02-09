import React, { useState } from 'react';
import { GALERY, MAIN_PHOTO, CONTAIN_DIV, LIST_PHOTO } from './Galery.styled';

import photo1 from './img/395198181.png';
import photo2 from './img/Screenshot_5.png';
import photo3 from './img/Screenshot_7.png';
import photo4 from './img/367785329.png';
import photo5 from './img/Screenshot_6.png';

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
