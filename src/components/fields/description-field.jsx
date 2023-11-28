import styled from "@emotion/styled";
import { keyframes } from '@emotion/react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2';
import { RiJavascriptFill, RiReactjsFill } from 'react-icons/ri';
import { SiRuby, SiRubyonrails } from 'react-icons/si';
import { BsBook } from 'react-icons/bs';
import { AiFillHtml5 } from 'react-icons/ai';
import { FcLinux } from 'react-icons/fc';
import { FaGitAlt, FaBusinessTime, FaBrain } from 'react-icons/fa';
import { BiLogoPostgresql, BiLogoCss3, BiLogoNodejs } from 'react-icons/bi';
import { MdComputer } from 'react-icons/md';

const DescriptionField = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 390px;
  width: 95%;
  grid-area: right;
  border-radius: 50px;

  &: hover {
    border: 1px solid #A8A29E;
  }

  @media (min-width: 1480px) {
    width: 95%;
    height: 350px;
  }

  @media (max-width: 1250px) {
    width: 95%;
    margin-bottom: 32px;
    height: 390px;
  }

  @media (max-width: 700px) {
    width: 450px;
    height: 500px;
    margin-bottom: 32px;
  }

  @media (max-width: 500px) {
    width: 340px;
    height: 500px;
    margin-bottom: 32px;
  }

  @media (max-width: 360px) {
    width: 300px;
    height: 630px;
    margin-bottom: 32px;
  }
`;

const neonGlow = keyframes`
  from {
    text-shadow: 0 0 10px #00dfff, 0 0 20px #00dfff, 0 0 30px #00dfff;
  }
  to {
    text-shadow: 0 0 15px #00dfff, 0 0 25px #00dfff, 0 0 35px #00dfff;
  }
`;

const AText = styled.p`
  color: ${colors.stone[300]};
  ${typography.head.lgx}
  margin: 32px 0 0 0;
  text-align: center;
  animation: ${neonGlow} 1s ease-in-out infinite alternate;

  @media (max-width: 500px) {
    ${typography.head.md};
  }
`;

const BText = styled.p`
  ${typography.head.md}
  color: ${colors.white};
  margin: 28px 40px 16px;
  text-align: center;
  font-weight: 500;

  @media (max-width: 500px) {
    ${typography.head.sm};
  }
`

const CText = styled.p`
  ${typography.head.sm}
  margin: 0;
  padding: 0 28px;
  text-align: justify;
  font-weight: 600;
  color: ${colors.white};

  @media (max-width: 700px) {
    ${typography.head.xs};
    text-align: center;
  }
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 40px 0 40px;
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 700px) {
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
  }
`

const IconContainerTwo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 40px 0 40px;
  gap: 16px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    justify-content: center;
    .icon-row {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    } 
  }
`

const LineContainer = styled.div`
  color: ${colors.stone[300]};
  ${typography.head.sm}
  margin-left: 32px;
  animation: ${neonGlow} 1s ease-in-out infinite alternate;

  @media (max-width: 700px) {
    ${typography.head.xs};
    text-align: center;
    margin: 0;
  }
`

function TextInDescription({ backgroundImage }) {
    TextInDescription.propTypes = {
      backgroundImage: PropTypes.string,
    }

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsSmallScreen(window.innerWidth <= 700);
    };

    window.addEventListener('resize', checkScreenWidth);

    checkScreenWidth();

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <DescriptionField backgroundImage={backgroundImage} alt="stars" >
      <AText>
      &#34;Hello world!&#34;
      </AText>
      <BText>
      I&#39;m <span style={{color: "#FCD34D", fontWeight: 600}}>Jorge Rosano </span> 
      Full Stack Web Developer looking for new adventures.
      </BText>
      <CText>My Skills:</CText>
      <IconContainer>
        <HiOutlineChatBubbleOvalLeftEllipsis style={{ width: '30px', height: '30px', color: '#6EE7B7', strokeWidth: '2px' }} />
        <MdComputer style={{ width: '29px', height: '29px', color: '#FEF2F2' }} />
        <FaBusinessTime style={{ width: '29px', height: '29px', color: '#FBBF24' }} />
        <BsBook style={{ width: '25px', height: '25px', color: '#93C5FD', strokeWidth: '0.5px'}} />
        <FaBrain style={{ width: '26px', height: '26px', color: '#F9A8D4'}} />
      </IconContainer>
      <LineContainer>----------------------------</LineContainer>
      <IconContainerTwo>
        {isSmallScreen && (
        <>
          <div className="icon-row">
            <RiJavascriptFill style={{ width: '35px', height: '35px', color: '#FCD34D'}}/>
            <RiReactjsFill style={{ width: '35px', height: '35px', color: '#60A5FA'}}/>
            <BiLogoNodejs style={{ width: '35px', height: '35px', color: '#68A063'}}/>
            <SiRuby style={{ width: '27px', height: '27px', color: '#EF4444'}}/>
            <SiRubyonrails style={{ width: '45px', height: '45px', color: '#F87171'}}/>
          </div>
          <div className="icon-row">
          <BiLogoPostgresql style={{ width: '37px', height: '37px', color: '#60A5FA'}}/>
          <AiFillHtml5 style={{ width: '35px', height: '35px', color: '#F06529'}}/>
          <BiLogoCss3 style={{ width: '35px', height: '35px', color: '#2965F1'}}/>
          <FcLinux style={{ width: '35px', height: '35px'}}/>
          <FaGitAlt style={{ width: '35px', height: '35px', color: '#F1502F'}}/>
          </div>
        </>
      )}
    </IconContainerTwo>
      {!isSmallScreen && (
        <IconContainerTwo>
            <RiJavascriptFill style={{ width: '35px', height: '35px', color: '#FCD34D'}}/>
            <RiReactjsFill style={{ width: '35px', height: '35px', color: '#60A5FA'}}/>
            <BiLogoNodejs style={{ width: '35px', height: '35px', color: '#68A063'}}/>
            <SiRuby style={{ width: '27px', height: '27px', color: '#EF4444'}}/>
            <SiRubyonrails style={{ width: '45px', height: '45px', color: '#F87171'}}/>
            <BiLogoPostgresql style={{ width: '37px', height: '37px', color: '#60A5FA'}}/>
            <AiFillHtml5 style={{ width: '35px', height: '35px', color: '#F06529'}}/>
            <BiLogoCss3 style={{ width: '35px', height: '35px', color: '#2965F1'}}/>
            <FcLinux style={{ width: '35px', height: '35px'}}/>
            <FaGitAlt style={{ width: '35px', height: '35px', color: '#F1502F'}}/>
        </IconContainerTwo>
      )}
    </DescriptionField>
  )
}

export default TextInDescription;