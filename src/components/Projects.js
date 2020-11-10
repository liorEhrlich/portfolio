import styled from "@emotion/styled"

const Projects = () => (
<Wrapper> 
  <Title id='projects'>
    Projects
  </Title>
</Wrapper>
)

const Wrapper = styled.div`
  margin-top:240px;
`

const Title = styled.div`
padding-top: 25px;
  font-size: 26px;
  color: ${props => props.theme.colors.primary}
`

export default Projects