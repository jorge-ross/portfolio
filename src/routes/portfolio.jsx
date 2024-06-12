import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { projects } from "../components/data";
import { Link } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";
import { typography } from "../styles/typography";
import PortfolioCard from "../components/port-card";

const Gcontainer = styled.div`
  background-color: ${colors.black[300]};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`

const TitleCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 1.5rem;
  padding: 5rem 0 4rem;
  border-bottom: 1px solid #A8A29E;
`
const Title = styled.h1`
  ${typography.head.lg};
  color: ${colors.white};
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media(max-width: 1200px) {
  ${typography.head.md};
  }

   @media(max-width: 1200px) {
  ${typography.head.sm};
  }
`;

const T1 = styled.h1`
  ${typography.head.md};
  color: ${colors.blue[300]};
  margin: 0;
  text-align: left;
  padding
`

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  padding: 4rem 0;
  gap: 3rem;

  @media(max-width: 1000px) {
    grid-template-columns: repeat(2, auto);
  }

  @media(max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

function Portfolio() {

  return (
    <Gcontainer>
      <Header />
      <TitleCont>
      <T1>Work</T1>
      <Title>
        Here&#39;s a selection of some of the things I&#39;ve built.
      </Title>
      </TitleCont>

          <ProjectContainer>
            {projects?.map((project, id) => (
              <Link to={`/projects/${id}`} key={project.id}
              style={{textDecoration: "none"}}
              onClick={() => window.scrollTo(0, 0)}>
              <PortfolioCard
              // key={id}
              imgSrc={project.imgSrc}
              title={project.title}
              tech={project.tech}
            />
            </Link>
            ))}
          </ProjectContainer>

      <Footer />
    </Gcontainer>
  )
}

export default Portfolio;

