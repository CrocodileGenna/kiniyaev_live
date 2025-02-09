import styled from '@emotion/styled';
import backgroundImage from './proove_orion_3.png';

export const HERO = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  background-size: cover;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: left;

  @media (min-width: 468px) {
    height: 370px;
  }
  @media (min-width: 728px) {
    height: 450px;
    background-position: center center;
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
  background-color: #ffffff;
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
