import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import { colors } from "../styles/colors";
import PropTypes from 'prop-types';

import { RiJavascriptFill, RiReactjsFill, RiAngularjsFill } from 'react-icons/ri';
import { SiRubyonrails } from 'react-icons/si';
import { DiRubyRough, DiHeroku } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3 } from 'react-icons/bi';

const PortCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  letter-spacing: 0.5px;
  cursor: pointer;
   background-color: white;

  @media (max-width: 1200px) {
    width: 350px;
  }

  @media (max-width: 600px) {
    width: 300px;
  }

  @media (max-width: 400px) {
    height: 220px;
    width: 230px;
  }
`;

const ProjectImg = styled.img`
  width: 90%;
  height: 200px;
 

  @media (max-width: 1200px) {
    height: 170px;
  }

  @media (max-width: 600px) {
    height: 150px;
  }
`;

const DescriptionField = styled.div`
  background-color: ${colors.stone[100]};
  width: 90%;
  height: 90px;
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
  Angular: RiAngularjsFill,
};


function PortfolioCard({imgSrc, title, tech}) {
  PortfolioCard.propTypes = {
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  return (
    
    <PortCard>
      <ProjectImg src={imgSrc} alt="project"/>
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
                        : techName === 'Angular'
                        ? '#B52E31'
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