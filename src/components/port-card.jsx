import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import { colors } from "../styles/colors";
import PropTypes from 'prop-types';

import { RiJavascriptFill, RiReactjsFill } from 'react-icons/ri';
import { SiRubyonrails } from 'react-icons/si';
import { DiRubyRough, DiHeroku } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3 } from 'react-icons/bi';

const PortCard = styled.div`
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #616161;
  border-bottom: 6px solid #10B981;
  box-shadow: 0 0 5px rgba(0, 255, 255, 0.7),
              0 0 5px rgba(0, 255, 255, 0.6),
              0 0 5px rgba(0, 255, 255, 0.5),
              0 0 15px rgba(50, 50, 100, 0.3);
  position: relative;
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 350px;
  }

  @media (max-width: 600px) {
    width: 320px;
  }

  @media (max-width: 390px) {
    width: 280px;
  }
`;

const ProjectImg = styled.img`
  width: 100%;
  height: 200px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  @media (max-width: 1200px) {
    height: 170px;
  }

  @media (max-width: 600px) {
    height: 150px;
  }
`;

const DescriptionField = styled.div`
  background-color: ${colors.stone[100]};
  width: 100%;
  height: 90px;
  border-radius: 0 0 20px 20px;
  display: flex;
  flex-direction: column;
`

const Title = styled.p`
  ${typography.text.lg}
  color: black;
  text-align: justify;
  margin: 0;
  padding: 16px 16px 5px;
`

const TechContainer = styled.div`
  width: 100%;
  height: 40px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`

const techIcons = {
  Javascript: RiJavascriptFill, 
  React: RiReactjsFill, 
  Ruby: DiRubyRough,
  Rails: SiRubyonrails,
  HTML: AiFillHtml5,
  CSS: BiLogoCss3,
  Heroku: DiHeroku,
};


function PortfolioCard({imgSrc, title, tech}) {
  PortfolioCard.propTypes = {
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  return (
    
    <PortCard>
      <ProjectImg src={imgSrc} alt=""/>
      <DescriptionField>
      <Title>{title}</Title>
      <TechContainer>
          {tech.map((techName, index) => {
            const IconComponent = techIcons[techName];
            if (IconComponent) {
              return (
                <IconComponent
                  key={index}
                  style={{
                    width: '25px',
                    height: '25px',
                    color:
                      techName === 'Javascript'
                        ? '#FCD34D'
                        : techName === 'React'
                        ? '#60A5FA'
                        : techName === 'Ruby'
                        ? '#EF4444'
                        : techName === 'Rails'
                        ? '#EF4444'
                        : techName === 'HTML'
                        ? '#F06529'
                        : techName === 'CSS'
                        ? '#2965F1'
                        : techName === 'Heroku'
                        ? '#6762A6'
                        : undefined,
                    
                  }}
                />
              );
            }
            return null;
          })}
        </TechContainer>
      </DescriptionField>
    </PortCard>

  )
}

export default PortfolioCard;