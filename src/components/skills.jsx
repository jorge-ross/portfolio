import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import { FaJs, FaPython, FaBrain, FaDatabase, FaReact, FaHtml5, FaCss3Alt, FaGit, FaGithub, FaLinux, FaNetworkWired } from 'react-icons/fa';
import { SiAlwaysdata } from "react-icons/si";

const SkillsContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  gap: 3rem;
  padding: 0 0 6rem 0;
  width: 80%;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 4rem 0;
    gap: 2rem;
    width: 90%;
  }
`;

const Title = styled.h2`
  color: white;
  ${typography.head.lgx};
  margin: 0;
  padding-left: 6rem;

  @media (max-width: 1100px) {
    ${typography.head.lg};
    padding: 0;
  }

  @media (max-width: 500px) {
    ${typography.head.md};
  }
`;

const List = styled.ul`
  display: grid;
  width: 95%;
  align-self: center;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 1rem;
  color: white;
  ${typography.text.lg};
  margin: 0;
  align-items: center;
  text-align: center;
  list-style-type: none;
  padding: 0;

  @media (max-width: 1100px) {
    ${typography.text.lgx};
    width: 80%;
  }

  @media (max-width: 500px) {
    ${typography.text.md};
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

function Skills() {
  return (
    <SkillsContainer id="skills">
      <Title>Skills</Title>
      <List>
        <ListItem><FaJs /> JavaScript</ListItem>
        <ListItem><FaHtml5 /> HTML</ListItem>
        <ListItem><FaLinux /> Linux</ListItem>
        <ListItem><FaGit /> Git</ListItem>
        <ListItem><FaPython /> Python</ListItem>
        <ListItem><FaCss3Alt /> CSS</ListItem>
        <ListItem><FaNetworkWired /> API RESTful</ListItem>
        <ListItem><FaGithub /> GitHub</ListItem>
        <ListItem><FaReact /> React</ListItem>
        <ListItem><FaDatabase /> PostgreSQL</ListItem>
        <ListItem><FaBrain /> AI</ListItem>
        <ListItem><SiAlwaysdata /> Data</ListItem>
      </List>
    </SkillsContainer>
  );
}

export default Skills;