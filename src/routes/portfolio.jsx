import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { projects } from "../components/data";
import { Link } from "react-router-dom";

import { typography, typography3 } from "../styles/typography";
import PortfolioCard from "../components/port-card";
import PortFooter from "../components/portfolio-footer";
import PortfolioHeader from "../components/portfolio-header";

const Gcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`

const TitleCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1.5rem;
  padding: 4rem 0;
  border-bottom: 1px solid #A8A29E;
  
  @media(max-width: 1000px) {
    width: 80%;
  }
  
`
const Title = styled.h1`
  ${typography3.head.lg};
  color: ${colors.white};
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media(max-width: 1200px) {
  ${typography3.head.md};
  }

   @media(max-width: 700px) {
  ${typography3.head.sm};
  }
`;


const T2 = styled.p`
  ${typography.text.lg};
  font-weight: 400;
  color: white;
  margin: 1rem 0 0 0;
  text-align: center;

  @media(max-width: 700px) {
    ${typography.text.sm};
  }
`

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  padding: 5rem 0;
  gap: 2.5rem;

  @media(max-width: 1100px) {
    grid-template-columns: repeat(2, auto);
  }

  @media(max-width: 700px) {
    grid-template-columns: repeat(1, auto);
    padding: 4rem 0;
  }
`

function Portfolio() {

  return (
    <Gcontainer>
      <PortfolioHeader />
      <TitleCont>
      {/* <T1>Work</T1> */}
      <Title>
        Here&#39;s a selection of some of the things I&#39;ve built.
      </Title>

      <T2>
      I&#39;ve never had a traditional job, so this is where I 
      document everything I&#39;ve been working on over these
      years—whether it&#39;s new businesses I&#39;ve been developing, 
      experiments, or projects from my programming 
      education.
      </T2>
      </TitleCont>

          <ProjectContainer>
            {projects?.map((project, id) => (
              <Link to={`/projects/${id}`} key={project.id}
              style={{textDecoration: "none"}}
              onClick={() => window.scrollTo(0, 0)}>
              <PortfolioCard
              imgSrc={project.imgSrc}
              title={project.title}
              tech={project.tech}
            />
            </Link>
            ))}
          </ProjectContainer>

      <PortFooter />
    </Gcontainer>
  )
}

export default Portfolio;

