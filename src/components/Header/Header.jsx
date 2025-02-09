import React, { useState } from 'react';
import { HEADER, MENU, MENU_BUTTON, PHONE, BUTTON } from './Header.styled';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <HEADER>
      <MENU_BUTTON onClick={toggleMenu} isOpen={menuOpen}></MENU_BUTTON>
      <MENU isOpen={menuOpen}>
        <PHONE>
        <p>Кинияев Фома Сергеевич,</p>
        <p>Коуч, ментор, наставник.</p>
          <br/>
          <p> +380 99 000 00 00</p>
        </PHONE>
        <BUTTON>
          <p>Зв'язатись</p>
        </BUTTON>
      </MENU>
    </HEADER>
  );
};
