import styled from "@emotion/styled"

const About = () => (
  <Wrapper>
      <Title>
        About myself
      </Title>

      <Description>
      Hello, My name is Leor, and I am an American Israeli.
      </Description>
      <Description>
      I am a web developer, specializing in the <b>React js</b> Framework. 
During my career, I have built <b>accessible</b>, <b>responsive</b>, and user friendly websites.
</Description>
      <Description>
        It is my belief that The important part of developing a website, other than it being as bug free as possible, is writing readable, maintainable code.
      </Description>

      <Description>
Here are a few of the technologies I have recently worked with:
      </Description>
      <Technologies>
        <Li>React</Li>
        <Li>Javascript - ES10</Li>
        <Li>HTML & CSS</Li>
        <Li>GatsbyJS</Li>
        <Li>Node.js</Li>
        <Li>Webpack, parcel</Li>
        <Li>Babel</Li>
        <Li>npm, yarn</Li>
      </Technologies>
  </Wrapper>
)

const Wrapper = styled.div`
  margin-top:450px;
`

const Technologies = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 140px;
  margin-top: 20px;
`

const Li = styled.li`
  display: inline-block;
  margin-left: 15px;
  font-size: 14px;
  color: ${props => props.theme.colors.bright};
  height: 30px;
`

const Description = styled.p`
  font-size: 16px;
  max-width: 680px;
  color: ${props => props.theme.colors.bright}
`

const Title = styled.div`
  font-size: 26px;
  color: ${props => props.theme.colors.tertiary}
`

export default About