import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import Canvas from './canvas'

import theme from './theme'


function App() {
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }

  return (
    <ThemeProvider theme={theme}>    
      <Wrapper>
        <Name>I'm Leor Ehrlich</Name>
        <Canvas draw={draw}/>
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
