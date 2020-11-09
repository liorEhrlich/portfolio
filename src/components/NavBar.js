import styled from '@emotion/styled'

const NavBar = () => (
  <Wrapper>
        <Li><a href="default.asp">About</a></Li>
        <Li><a href="news.asp">Experience</a></Li>
        <Li><a href="contact.asp">Projects</a></Li>
        <Li><a href="about.asp">Contact</a></Li>
      </Wrapper>
)

const Wrapper = styled.ul`
list-style-type: none;

`
const Li = styled.li`
  display: inline-block;
  margin-left: 5px;
`

export default NavBar