import React from "react";
import styled from '@emotion/styled'

const Introduction = () =>
 (<>
<Intro>Hi, my name is</Intro>
      <Name>Leor Ehrlich</Name>
      <About>
        I am a Front End developer with industry experience building websites and web applications. I specialize in JavaScript and have professional experience working with React and developing Accessible, Responsive, and SEO focused sites in Agile settings. I am an advocate of pragmatic programming.
        </About>
</>)



const Intro = styled.h1`
  color: ${props => props.theme.colors.tertiary};
  font-size: 16px;
`

const Name = styled.h2`
  color: ${props => props.theme.colors.secondary};
  font-size: 32px;
`

const About = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-size: 18px;
`

export default Introduction