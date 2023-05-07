import React from 'react';
import Moon from '../../assets/icon-sun.svg';
import Sun from '../../assets/icon-moon.svg';
import { Container, HeaderContent } from './style';
export default function Header({onToggleTheme,selectedTheme}) {
  return (
    <Container>
      <HeaderContent>
        <h1>devfinder</h1>
        <div>
        <p onClick={onToggleTheme}>{selectedTheme === "dark" ? "LIGHT" : "DARK"}</p>
        <button onClick={onToggleTheme}> 
        <img src={selectedTheme === 'dark' ? Moon : Sun} />
        </button>
        </div>
      </HeaderContent>
    </Container>
  );
}
