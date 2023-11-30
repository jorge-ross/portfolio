import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import { colors } from "../styles/colors";
import PropTypes from 'prop-types';

const Card = styled.div`
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  width: 290px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #616161;
  border-bottom: 5px solid #059669;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.5),
              0 0 12px rgba(255, 255, 255, 0.3);
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
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-bottom: 2px solid #34D399;
`;

const DescriptionField = styled.div`
  background-color: ${colors.stone[100]};
  padding: 16px;
  margin: 0;
  height: 104px;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
`

const Title = styled.p`
  ${typography.text.lg}
  color: black;
  text-align: justify;
  margin: 0;
  padding-bottom: 5px;
`

const Summary = styled.p`
  ${typography.text.sm}
  color: black;
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