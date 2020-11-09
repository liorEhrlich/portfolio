import styled from '@emotion/styled'

const NavBar = () => (
  <Wrapper>
    <Links>
    <Li>About</Li>
    <Li>Experience</Li>
    <Li>Projects</Li>
    <Li>Contact</Li>
    </Links>
  </Wrapper>
)

const Wrapper = styled.div`
  height: 100px;
display:flex;
align-items: center;
justify-content: flex-end;
`

const Links = styled.ul`
list-style-type: none;
`

const Li = styled.li`
  display: inline-block;
  margin-left: 15px;
  color: ${props => props.theme.colors.bright}
`

export default NavBar