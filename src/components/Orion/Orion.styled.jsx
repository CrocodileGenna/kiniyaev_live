import styled from '@emotion/styled';

export const ORION = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 20px;
`;

export const PHOTO_DIV = styled.div`
  display: flex;
  flex-direction: column;
`;
export const IMG_DIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IMG = styled.img`
  object-fit: cover;
  border-radius: 5px;
  max-width: 100%;
  width: 280px;
  max-height: 250px;
  @media (min-width: 468px) {
    width: 380px;
    max-height: 370px;
  }
  @media (min-width: 728px) {
    width: 550px;
    max-height: 540px;
  }
  @media (min-width: 988px) {
    width: 640px;
    max-height: 640px;
  }
  @media (min-width: 1208px) {
    width: 720px;
    max-height: 700px;
  }
`;
export const BUTTON = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: #fff;
  :hover,
  :focus {
    cursor: pointer;
  }
  @media (min-width: 728px) {
    margin: 0 10px;
    width: 40px;
    height: 40px;
  }
  @media (min-width: 988px) {
    margin: 0 30px;
    width: 50px;
    height: 50px;
  }
`;
export const PAGINATION = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;
export const PAG_DIV = styled.div`
  display: flex;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => (props.active ? '#1779fa' : '#ccc')};
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.4s ease;

  :hover,
  :focus {
    background-color: ${props => (props.active ? '#1779fa' : '#999')};
    cursor: pointer;
  }
`;

// ----------------------------

export const INFO_DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TITLE_P = styled.p`
  padding: 0 0 20px 0;
  text-align: center;
  font-size: 24px;
  line-height: 1.17;
  font-family: 'Montserrat', sans-serif;
  font-weight: 550;
  color: #000000;
  @media (min-width: 468px) {
    padding: 10px 0 20px 0;
  }
  @media (min-width: 728px) {
    padding: 20px 0 20px 0;
  }
  @media (min-width: 988px) {
    padding: 30px 0 20px 0;
  }
`;
export const DOP_INFO = styled.p`
  padding: 0 0 20px 0;
  text-align: center;
  line-height: 1.55;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: #000000;
  @media (min-width: 468px) {
  width: 400px;
  font-size: 16px;
  }
  @media (min-width: 728px) {
  padding: 0 0 30px 0;
  width: 600px;
  font-size: 18px;
  }
}
`;
export const SALE = styled.p`
  display: flex;
  padding: 0 0 20px 0;
  font-size: 20px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  color: #000000;
  @media (min-width: 728px) {
    font-size: 22px;
    padding: 0 0 30px 0;
  }
  @media (min-width: 1208px) {
    font-size: 24px;
    padding: 0 0 40px 0;
  }
`;
export const PRICE = styled.span`
  display: inline-block;
  vertical-align: middle;
  text-decoration: line-through;
  float: left;
  font-size: 20px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  color: #bdbdbd;
  @media (min-width: 728px) {
    font-size: 22px;
  }
  @media (min-width: 1208px) {
    font-size: 24px;
  }
`;
export const CHOICE_DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const COLOR = styled.p`
  display: flex;
  padding: 0 0 5px 0;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: #000000;
  @media (min-width: 728px) {
    padding: 0 0 7px 0;
    font-size: 14px;
  }
  @media (min-width: 1208px) {
    font-size: 16px;
  }
`;
export const SELECT = styled.select`
  appearance: none;
  width: 150px;
  padding: 8px 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  @media (min-width: 728px) {
    width: 200px;
    padding: 10px 15px;
    font-size: 14px;
  }
  @media (min-width: 1208px) {
    font-size: 16px;
  }
`;
export const PURCHASE_BUTTON = styled.button`
  margin: 30px 0 0 0;
  padding: 20px 30px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  background-image: none;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  background-color: #1779fa;
  :hover,
  :focus {
    cursor: pointer;
  }
  @media (min-width: 728px) {
    margin: 40px 0 0 0;
    padding: 25px 40px;
    font-size: 16px;
  }
  @media (min-width: 1208px) {
    margin: 40px 0 0 0;
    padding: 25px 55px;
    font-size: 16px;
  }
`;
