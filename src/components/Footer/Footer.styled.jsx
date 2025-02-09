import styled from '@emotion/styled';
import backgroundImage from './flux_dev_highly_detailed_photorealistic_3d_render_of_a_middlea_0_837209cf-1569-4f14-aa92-642b12718129.jpeg';


export const FOOTER = styled.footer`position: relative;
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
`
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