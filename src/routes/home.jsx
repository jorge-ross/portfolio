import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import Header from "../components/header";
import Card from "../components/card";
import mypic from "../assets/images/av1.jpg"
import TextInDescription from "../components/fields/description-field";
import ProjectCard from "../components/project-card";
import Footer from "../components/footer";

import { typography, typography2 } from "../styles/typography";
import { colors } from "../styles/colors";
import { projects } from "../components/data";
import HomeDescription from "../components/fields/home-description";

const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
`;

const IntroContainer = styled.div`
  background-color: ${colors.black[700]};
  height: 400px;
  place-items: center;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 0.6fr 2fr;
  gap: 16px;
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
  background-color: ${colors.black[400]};
  height: 380px;
  width: 100%;
  display: flex;
  place-items: center;
  justify-content: center;
  align-self: center;
  border-radius: 16px;

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
  width: 100%;
  height: 570px;
  position: relative;

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
  padding: 28px 0 0 0;

  @media (max-width: 500px) {
    ${typography.head.sm};
  }
`;

const ProjectContainer = styled.div`
  height: 350px; 
  width: 100%;
  margin: 16px 0;
  gap: 48px;

  display: grid;
  grid-template-columns: repeat(3, 300px);
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: auto;
  }
`

const WContainer = styled.h1`
  ${typography2.head.lg}
  color: ${colors.green[300]};
  margin: 0;

  @media (max-width: 500px) {
    ${typography2.head.sm};
  }
`

const FContainer = styled.h1`
  ${typography.head.md}
  color: ${colors.stone[200]};
  margin: 0;

  @media (max-width: 1000px) {
    ${typography.head.xs};
    margin: 32px 0;
  }

  @media (max-width: 500px) {
    ${typography.head.xs};
    margin: 32px 0;
  }
`

function Home () {

     return (
    <GeneralContainer>
      <Header />
      <div>
      <IntroContainer>
        <Card 
        gitHubUrl="https://github.com/jorge-ross"
        linkedInUrl="https://www.linkedin.com/in/jorgeros13"
        img={mypic}
        />
        <TextInDescription/>
      </IntroContainer>
      </div> 

      <DescriptionSection>
        <HomeDescription></HomeDescription>
      </DescriptionSection>

      <div>
      <ProjectSection>
        <ProjectText>&#123; Some apps I&#39;ve Built &#125;</ProjectText>
        <WContainer>
          &lt; /&gt;
        </WContainer>

      <ProjectContainer>
      {projects.slice(0, 3).map((project, id) => (
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

        <FContainer>
        Visit my <Link to="/projects" 
        style={{textDecoration: "none", color: "#6EE7B7"}}
        onClick={() => window.scrollTo(0, 0)}
        >Portfolio</Link> for more
        </FContainer>
      </ProjectSection>
      </div>
      <Footer />
    </GeneralContainer>
  )
}

export default Home;