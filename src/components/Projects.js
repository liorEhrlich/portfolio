import styled from "@emotion/styled"

import Title from './common/Title'
import SectionWrapper from './common/SectionWrapper'
import movieDBImage from '../images/movie-db.PNG'

const Projects = () => (
<SectionWrapper> 
  <Title id='projects'>
    Projects
  </Title>

  <a target="_blank" rel="noreferrer" href='https://movies-db-leor.netlify.app/'>
    <Img src={movieDBImage} alt='movie-db'/>
  </a>
  <Name>Movies DB</Name>
  <Url target="_blank" rel="noreferrer" href='https://movies-db-leor.netlify.app/'>movies-db-leor.netlify.app</Url>
  <CodeLink target="_blank" rel="noreferrer" href='https://github.com/liorEhrlich/movies-db'>Check out the code</CodeLink>
  <Desc>Fetches data from the movies db <b>api</b>, and displays it using <b>Gatsby</b>.
  <br/>
  The styling was done using JS in CSS <b>Styled Components</b>.
  Deployed on <b>Netlify</b>.
  </Desc>
</SectionWrapper>
)

const Img = styled.img`
  height: 200px;
  max-width: 400px;
  object-fit: contain;

  @media only screen and (max-width: 420px) {
    max-width: 200px;
  }
`

const Name = styled.div`
  font-size: 18px;
  margin: 10px 0;
  color: ${props => props.theme.colors.primary}
`

const Url = styled.a`
  font-size: 16px;
  color: ${props => props.theme.colors.bright};
  text-decoration: none;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const Desc = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.bright};
  margin-bottom: 40px;
`

const CodeLink = styled.a`
  display: block;
  font-size: 16px;
  color: ${props => props.theme.colors.bright};
  margin: 10px 0;
  text-decoration: none;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

export default Projects