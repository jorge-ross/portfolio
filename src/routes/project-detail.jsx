import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import "../styles/styles.css";
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
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  align-self: center;
  padding: 4rem 0 0 7rem;

  @media (max-width: 1000px) {
    padding: 3rem 0 0 3rem;
  }
`;

const ProjectContainer = styled.div`
  padding: 2rem 3rem 0;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 850px) {
    border: none;
    width: auto;
    padding: 2rem 1.5rem 0 1.5rem;
  }
`;

const Title = styled.p`
  margin: 0;
  padding: 2rem 0;
  ${typography2.head.xxl};
  color: white;

  @media (max-width: 600px) {
    ${typography.head.lg}
  }
`;

const DaContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  align-items: center;
  padding: 3rem 0;
  border-top: 1px solid white;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 95%;
    padding: 2rem 0;
    gap: 2rem;
  }
`;

const SummaryCont = styled.p`
  ${typography.text.lg};
  margin: 0;
  color: white;
  display: flex;
  font-weight: 400;
  text-align: justify;
  line-height: 1.7;
  grid-column: 1 / 3;

  @media (max-width: 500px) {
    text-align: left;
  }
`;

const TeamContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  border-top: 1px solid white;
  border-bottom: 1px solid white;

  @media (max-width: 1000px) {
    padding: 2rem 0;
  }
`;

const TeamTt = styled.p`
  ${typography2.head.md};
  color: white;
  margin: 0;
`;

const MembersContainer = styled.div`
  display: ${(props) => (props.singleMember ? "flex" : "grid")};
  grid-template-columns: ${(props) =>
    props.singleMember ? "1fr" : "repeat(4, 1fr)"};
  align-items: center;
  gap: 3rem;
  padding-top: 4rem;

  @media (max-width: 1200px) {
    grid-template-columns: ${(props) =>
      props.singleMember ? "1fr" : "repeat(3, 1fr)"};
  }

  @media (max-width: 1000px) {
    padding-top: 2rem;
  }

  @media (max-width: 850px) {
    grid-template-columns: ${(props) =>
      props.singleMember ? "1fr" : "repeat(2, 1fr)"};
  }

  @media (max-width: 500px) {
    gap: 3rem;
  }

  @media (max-width: 350px) {
    grid-template-columns: ${(props) =>
      props.singleMember ? "1fr" : "repeat(1, auto)"};
  }
`;

const CoverWrapper = styled.div`
  grid-column: 3 / 4;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    grid-column: auto;
  }
`;

const RepoWrap = styled.div`
  grid-column: 2 / 3;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    grid-column: auto;
  }
`;

function ProjectDetail() {
  const { id } = useParams();
  const index = parseInt(id);
  const project = projects[index];

  return (
    <>
      <Header>
        <Link
          to="/projects"
          className="link-style"
          onClick={() => window.scrollTo(0, 0)}
          style={{
            alignContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IoArrowBackCircleSharp style={{ paddingRight: "16" }} />
          Back to Projects
        </Link>
      </Header>
      <GralContainer>
        <ProjectContainer>
          <Title>{project.title}</Title>

          <DaContainer>
            <SummaryCont>{project.summary}</SummaryCont>
            <CoverWrapper>
              <ProjectCover src={project.imgSrc} />
            </CoverWrapper>

            <RepoWrap>
              <Link to={project.project_url}>
                <RepoButton>Go to Web!</RepoButton>
              </Link>
            </RepoWrap>
          </DaContainer>

          <TeamContainer>
            <TeamTt>
              {project.team.length > 1 ? "The team" : "Created by"}
            </TeamTt>
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
  );
}

export default ProjectDetail;
