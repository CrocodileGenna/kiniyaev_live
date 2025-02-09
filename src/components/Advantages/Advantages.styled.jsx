import styled from '@emotion/styled';
import backgroundImage from './img/proove_orion_4.png';

export const ADVANT_DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 70px 0 0 0;
  background-color: #f2f2f2;
`;
export const TOTAL_ADVANT_DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 988px) {
    padding: 0 0 100px 0;
  }
`;
export const TOTAL_P = styled.p`
  display: flex;
  padding: 0 0 40px 0;
  font-size: 30px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: #000000;
  line-height: 1.23;
  @media (min-width: 728px) {
    font-size: 32px;
  }
  @media (min-width: 988px) {
    font-size: 34px;
  }
  @media (min-width: 1208px) {
    font-size: 36px;
  }
`;
export const INFO_DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 25px 50px 25px;
  @media (min-width: 988px) {
    padding: 50px 25px;
    flex-direction: row-reverse;
    :nth-child(3n) {
      flex-direction: row;
    }
  }
`;
export const INFO_IMG = styled.img`
  border-radius: 5px;
  width: 320px;
  height: 320px;
  @media (min-width: 468px) {
    width: 450px;
    height: 450px;
  }
  @media (min-width: 728px) {
    width: 550px;
    height: 550px;
  }
  @media (min-width: 1208px) {
  }
`;
export const DOP_INFO_DIV = styled.div`
  width: 320px;
  @media (min-width: 468px) {
    width: 450px;
  }
  @media (min-width: 728px) {
    width: 550px;
  }
  @media (min-width: 988px) {
    padding: 0 50px;
  }
`;
export const DOP_TITLE = styled.p`
  padding: 25px 0 10px 0;
  font-size: 16px;
  line-height: 1.17;
  font-family: 'Montserrat', sans-serif;
  font-weight: 550;
  @media (min-width: 728px) {
    font-size: 18px;
  }
  @media (min-width: 988px) {
    font-size: 20px;
  }
  @media (min-width: 1208px) {
    font-size: 22px;
  }
`;
export const DOP_P = styled.p`
  font-size: 12px;
  line-height: 1.45;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: #000000;
  @media (min-width: 728px) {
    font-size: 14px;
  }
  @media (min-width: 988px) {
    font-size: 16px;
  }
  @media (min-width: 1208px) {
    font-size: 18px;
  }
`;

export const IMG_BG_DIV = styled.div`
  width: 100%;
  height: 220px;
  background-size: cover;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: left;
  @media (min-width: 468px) {
    height: 300px;
  }
  @media (min-width: 578px) {
    height: 380px;
  }
  @media (min-width: 728px) {
    height: 490px;
  }
  @media (min-width: 988px) {
    height: 590px;
    background-position: center center;
  }
  @media (min-width: 1208px) {
    height: 700px;
  }
  @media (min-width: 1508px) {
    height: 920px;
  }
`;
