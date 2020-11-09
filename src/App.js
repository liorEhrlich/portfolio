import { ThemeProvider } from 'emotion-theming'
import { Global, css } from '@emotion/core'

import theme from './theme'
import Introduction from './components/Introduction'
import NavBar from './components/NavBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
              body {
                background-color: ${theme.colors.background};
                margin: 0;
                padding: 0;
                height: '100vh';
                width: '100vw';
                font-family: monospace;
              }
            `}
      />
      <NavBar/>
      <Introduction/>
    </ThemeProvider>
  );
}

export default App;
