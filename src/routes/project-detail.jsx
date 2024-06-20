import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import '../styles/styles.css';
import { Link } from "react-router-dom";

import ProjectCover from "../components/fields/project-cover";
import { typography, typography2, typography3 } from "../styles/typography";
import { projects } from "../components/data";
import { RepoButton } from "../components/button";
import MemberCard from "../components/member-card";
import DetailFooter from "../components/fields/detail-footer";


const GralContainer = styled.div`
  margin: 0;
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
  align-items: center;
  padding: 0 0 5rem;
  width: 90%;

  @media(max-width: 600px) {
  padding: 0;
  }
`

const T0 = styled.h1`
  margin: 0;
  ${typography.head.md};
  color: white;

  @media(max-width: 600px) {
  display: none;
  }
`

const ProjectContainer = styled.div`
  padding: 4rem 1rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;

  @media(max-width: 850px) {
    border: none;
    padding: 3rem 0;
    width: auto;
  }
`

const DetailContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  padding: 0 2rem 4rem;
  border-bottom: 1px solid white;

  @media(max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 1rem 0 4rem;
  }
`

const TitleCont = styled.div`
  display: flex;
  align-items: center;

  @media(max-width: 1000px) {
    justify-content: center;
    width: 100%;
  }
`

const Title = styled.p`
  margin: 0;
  ${typography2.head.lg};
  color: white;


  @media (max-width: 500px) {
    ${typography2.head.md};
  }
`

const DaContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  padding: 5rem 0 0 0;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`

const SummaryCont = styled.div`
  ${typography3.text.xl};
  color: white;
  display: flex;

  @media (max-width: 950px) {
    ${typography.text.lg};
    font-weight: 500;
    margin: 0;
  }

  @media (max-width: 540px) {
    ${typography.text.md};
  }
`

const RepoCont = styled.div`
  display: flex;

  @media(max-width: 950px) {
    height: 75px;
  }
`

const TeamContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 0 0;
  border-top: 1px solid white;
`

const TeamTt = styled.p`
  ${typography.head.md};
  color: white;
  margin: 0;
`

const MembersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 5rem;
  padding: 4rem 0;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 500px) {
    padding-bottom: 2rem;
  }
`

const BCover = styled.img`
  display: flex;
  width: 70%;
  padding: 4rem 0;

  @media (max-width: 750px) {
    padding: 2rem 0 4rem;
  }
`;

function ProjectDetail() {

  const {id} = useParams();
  const index = parseInt(id)
  const project = projects[index];

  return (

      <GralContainer>
        <Header>
        <Link
          to="/projects"
          className="link-style"
          onClick={() => window.scrollTo(0, 0)}
        >
          ← Back to portfolio
        </Link>
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

       <BCover src={project.imgComp} />

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