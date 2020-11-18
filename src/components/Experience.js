import styled from "@emotion/styled"

import Title from './common/Title'
import SectionWrapper from './common/SectionWrapper'

const Experience = () => (
<SectionWrapper> 
  <Title id='experience'>
    Work Experience
  </Title>

<Work>
  <div>
  <WorkPlace>500Tech</WorkPlace>
  <WorkDesc>Web Consultment</WorkDesc>
  <Years>2020</Years>
</div>

<JobDesc>
  Web Developer
  <br/>
  Develop responsive and accessible front-end web application interfaces.
  <br/>
Ensure clean, maintainable code that can serve many uses throughout an application
Identify, establish, and share front-end design best practices.
<br/>
Collaborate with designers to ensure designs were efficient and user friendly. 
Perform bug fixes and code reviews.
  </JobDesc>
  </Work>

<Work>
  <div>
  <WorkPlace>Asperii</WorkPlace>
  <WorkDesc>Web applications for
Salesforce customers
</WorkDesc>
  <Years>2019 - 2020</Years>
  </div>

  <JobDesc>
  Web Developer
  <br/>
  Large-scale ReactJS development, including related ecosystem and tooling (Node, yarn, etc.), and state management such as redux.
<br/>
Experience in projects emphasizing cloud-hosted solutions and services, and modern web frameworks, within an agile development model.
<br/>
Backend development for Salesforce clients using Apex language (Apex is based on Java) .

  </JobDesc>
  </Work>

  <Work>
  <div>
  <WorkPlace>Cyberbit</WorkPlace>
  <WorkDesc>SCADA protocol
Analyzing product
</WorkDesc>
  <Years>2014 - 2016</Years>
  </div>

  <JobDesc>
  Quality Assurance Engineer
  <br/>
  Manual testing in both Windows and Linux operating systems in all four testing phases; unit, integration, system, acceptance. Managed bugs using JIRA, and documented tests in Testrail.
  <br/>
Researching SCADA communication protocols to analyse the protocol at bit level, and for learning its security elements to base the product’s rules upon.
<br/>
Perform regression, integration, platform and performance testing to certify the stability and usability of software systems. 
<br/>
Develop and execute test programs that helped improve accuracy of QA results. 
<br/>
Parsing from bytes to protocols fields according to the protocol documentation with Wireshark application. 
  </JobDesc>
  </Work>
</SectionWrapper>
)

const Work = styled.div`
  display:flex;
  justify-content: end;
`

const JobDesc = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.bright};
  margin: 25px 0 0 20px;
`

const WorkDesc = styled.div`
  font-size: 16px;
  color: ${props => props.theme.colors.bright};
  margin-top: 10px;
  width: 150px;
`

const Years = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.bright};
  margin-top: 10px;
  margin-bottom: 30px;
`

const WorkPlace = styled.div`
  font-size: 20px;
  color: ${props => props.theme.colors.secondary};
`

export default Experience