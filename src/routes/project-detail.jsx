import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import ProjectCover from "../components/fields/project-cover";
import { typography, typography2 } from "../styles/typography";
import { projects } from "../components/data";
import { RepoButton } from "../components/button";
import MemberCard from "../components/member-card";
import DetailFooter from "../components/fields/detail-footer";


const GralContainer = styled.div`
  margin: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 6rem;
  align-items: center;

  @media(max-width: 750px) {
    padding: 4rem 1rem;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 5rem;
  width: 90%;
`

const T0 = styled.h1`
  margin: 0;
  ${typography.head.md};
  color: white;
`

const T01 = styled.h4`
  margin: 0;
  ${typography.text.sm};
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
  border-top: 1px solid white;
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
  align-items: center;
  padding: 3rem 0 0 0;
`

const TeamTt = styled.p`
  ${typography.head.md};
  color: white;
  margin: 0;
  padding-bottom: 3rem;
`

const MembersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 4rem;
  padding: 4rem 0;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 850px) {
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
          <T01>← Back to portfolio</T01>
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
        <DetailFooter />
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