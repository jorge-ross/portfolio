import styled from "@emotion/styled";
import Header from "../components/header";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

import ProjectCover from "../components/fields/project-cover";
import { colors } from "../styles/colors";
import { typography, typography2 } from "../styles/typography";
import { projects } from "../components/data";
import { RepoButton } from "../components/button";
import MemberCard from "../components/member-card";


const GralContainer = styled.div`
  margin: 0;
  background-color: ${colors.black[600]};
  height: auto;
  display: flex;
  justify-content: center;
  padding: 4rem;
`

const ProjectContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
`

const DetailContainer = styled.div`
  width: 930px;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  grid-gap: 20px;
  padding-bottom: 24px;

  @media(max-width: 950px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "left"
      "right";
    width: 500px;
    margin: 16px 0 0 0;
  }

  @media(max-width: 540px) {
    width: 400px;
  }

  @media(max-width: 400px) {
    width: 320px;
  }
`

const DaContainer = styled.div`
  background-color: ${colors.black[300]};
  width: 97%;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  margin: 0 0 16px 0;

  @media(max-width: 950px) {
    height: 400px;
  }

  @media(max-width: 500px) {
    height: 390px;
    border-radius: 10px;
  }
`

const DetailTwoContainer = styled.div`
  width: 930px;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  grid-gap: 20px;
  align-items: center;

  @media(max-width: 950px) {
    grid-template-columns: 1fr;
    grid-gap: 1px;
    grid-template-areas:
      "left"
      "right";
    width: 500px;
    height: 300px;
  }

  @media(max-width: 500px) {
    width: 300px;
  }
`

const ImgCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 250px;
`

const TitleCont = styled.p`
  margin: 0;
  ${typography2.head.xxl}
  color: ${colors.green[300]};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 540px) {
    ${typography2.head.lg};
  }
`

const SummaryCont = styled.div`
  ${typography.text.xl};
  color: ${colors.stone[200]};
  display: flex;
  align-items: center;
  text-align: left;
  margin: 20px;

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
  color: ${colors.green[300]};
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

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Header />
      <GralContainer>
        <ProjectContainer>
       <DetailContainer>
        <TitleCont>{project.title}</TitleCont>
        <ImgCont>
          <ProjectCover size={screenWidth < 540 ? 'sm' : 'md'}
           src={project.imgSrc} />
        </ImgCont>
       </DetailContainer>
       <DaContainer>
       <DetailTwoContainer> 
        <SummaryCont>{project.summary}</SummaryCont>
        <RepoCont>
          <Link to={project.project_url}>
          <RepoButton>Go to Repo!</RepoButton>
          </Link>
        </RepoCont>
       </DetailTwoContainer>
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
        <Footer />
        </ProjectContainer>
      </GralContainer>
    </div>
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