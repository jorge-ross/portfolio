import styled from "@emotion/styled";
import { AiOutlineGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { typography2 } from "../styles/typography";
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1rem;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const MemberName = styled.p`
  ${typography2.text.md};
  font-weight: 600;
  color: white;
  margin: 0;

  @media (max-width: 500px) {
   ${typography2.text.sm};
  }
`

const ImgCont = styled.div`
  display: flex;
  width: 130px;

   @media (max-width: 750px) {
    width: 110px;
  }
`

const Img = styled.img`
  width: 100%;
  border-radius: 20%;
`

const MediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
`

function MemberCard({ name, gitHubUrl, linkedInUrl, profilePicUrl }) {
  MemberCard.propTypes = {
    name: PropTypes.string,
    gitHubUrl: PropTypes.string,
    linkedInUrl: PropTypes.string,
    profilePicUrl: PropTypes.string,
  }

  return (
    <CardWrapper>
      <ImgCont>
        <Img src={profilePicUrl} alt="Team member" />
      </ImgCont>
      <DetailsWrapper>
        <MemberName>{name}</MemberName>
        <MediaWrapper>
          <a href={gitHubUrl}> <AiOutlineGithub style={{width: "20px", height: "20px", color: "white", borderRadius: "50%"}}
          /> </a>
          <a href={linkedInUrl}>
           <BsLinkedin style={{ width: "18px", height: "18px", color: '#D6D3D1' }} />
          </a>
        </MediaWrapper>
      </DetailsWrapper>
    </CardWrapper>
  )
}

export default MemberCard;