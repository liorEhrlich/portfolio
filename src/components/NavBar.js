import styled from '@emotion/styled'

import linkedinImage from '../images/linkedin.svg'
import githubImage from '../images/github.svg'
import homeImage from '../images/home.svg'

const NavBar = () => (
  <Wrapper>
    <LogoWrapper href='/'>
      <HomeLogo  src={homeImage} alt='home'/>
    </LogoWrapper>

    <Links>
    <a href='#about'>
    <Li>About</Li>
    </a>
    <a href='#experience'>
    <Li>Experience</Li>
    </a>
    <a href='#projects'>
    <Li>Projects</Li>
    </a>
    <a href='#contact'>
    <Li>Contact</Li>
    </a>
    <ImageAnchor href='https://www.linkedin.com/in/lior-ehrlich-064980117/'>
      <LinkedinImage src={linkedinImage} alt='linkedin'/>
    </ImageAnchor>
    <ImageAnchor href='https://github.com/liorEhrlich'>
      <GithubImage src={githubImage} alt='github'/>
    </ImageAnchor>
    </Links>
  </Wrapper>
)

const Wrapper = styled.div`
  height: 100px;
  display:flex;
  align-items: center;
  justify-content: flex-end;
`

const ImageAnchor = styled.a`
  position: relative;
`

const Image = styled.img`
  height: 28px;
  position: absolute;
  animation: fadeIn ease 1s;
  transition: all .2s ease-in-out;

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

  :hover{
    cursor: pointer;
    transform: scale(1.1);
  }
`

const LogoWrapper = styled.a`
  position: fixed;
  left: 40px;
  top: 35px;
`

const HomeLogo = styled(Image)`
  position: relative;
`

const LinkedinImage = styled(Image)`
  top: -2px;
  left: 15px;
`

const GithubImage = styled(Image)`
  top: -5px;
  left: 50px;
`

const Links = styled.ul`
list-style-type: none;
animation: fadeIn ease 1s;
position: fixed;
right: 95px;

@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
  }
`

const Li = styled.li`
  display: inline-block;
  margin-left: 20px;
  color: ${props => props.theme.colors.bright};
  background-color: ${props => props.theme.colors.tertiary};
  padding: 5px 8px;
  border-radius: 3px;
  transition: all .2s ease-in-out;

  :hover{
    transform: scale(1.1);
  }
`

export default NavBar