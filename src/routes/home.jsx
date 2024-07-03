import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import Header from "../components/header";
import Card from "../components/card";
import mypic from "../assets/images/Developer.jpg"
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
  width: 80%;
  border-bottom: 1px solid #A8A29E;
  display: flex;
  justify-content: center;
`;

const InsideIntro = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  gap: 6rem;
  padding: 5rem 0;

  @media (max-width: 1000px) {
    gap: 2.5rem;
    display: flex;
    flex-direction: column;
    padding: 4rem 0;
`

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

const PortLink = styled.p`
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

const Statement = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 3rem;
  padding: 5rem 0;
  border-top: 1px solid #A8A29E;

  @media (max-width: 700px) {
    gap: 2.5rem;
    padding: 4rem 0;
  }
`

const AText = styled.p`
  color: ${colors.stone[300]};
  ${typography.head.lgx};
  margin: 0;
  padding-left: 6rem;

  @media (max-width: 700px) {
   ${typography.head.lg};
    padding-left: 2rem;
  }

  @media (max-width: 500px) {
    padding: 0;
    ${typography.head.md};
  }
`;

const BText = styled.p`
  ${typography.text.lg}
  color: ${colors.white};
  margin: 0;
  width: 60%;
  padding-left: 6rem;

  @media (max-width: 700px) {
    ${typography.text.md}
    padding-left: 2rem;
    width: 80%;
  }

  @media (max-width: 500px) {
    ${typography.text.sm};
    padding: 0;
    width: 100%;
  }
`

function Home () {

     return (
      <>
      <GeneralContainer>
      <Header />
      <IntroContainer>
        <InsideIntro>

        <Card 
        gitHubUrl="https://github.com/jorge-ross"
        linkedInUrl="https://www.linkedin.com/in/jorgeros13"
        img={mypic}
        />
        <TextInDescription/>
        </InsideIntro>
      </IntroContainer>

      <HomeDescription />


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
        As a Web Developer, my superpower is problem solving. 
        I enjoy breaking down complex ideas and 
        figuring out how to built them.<br/><br/>

        I&#39;ve worked independently on various projects, 
        which has made me agile and quick to adapt.
        I&#39;ve launched projects that needed to work 
        flawlessly from day one, so I understand the importance 
        of reliability and performance.<br/><br/>

        Finally, I&#39;m a great communicator and collaborator 
        and I know that what&#39;s most important is getting the job
        done well and on time.
        </BText>          
      </Statement>
      <Footer />
    </GeneralContainer>
     </>
  )
}


export default Home;