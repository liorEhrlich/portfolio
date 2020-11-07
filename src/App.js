import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'

import Canvas from './canvas'
import theme from './theme'


function App() {
const createGrid = () => {
  const points = []
  const count = 4
  for (let x = 0; x < count; x++){
    for (let y = 0; y < count; y++){
      const u = x / (count - 1)
      const v = y / (count - 1)
      points.push([u,v])
    }
  }
  return points
}

const points = createGrid();

  const draw = (ctx,canvas, frameCount) => {
    ctx.fillStyle = 'white'
    ctx.fillRect(0,0,canvas.width, canvas.height)

    points.forEach(([u,v]) => {
      const x = u * canvas.width
      const y = v * canvas.height

      ctx.beginPath()
      ctx.arc(x,y,10,0,Math.PI * 2, false)
      ctx.stroke()
    })

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
