import React,{useState,useMemo} from 'react';

import GlobalStyle from './styles/global.js';
import Layouts from './components/Layouts/index.js';
import { ThemeProvider } from 'styled-components';
import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState('dark');

  const CurrentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeProvider theme={CurrentTheme}>
      <GlobalStyle />
      <Layouts 
      onToggleTheme={handleToggleTheme}
      selectedTheme={theme}/>
      
    </ThemeProvider>
  );
}

export default App;
