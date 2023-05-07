import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
  font-family: 'Space Mono', monospace;
}
body{
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.Textcolor};
  
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}

  
`;
