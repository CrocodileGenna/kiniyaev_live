import styled from '@emotion/styled';

export const GlobalStyle = styled.div`
  width: 100%;

  h1,
  h2,
  h3,
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
export const UP_BUTTON = styled.button`
  img {
    width: 40px;
    @media screen and (min-width: 460px) {
      width: 50px;
    }
    @media screen and (min-width: 760px) {
      width: 60px;
    }
    @media screen and (min-width: 1200px) {
      width: 70px;
    }
  }
  position: fixed;
  display: flex;
  bottom: 80px;
  right: 20px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  color: #fff;
  background-color: #c29b3e;
  font-size: 30px;
  opacity: 0.7;
  z-index: 9999;
  transition: all 0.3s ease 0s;

  :hover {
    cursor: pointer;
    opacity: 1;
  }
  @media screen and (min-width: 460px) {
    bottom: 40px;
    right: 40px;
    width: 50px;
    height: 50px;
  }
  @media screen and (min-width: 760px) {
    bottom: 50px;
    right: 50px;
    width: 60px;
    height: 60px;
    font-size: 45px;
  }
  @media screen and (min-width: 1200px) {
    bottom: 140px;
    right: 140px;
    width: 70px;
    height: 70px;
    font-size: 50px;
  }
`;
