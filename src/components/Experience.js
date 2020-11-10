import styled from "@emotion/styled"

const Experience = () => (
<Wrapper> 
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
  <WorkPlace>Salesforce</WorkPlace>
  <WorkDesc>Field Service Lightning Product
</WorkDesc>
  <Years>2017 - 2018</Years>
  </div>

  <JobDesc>
  Quality Assurance Engineer
  <br/>
  Write, review, revise and verify quality standards and test procedures for program design and product evaluation.
<br/>
Implement best practices as a Salesforce admin in the quality assurance team.
<br/>
Create and maintain test requirements, cases, and monitor scripts for each testing cycle 
<br/>
Provide QA status reporting and escalate issues/risks in a timely manner to Management and assist in resolution.
  </JobDesc>
  </Work>
</Wrapper>
)

const Wrapper = styled.div`
  margin-top:240px;
`

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

const Title = styled.div`
  padding-top: 25px;
  font-size: 26px;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
`

export default Experience