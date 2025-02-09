import styled from '@emotion/styled';

export const HEADER = styled.header`
  position: relative;
  max-width: 100%;
  padding: 10px;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #000;
  color: #fff;
  z-index: 2;

  @media (min-width: 768px) {
    padding: 15px;
    height: 35px;
  }
  @media (min-width: 988px) {
    display: none;
  }
`;
export const MENU_BUTTON = styled.span`
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 25px;
  height: 3px;
  background-color: #fff;
  transition: all 0.5s ease;
  z-index: 2;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    transition: all 0.3s ease;
  }

  &::before {
    top: -8px;
  }

  &::after {
    top: 8px;
  }

  ${props =>
    props.isOpen &&
    `
    background-color: transparent;

    &::before {
      transform: rotate(45deg);
      top: 0;
    }

    &::after {
      transform: rotate(-45deg);
      top: 0;
    }
  `}
  @media (min-width: 988px) {
    display: none;
  }
`;

export const MENU = styled.div`
  position: absolute;
  // display: ${props => (props.isOpen ? 'flex' : 'none')};
  display: flex;
  top: ${props => (props.isOpen ? '0' : '-500%')};
  flex-direction: column;
  align-items: center;
  padding: 20px;
  left: 0;
  right: 0;

  color: #fff;
  background-color: rgb(0 0 0 / 50%);
  backdrop-filter: blur(4px);
  transition: all 0.6s ease;
  z-index: 1;

  @media (min-width: 768px) {
    padding: 25px;
  }
`;

export const PHONE = styled.div`
  display: block;
  margin: 60px 0 30px 0;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  @media (min-width: 768px) {
    margin: 60px 0 20px 0;
  }
`;
export const BUTTON = styled.button`
  margin: 20px 0 20px 0;
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
