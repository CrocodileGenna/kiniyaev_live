import styled from '@emotion/styled';

export const GALERY = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  background-color: #dbdada;

  @media (min-width: 468px) {
    margin: 30px;
    padding: 30px;
  }
  @media (min-width: 728px) {
    margin: 40px 50px;
  }
  @media (min-width: 988px) {
    margin: 60px 120px;
  }
  @media (min-width: 1208px) {
    margin: 80px 180px;
  }
`;

export const MAIN_PHOTO = styled.img`
  display: block;
  border-radius: 5px;
  max-width: 100%;
  max-height: 200px;
  width: 300px;
  object-fit: cover;

  @media (min-width: 468px) {
    width: 380px;
    max-height: 290px;
  }
  @media (min-width: 728px) {
    width: 500px;
    max-height: 360px;
  }
  @media (min-width: 988px) {
    width: 600px;
    max-height: 460px;
  }
  @media (min-width: 1208px) {
    width: 700px;
    max-height: 540px;
  }
`;

export const CONTAIN_DIV = styled.div`
  display: flex;
`;

export const LIST_PHOTO = styled.img`
  border-radius: 5px;
  width: 30px;
  height: 30px;
  object-fit: cover;
  margin: 10px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    outline: solid 2px #1779fa;
    transform: scale(1.2);
    opacity: 0.5;
    cursor: pointer;
  }

  @media (min-width: 468px) {
    margin: 15px 15px 0 15px;
    width: 40px;
    height: 40px;
  }
  @media (min-width: 728px) {
    margin: 15px 20px 0 20px;
    width: 50px;
    height: 50px;
  }
  @media (min-width: 988px) {
    margin: 20px 25px 0 25px;
    width: 60px;
    height: 60px;
  }
  @media (min-width: 1208px) {
    margin: 25px 30px 0 30px;
    width: 70px;
    height: 70px;
  }
`;
