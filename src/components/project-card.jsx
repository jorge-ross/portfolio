import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import PropTypes from 'prop-types';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 320px;
  font-size: 12px;
  cursor: pointer;
  letter-spacing: 0.5px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 500px) {
    width: 260px;
  }

  @media (max-width: 320px) {
    width: 220px;
  }
`;

const ProjectImg = styled.img`
  filter: grayscale(100%);
  height: 160px;

  &:hover {
    transition: filter 0.3s ease;
    filter: grayscale(0%);  
  }

  @media (max-width: 500px) {
    height: 140px;
  }

  @media (max-width: 320px) {
    height: 120px;
  }
`;



const Title = styled.p`
  ${typography.text.lg}
  color: white;
  margin: 0;
  padding-bottom: 5px;
  
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const Summary = styled.p`
  ${typography.text.sm}
  color: white;
  margin: 0;
  overflow: hidden;
`

function ProjectCard({ img, title, summary }) {
  ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    img: PropTypes.string,
  };

  const maxLength = 100;

  const trSummary = summary.length > maxLength ? summary.slice(0, maxLength) + '...' : summary;

  return (
    <Card>
      <ProjectImg src={img} alt="home-cards" />   
      <Title>{title}</Title>
      <Summary>{trSummary}</Summary>
    </Card>
  )
}

export default ProjectCard;