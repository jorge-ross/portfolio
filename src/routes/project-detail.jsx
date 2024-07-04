import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import '../styles/styles.css';
import { Link } from "react-router-dom";

import ProjectCover from "../components/fields/project-cover";
import { typography, typography2 } from "../styles/typography";
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
    padding: 4rem 0;
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

const ProjectContainer = styled.div`
  padding: 5rem 3rem;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;

  @media(max-width: 850px) {
    border: none;
    padding: 4rem 0;
    width: auto;
  }
`

const DetailContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  padding-bottom: 4rem;
  border-bottom: 1px solid white;
  gap: 1rem;

  @media(max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    gap: 3rem;
  }
`

const TitleCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.p`
  margin: 0;
  ${typography2.head.md};
  color: white;


  @media (max-width: 500px) {
    ${typography2.head.sm};
  }
`

const DaContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  align-items: center;
  padding: 4rem 0;
`

const SummaryCont = styled.p`
  ${typography.text.md};
  margin: 0 0.5rem;
  color: white;
  display: flex;
  font-weight: 400;
  text-align: justify;
  line-height: 1.7; 

  @media (max-width: 500px) {
    ${typography.text.sm};
    text-align: left;
     line-height: 1.7;
  }
`

const TeamContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 0 0;
  border-top: 1px solid white;

  
  @media (max-width: 850px) {
    // align-items: flex-start;
  }
`

const TeamTt = styled.p`
  ${typography2.head.md};
  color: white;
  margin: 0;
`

const MembersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 5rem;
  padding: 4rem 0 0 0;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    gap: 3rem;
  }

  @media (max-width: 350px) {
    grid-template-columns: repeat(1, auto);
  }
`

const BCover = styled.img`
  display: flex;
  width: 80%;
  padding-bottom: 4rem;
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
        <Link to={project.project_url}>
        <RepoButton>Go to Repo!</RepoButton>
        </Link>
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
            linkedInUrl={member.linkedinurl}
            />
          ))}
        </MembersContainer>
       </TeamContainer>
        </ProjectContainer>
        <DetailFooter />
      </GralContainer>

  )
}

export default ProjectDetail;