import styled from "@emotion/styled";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import ProjectCover from "../components/fields/project-cover";
import { typography, typography2 } from "../styles/typography";
import { projects } from "../components/data";
import { RepoButton } from "../components/button";
import MemberCard from "../components/member-card";


const GralContainer = styled.div`
  margin: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 6rem 6rem;
  align-items: center;

  @media(max-width: 750px) {
    padding: 4rem 1rem;
  }
`

const Header = styled.div`
  display: flex;
  padding: 0 0 5.5rem;
  width: 90%;
`

const T0 = styled.h1`
  margin: 0;
  ${typography.head.md};
  color: white;
`

const ProjectContainer = styled.div`
  padding: 4rem 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;

  @media(max-width: 750px) {
    border: none;
    width: 95%;
  }
`

const DetailContainer = styled.div`
  width: 80%;
  display: flex;
  gap: 3rem;
  padding: 0 2rem 4rem;
  border-bottom: 1px solid white;

  @media(max-width: 1000px) {
    flex-direction: column;
    gap: 3rem;
    padding: 1rem 0 4rem;
  }
`

const TitleCont = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60%;

  @media(max-width: 1000px) {
    justify-content: center;
    width: 100%;
  }
`

const Title = styled.p`
  margin: 0;
  ${typography2.head.lg};
  color: white;


  @media (max-width: 1000px) {
    ${typography2.head.lg};
  }
`

const DaContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  border-bottom: 1px solid white;
`

const SummaryCont = styled.div`
  ${typography.text.xl};
  color: white;
  display: flex;
  align-items: center;
  text-align: left;

  @media (max-width: 950px) {
    ${typography.text.lg};
    font-weight: 500;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 540px) {
    ${typography.text.lg};
    font-weight: 500;
    text-align: center;
    width: 95%;
  }
`

const RepoCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;

  @media(max-width: 950px) {
    height: 75px;
  }
`

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1400px) {
    height: 600px;
  }

  @media (max-width: 600px) {
    height: 750px;
  }
`

const TeamTt = styled.p`
  ${typography.head.md};
  color: white;
  margin: 24px 0 24px 0;
`

const MembersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;
  padding: 24px 0;
  border-top: 1px solid #78716C;
  border-bottom: 1px solid #78716C;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

function ProjectDetail() {

  const {id} = useParams();
  const index = parseInt(id)
  const project = projects[index];

  return (

      <GralContainer>
        <Header>
          <T0>Jorge Rosano</T0>
        </Header>
        <ProjectContainer>
       <DetailContainer>
        <TitleCont>
          <Title>{project.title}</Title>
        </TitleCont>
        <ProjectCover src={project.imgSrc} />
       </DetailContainer>

       <DaContainer>

        <SummaryCont>{project.summary}</SummaryCont>
        <RepoCont>
          <Link to={project.project_url}>
          <RepoButton>Go to Repo!</RepoButton>
          </Link>
        </RepoCont>

       </DaContainer>

       <TeamContainer>
        <TeamTt>
          {project.team.length > 1 ? "The team" : "Created by"}</TeamTt>
        <MembersContainer>
          {project.team.map((member, id) => (
            <MemberCard 
            key={id}
            name={member.name}
            profilePicUrl={member.profilePicUrl}
            gitHubUrl={member.githubUrl}
            />
          ))}
        </MembersContainer>
       </TeamContainer>
        </ProjectContainer>
        <Footer />
      </GralContainer>

  )
}

// ProjectDetail.propTypes = {
//     id: PropTypes.string.isRequired,
//     imgSrc: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     tech: PropTypes.arrayOf(PropTypes.string).isRequired,
//     team: PropTypes.arrayOf(PropTypes.string).isRequired,
//   }

export default ProjectDetail;