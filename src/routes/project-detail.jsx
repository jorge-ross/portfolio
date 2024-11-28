import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import '../styles/styles.css';
import { Link } from "react-router-dom";

import ProjectCover from "../components/project-cover";
import { typography, typography2 } from "../styles/typography";
import { projects } from "../components/data";
import { RepoButton } from "../components/button";
import MemberCard from "../components/member-card";
import DetailFooter from "../components/detail-footer";

import { IoArrowBackCircleSharp } from "react-icons/io5";



const GralContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // padding: 5rem 6rem;
  align-items: center;

  // @media(max-width: 750px) {
  //   padding: 4rem 0;
  // }
`

const Header = styled.div`
  display: flex;
  align-self: center;
  padding: 5rem 0 0 10rem;

  @media(max-width: 1000px) {
  padding: 3rem 0 0 3rem;
  }
`

const ProjectContainer = styled.div`
  padding: 4rem 3rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: 1px solid white;

  @media(max-width: 850px) {
    border: none;
    width: auto;
  }
`

const DetailContainer = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  @media(max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem;
  }
`

const Title = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0;
  ${typography2.head.lg};
  color: white;

  @media (max-width: 500px){
    ${typography.head.md}
  }
`

const DaContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  padding: 4rem 0;

  @media (max-width: 600px){
    width: 85%;
  }
`

const SummaryCont = styled.p`
  ${typography.text.lg};
  margin: 0 0.5rem;
  color: white;
  display: flex;
  font-weight: 400;
  text-align: justify;
  line-height: 1.7;

  @media (max-width: 500px){
    text-align: left;
  }
`

const TeamContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 0 0;
  border-top: 1px solid white;
`

const TeamTt = styled.p`
  ${typography2.head.md};
  color: white;
  margin: 0;
`

const MembersContainer = styled.div`
  display: ${props => (props.singleMember ? 'flex' : 'grid')};
  grid-template-columns: ${props => (props.singleMember ? '1fr' : 'repeat(4, 1fr)')};
  align-items: center;
  gap: 3rem;
  padding: 4rem 0 0 0;

  @media (max-width: 1200px) {
    grid-template-columns: ${props => (props.singleMember ? '1fr' : 'repeat(3, 1fr)')};
  }

  @media (max-width: 850px) {
    grid-template-columns: ${props => (props.singleMember ? '1fr' : 'repeat(2, 1fr)')};
  }

  @media (max-width: 500px) {
    gap: 3rem;
  }

  @media (max-width: 350px) {
    grid-template-columns: ${props => (props.singleMember ? '1fr' : 'repeat(1, auto)')}
  }
`

const BCover = styled.img`
  display: flex;
  width: 85%;
`;

function ProjectDetail() {

  const {id} = useParams();
  const index = parseInt(id)
  const project = projects[index];

  return (
    
    <>
    <Header>
      <Link
        to="/projects"
        className="link-style"
        onClick={() => window.scrollTo(0, 0)}
        >
        <IoArrowBackCircleSharp />
      </Link>
    </Header>
    <GralContainer>
      <ProjectContainer>
        <DetailContainer>
        <Title>{project.title}</Title>
        <ProjectCover src={project.imgSrc} />
       </DetailContainer>

       <DaContainer>
        <SummaryCont>{project.summary}</SummaryCont>
        <BCover src={project.imgComp} />
        <Link to={project.project_url}>
        <RepoButton>Go to Repo!</RepoButton>
        </Link>
       </DaContainer>


       <TeamContainer>
        <TeamTt>
          {project.team.length > 1 ? "The team" : "Created by"}</TeamTt>
        <MembersContainer singleMember={project.team.length < 2}>
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

    </>
  )
}

export default ProjectDetail;