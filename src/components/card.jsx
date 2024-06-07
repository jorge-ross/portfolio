import styled from "@emotion/styled";
import { AiOutlineGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  grid-area: left;
  padding: 32px 0 32px 64px;

  @media(max-width: 900px) {
    width: 300px;
  }
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 15%;
`

const SocialLink = styled.a`
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.08);
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Card({ gitHubUrl, linkedInUrl, img }) {
  Card.propTypes = {
    gitHubUrl: PropTypes.string,
    linkedInUrl: PropTypes.string,
    img: PropTypes.string,
  }

  return (
    <CardWrapper>
      <Img src={img} alt="JRoss" />
        <SocialMediaWrapper>
      <SocialLink href={gitHubUrl}>
          <IconWrapper>
            <AiOutlineGithub style={{ width: '100%', height: '110%', color: '#D6D3D1' }} />
          </IconWrapper>
        </SocialLink>
        <SocialLink href={linkedInUrl}>
          <IconWrapper>
            <BsLinkedin style={{ width: '88%', height: '78%', color: '#D6D3D1' }} />
          </IconWrapper>
        </SocialLink>
        </SocialMediaWrapper>
   
    </CardWrapper>
  )
}

export default Card;