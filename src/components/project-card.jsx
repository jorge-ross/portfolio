import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import PropTypes from 'prop-types';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 340px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #616161;
  position: relative;
  cursor: pointer;

  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const ProjectImg = styled.img`
  width: 100%;
  height: 160px;
  filter: grayscale(100%);

  &:hover {
    transition: filter 0.3s ease;
    filter: grayscale(0%);  
  }
`;

const DescriptionField = styled.div`
  margin: 0;
  height: 100px;
`

const Title = styled.p`
  ${typography.text.lg}
  color: white;
  text-align: justify;
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
  text-align: justify;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
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
      <DescriptionField>
      <Title>{title}</Title>
      <Summary>{trSummary}</Summary>
      </DescriptionField>
    </Card>
  )
}

export default ProjectCard;