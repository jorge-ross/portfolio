import styled from "@emotion/styled";
import { AiOutlineGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 60%;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Img = styled.img`
  width: 270px;
  border-radius: 15%;

  @media (max-width: 600px) {
    width: 250px;
  }

  @media (max-width: 350px) {
    width: 180px;
  }
`

const SocialLink = styled.a`
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.08);
  }
`;

const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px){
    width: 1.75rem;
  }
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
              <BsLinkedin style={{ width: '85%', height: '90%', color: '#D6D3D1' }} />
            </IconWrapper>
          </SocialLink>
        </SocialMediaWrapper>
    </CardWrapper>
  )
}

export default Card;