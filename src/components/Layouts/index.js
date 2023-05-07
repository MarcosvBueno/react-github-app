import React from 'react';

import Header from '../Header';
import Search from '../Search';

export default function Layouts({onToggleTheme,selectedTheme}) {
  return (
    <>
      <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme}/>
      <Search />
    </>
  );
}
