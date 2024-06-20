import styled from "@emotion/styled";
import { AiOutlineGithub } from 'react-icons/ai';
import { typography2 } from "../styles/typography";
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: 850px) {
   justify-content: center;
   gap: 2.5rem;
  }

   @media (max-width: 500px) {
   gap: 2rem;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
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
  align-items: center;
  justify-content: center;

  @media (max-width: 850px) {
   width: 30%;
  }

   @media (max-width: 500px) {
   width: 40%;
  }
`

const Img = styled.img`
  width: 100%;
  border-radius: 20%;
`

function MemberCard({ name, gitHubUrl, profilePicUrl }) {
  MemberCard.propTypes = {
    name: PropTypes.string,
    gitHubUrl: PropTypes.string,
    profilePicUrl: PropTypes.string,
  }

  return (
    <CardWrapper>
      <ImgCont>
        <Img src={profilePicUrl} alt="Team member" />
      </ImgCont>
      <DetailsWrapper>
        <MemberName>{name}</MemberName>
          <a href={gitHubUrl}> <AiOutlineGithub style={{width: "20px", height: "20px", color: "white", borderRadius: "50%"}}
          className="fluorescent"
          /> </a>
      </DetailsWrapper>
    </CardWrapper>
  )
}

export default MemberCard;