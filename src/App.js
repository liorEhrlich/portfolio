import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>    
      <Wrapper>
        <Name>I'm Leor Ehrlich</Name>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.lightOrange};
`

const Name = styled.h1`
  color: ${props => props.theme.colors.pink};
`

export default App;
