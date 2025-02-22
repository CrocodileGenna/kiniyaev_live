import styled from '@emotion/styled';
import backgroundImage from './flux_dev_highly_detailed_photorealistic_3d_render_of_a_middlea_3_2443b5c9-c9d1-4f41-a707-06f7f98e980b.jpeg';

export const HERO = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  background-size: cover;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: top;

  @media (min-width: 468px) {
    height: 370px;
  }
  @media (min-width: 728px) {
    height: 450px;
    // background-position: center center;
  }
  @media (min-width: 988px) {
    height: 570px;
  }
  @media (min-width: 1208px) {
    height: 650px;
  }
  @media (min-width: 1508px) {
    height: 770px;
  }
`;

export const INFO = styled.div`
  display: none;

  @media (min-width: 988px) {
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 30px;
    font-size: 20px;
    font-family: 'TildaSans', Arial, sans-serif;
    color: white;
  }
`;
export const TITLE_TEXT = styled.p`
    display: block; 
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
     background-color: #25ff0024;
      text-align: center;    
      border-radius: 10px;
    font-size: 25px;
    font-family: 'Russo One', sans-serif;
    color: #fffd55; 
    z-index: 1;
    
      @media (min-width: 728px) {
      font-size: 35px;
  }
  @media (min-width: 988px) {
  font-size: 45px;
  }
  @media (min-width: 1208px) {
  font-size: 55px;
  }
  @media (min-width: 1508px) {
  font-size: 65px;
  }`
export const PHONE = styled.div`
  display: block;
  padding: 0 30px 0 0;
  font-size: 20px;
  font-family: 'TildaSans', Arial, sans-serif;
`;
export const BUTTON = styled.button`
  margin: 10px;
  border: none;
  border-radius: 30px;
  height: 40px;
  padding-left: 30px;
  padding-right: 30px;
  color: #000000;
  background-color: #c29b3e;
  font-size: 16px;
  font-family: 'Russo One', sans-serif;
  font-weight: 400;
  font-style: normal;
  transition: all 0.4s ease;

  :hover,
  :focus {
    cursor: pointer;
  }
`;
