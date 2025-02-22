import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import PropTypes from 'prop-types';

import {
  RiJavascriptFill,
  RiReactjsFill,
  RiAngularjsFill,
  RiNextjsLine,
  RiVercelFill,
  RiTailwindCssFill
} from 'react-icons/ri';
import { SiRubyonrails } from 'react-icons/si';
import { DiRubyRough, DiHeroku } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3, BiLogoTypescript } from 'react-icons/bi';

const PortCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  letter-spacing: 0.5px;
  cursor: pointer;
  gap: .5rem;
  border: 1px solid white;
  padding: 2rem 0;
  border-radius: 0.75rem;

  @media (max-width: 400px) {
    width: 280px;
  }

  @media (max-width: 300px) {
    width: 220px;
  }
`;

const ProjectImg = styled.img`
  width: 90%;
  height: 150px;
  filter: grayscale(100%);
  border-radius: 0.75rem;

  @media (max-width: 400px) {
    height: 130px;
  }

  @media (max-width: 300px) {
    height: 110px;
  }

  &:hover {
    transition: filter 0.3s ease;
    filter: grayscale(0%);
  }
`;

const DescriptionField = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
`

const Title = styled.p`
  ${typography.head.xs}
  color: white;
  text-align: justify;
  margin: 0;
  padding: .875rem 0;
`

const TechContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
  Next: RiNextjsLine,
  Vercel: RiVercelFill,
  Tailwind: RiTailwindCssFill,
  Typescript: BiLogoTypescript,
};


function PortfolioCard({ imgSrc, title, tech }) {
  PortfolioCard.propTypes = {
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  const maxLength = 21;
  const t = title.length > maxLength ? title.slice(0, maxLength) + '...' : title;

  return (

    <PortCard>
      <ProjectImg src={imgSrc} alt="project" />
      <DescriptionField>
        <Title>{t}</Title>
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
                              : techName === 'Next'
                                ? '#ffffff'
                                : techName === 'Rails'
                                  ? '#EF4444'
                                  : techName === 'HTML'
                                    ? '#F06529'
                                    : techName === 'CSS'
                                      ? '#2965F1'
                                      : techName === 'Heroku'
                                        ? '#6762A6'
                                        : techName === 'Vercel'
                                          ? '#FFFFFF'
                                          : techName === 'Typescript'
                                            ? '#007acc'
                                            : techName === 'Tailwind'
                                              ? '#06b6d4'
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