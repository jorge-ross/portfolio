import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { projects } from "../components/data";
import { Link } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";
import { typography } from "../styles/typography";
import PortfolioCard from "../components/port-card";

const Gcontainer = styled.div`
  background-color: ${colors.black[600]};
`

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-top: 16px;
`;

const Title = styled.h1`
  ${typography.head.lg};
  color: ${colors.green[500]};
  margin: 0;
`

const Container = styled.div`
  margin: 16px auto 70px;
  width: 1000px;
  height: 800px;
  background-color: ${colors.black[500]};
  display: flex;
  justify-content: center;
  place-items: center;
  position: relative;

  @media (max-width: 1200px) {
    width: 800px;
    height: 896px;
  }

  @media (max-width: 900px) {
    width: 600px;
    height: 896px;
  }

  @media (max-width: 600px) {
    width: 360px;
    height: 896px;
  }

  @media (max-width: 390px) {
    width: 320px;
    height: 896px;
  }

`

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 60px;
  grid-column-gap: 0;
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
  padding: 24px 20px;
  height: 740px;
  width: 100%;
  overflow-y: auto;

  @media(max-width: 900px) {
    grid-template-columns: 1fr;
    height: 830px;
  }
`

function Portfolio() {

  return (
    <Gcontainer>
      <Header />
      <TextContainer>
      <Title>All projects</Title>.
      </TextContainer>
        <Container>
          <ProjectContainer>
            {projects?.map((project, id) => (
              <Link to={`/projects/${id}`} key={project.id}
              style={{textDecoration: "none"}}
              onClick={() => window.scrollTo(0, 0)}>
              <PortfolioCard
              key={id}
              imgSrc={project.imgSrc}
              title={project.title}
              tech={project.tech}
            />
            </Link>
            ))}
          </ProjectContainer>
        </Container>
      <Footer />
    </Gcontainer>
  )
}

export default Portfolio;

