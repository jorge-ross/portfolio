import styled from "@emotion/styled";
import { AiOutlineGithub } from 'react-icons/ai';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { RiTwitterLine } from 'react-icons/ri'
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  grid-area: left;
  padding: 32px 0;

  @media(max-width: 900px) {
    width: 300px;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0 8px;
`;

const Img = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  box-shadow: 0 0 20px #D1FAE5;
  filter: brightness(0.97);
`

const SocialLink = styled.a`
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.08);
  }
`;

const IconWrapper = styled.div`
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Card({ gitHubUrl, linkedInUrl, InstaUrl, XUrl, img }) {
  Card.propTypes = {
    gitHubUrl: PropTypes.string,
    linkedInUrl: PropTypes.string,
    InstaUrl: PropTypes.string,
    XUrl: PropTypes.string,
    img: PropTypes.string,
  }

  return (
    <CardWrapper>
      <Img src={img} alt="JRoss" />
      <DetailsWrapper>
        <SocialMediaWrapper>
      <SocialLink href={gitHubUrl}>
          <IconWrapper>
            <AiOutlineGithub style={{ width: '110%', height: '110%', color: '#D6D3D1' }} />
          </IconWrapper>
        </SocialLink>
        <SocialLink href={linkedInUrl}>
          <IconWrapper>
            <BsLinkedin style={{ width: '88%', height: '88%', color: '#D6D3D1' }} />
          </IconWrapper>
        </SocialLink>
        <SocialLink href={InstaUrl}>
          <IconWrapper>
            <BsInstagram style={{ width: '90%', height: '90%', color: '#D6D3D1' }} />
          </IconWrapper>
        </SocialLink>
        <SocialLink href={XUrl}>
          <IconWrapper>
            <RiTwitterLine style={{ width: '110%', height: '110%', color: '#D6D3D1' }} />
          </IconWrapper>
        </SocialLink>
        </SocialMediaWrapper>
      </DetailsWrapper>
    </CardWrapper>
  )
}

export default Card;