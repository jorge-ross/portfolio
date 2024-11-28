import styled from "@emotion/styled";
import { AiOutlineGithub } from 'react-icons/ai';
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
  text-align: center;

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

function MemberCard({ name, gitHubUrl, profilePicUrl }) {
  MemberCard.propTypes = {
    name: PropTypes.string,
    gitHubUrl: PropTypes.string,
    profilePicUrl: PropTypes.string,
  }

  const truncName = name.length > 15 ? name.split(' ')[0] : name;

  return (
    <CardWrapper>
      <ImgCont>
        <Img src={profilePicUrl} alt="Team member" />
      </ImgCont>
      <DetailsWrapper>
        <MemberName>{truncName}</MemberName>
        <MediaWrapper>
          <a href={gitHubUrl}> <AiOutlineGithub style={{width: "20px", height: "20px", color: "white", borderRadius: "50%"}}
          /> </a>
        </MediaWrapper>
      </DetailsWrapper>
    </CardWrapper>
  )
}

export default MemberCard;