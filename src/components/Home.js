import styled from '@emotion/styled'

const Home = () =>
 (<Wrapper>
  <div>
    <div>
    <Name id='home'>Leor Ehrlich</Name>
    <Job>Web Developer</Job>

    </div>
    <About>
      I am a Front End developer with industry experience building websites and web applications. I specialize in JavaScript and have professional experience working with React and developing Accessible, Responsive, and SEO focused sites in Agile settings. I am an advocate of pragmatic programming.
    </About>

    <a href="mailto:liorehrlich@gmail.com">
      <Contact >
        Contact me
      </Contact>
    </a>
    </div>
</Wrapper>)

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const Name = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: 65px;
  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }
`

const Job = styled.h2`
  color: ${props => props.theme.colors.secondary};
  font-size: 45px;

  animation: fadeIn ease 5s;

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }
`

const About = styled.h3`
  color: ${props => props.theme.colors.secondary};
  font-size: 18px;
  max-width: 780px;
  font-weight: 100;
  animation: fadeIn ease 7s;

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }
`

const Contact = styled.button`
  border: 2px solid ${props => props.theme.colors.secondary};
  border-radius: 4px;
  color: ${props => props.theme.colors.secondary};
  background-color: transparent;
  padding: 10px 0;
  margin-top: 20px;
  width: 100px;
  animation: fadeIn ease 7s;
  transition: all .2s ease-in-out;

  :hover{
    cursor: pointer;
    transform: scale(1.1);
  }

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }
`

export default Home