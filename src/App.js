import { ThemeProvider } from 'emotion-theming'
import { Global, css } from '@emotion/core'

import theme from './theme'
import Home from './components/Home'
import NavBar from './components/NavBar';
import About from './components/About';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
              body {
                background-color: ${theme.colors.background};
                margin: 0 30px;
                padding: 0;
                height: '100vh';
                width: '100vw';
                font-family: monospace;
              }
            `}
      />
      <NavBar/>
      <Home/>
      <About/>
    </ThemeProvider>
  );
}

export default App;
