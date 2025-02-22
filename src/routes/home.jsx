import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import Header from "../components/header";

import ProjectCard from "../components/project-card";
import Footer from "../components/footer";

import { typography } from "../styles/typography";
import { colors } from "../styles/colors";
import { projects } from "../components/data";
import About from "../components/about";
import Statement from "../components/statement";
import Introduction from "../components/introd";
import Skills from "../components/skills";

const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const ProjectSection = styled.div`
  background-color: ${colors.black[600]};
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
  width: 80%;
  border-top: 1px solid #A8A29E;

  @media (max-width: 1000px) {
    background-image: none;
    background-color: #1C1C1C;
    display: flex;
    flex-direction: column;
    padding: 4rem 0;
  }

`

const ProjectText = styled.p`
  ${typography.head.lg}
  color: ${colors.stone[100]};
  font-weight: 600;
  margin: 0;
  padding-bottom: 3rem;
  text-align: center;

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

const PortLink = styled(Link)`
  ${typography.head.sm}
  color: ${colors.stone[100]};
  font-weight: 500;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding-top: 2rem;

  &:hover {
    color: ${colors.yellow[500]};
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    ${typography.text.lg}
  }
`;

function Home() {

  return (
    <>
      <GeneralContainer>
        <Header />
        <Introduction />
        <About />
        <Skills />


        <ProjectSection>
          <ProjectText>Recent Projects & Work</ProjectText>

          <ProjectContainer>
            {projects.slice(0, 4).map((project, id) => (
              <Link to={`/projects/${id}`} key={project.id}
                style={{ textDecoration: "none" }}
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
          <PortLink to="/projects" onClick={() => window.scrollTo(0, 0)}>See all</PortLink>
        </ProjectSection>
        <Statement />
        <Footer />
      </GeneralContainer>
    </>
  )
}


export default Home;