import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import Header from "../components/header";
import Card from "../components/card";
import mypic from "../assets/images/av1.jpg"
import TextInDescription from "../components/fields/description-field";
import ProjectCard from "../components/project-card";
import Footer from "../components/footer";

import { typography } from "../styles/typography";
import { colors } from "../styles/colors";
import { projects } from "../components/data";
import HomeDescription from "../components/fields/home-description";

const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const IntroContainer = styled.div`
  background-color: ${colors.black[600]};
  height: 480px;
  width: 80%;
  place-items: center;
  position: relative;
  display: grid;
  grid-template-columns: 0.6fr 2fr;
  gap: 3rem;
  grid-template-rows: auto;
  grid-template-areas: "left right";
  border-bottom: 1px solid #A8A29E;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "left"
      "right";
    height: 100%
  }
`;

const DescriptionSection = styled.div`
  background-color: ${colors.black[600]};
  height: 480px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: center;

  @media (max-width: 1000px) {
    width: auto;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (max-width: 700px) {
    width: auto;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (max-width: 550px) {
    width: auto;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (max-width: 435px) {
    width: auto;
    height: 870px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  @media (max-width: 405px) {
    width: auto;
    height: 960px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (max-width: 380px) {
    width: auto;
    height: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (max-width: 353px) {
    width: auto;
    height: 1300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`

const ProjectSection = styled.div`
  background-color: ${colors.black[700]};
  display: flex;
  flex-direction: column;
  align-items: center;
  place-items: center;
  width: 80%;
  height: auto;
  position: relative;
  border-top: 1px solid #A8A29E;
  border-bottom: 1px solid #A8A29E;

  @media (max-width: 1000px) {
    background-image: none;
    background-color: #1C1C1C;
    display: flex;
    flex-direction: column;
    width: auto;
    height: fit-content;
  }

`

const ProjectText = styled.p`
  ${typography.head.lg}
  color: ${colors.stone[100]};
  font-weight: 600;
  margin: 0;
  padding: 3rem 0;

  @media (max-width: 500px) {
    ${typography.head.sm};
  }
`;

const ProjectContainer = styled.div`
  height: auto; 
  width: 100%;
  gap: 4rem;

  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: auto;
  }
`

const PortLink = styled.p`
  ${typography.head.sm}
  color: ${colors.stone[100]};
  font-weight: 500;
  margin: 0;
  height: 4rem;
  text-align: right;

  &:hover {
    color: ${colors.yellow[500]};
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Statement = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 3rem;
  padding-bottom: 4rem;
`

const AText = styled.p`
  color: ${colors.stone[300]};
  ${typography.head.lgx};
  margin: 3rem 0 0 0;

  @media (max-width: 500px) {
    ${typography.head.md};
  }
`;

const BText = styled.p`
  ${typography.text.lg}
  color: ${colors.white};
  margin: 0;
  width: 50%;

  @media (max-width: 500px) {
    ${typography.head.sm};
  }
`

function Home () {

     return (
    <GeneralContainer>
      <Header />

      <IntroContainer>
        <Card 
        gitHubUrl="https://github.com/jorge-ross"
        linkedInUrl="https://www.linkedin.com/in/jorgeros13"
        img={mypic}
        />
        <TextInDescription/>
      </IntroContainer>


      <DescriptionSection>
        <HomeDescription></HomeDescription>
      </DescriptionSection>


      <ProjectSection>
        <ProjectText>Recent Projects & Work</ProjectText>

      <ProjectContainer>
      {projects.slice(0, 4).map((project, id) => (
        <Link to={`/projects/${id}`} key={project.id}
        style={{textDecoration: "none"}}
        onClick={() => window.scrollTo(0, 0)}>
        <ProjectCard
          key={project.id}
          img={project.imgSrc}
          title={project.title}
          summary={project.summary}
        />
        </Link>
        ))}
        </ProjectContainer>
      <PortLink>See all</PortLink>
      </ProjectSection>
  
      <Statement>
        <AText>
          Why work with me?
        </AText>
        <BText>
        With a background in computer science, my superpower is problem solving. I&#39;m excellent at breaking down weird and wonderful ideas and figuring out how to get them built.<br/><br/>

        Having worked independently for years, I&#39;m agile and able to move quickly. I&#39;ve launched large internationaly publicised projects that had to work on day one so I understand the importance of reliability and performance.<br/><br/>

        Finally, I&#39;m a great communicator and collaborator and understand that you don&#39;t always care about *how* it gets done, just that it gets done well and on time.
        </BText>          
      </Statement>
      <Footer />
    </GeneralContainer>
  )
}

export default Home;