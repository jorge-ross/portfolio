import styled from "@emotion/styled";
import { AiOutlineGithub } from 'react-icons/ai';
import { typography2 } from "../styles/typography";
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 250px;
  justify-content: center;
  align-items: center;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const MemberName = styled.p`
  ${typography2.head.xs}
  font-weight: 400;
  color: #BF5F82;
  margin: 0;
  text-align: center;
`

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;

const Img = styled.img`
  width: 90px;
  height: 90px;
  flex-shrink: 0;
  border-radius: 50%;
`

function MemberCard({ name, gitHubUrl, profilePicUrl }) {
  MemberCard.propTypes = {
    name: PropTypes.string,
    gitHubUrl: PropTypes.string,
    profilePicUrl: PropTypes.string,
  }

  return (
    <CardWrapper>
      <Img src={profilePicUrl} alt="Team member" />
      <DetailsWrapper>
        <MemberName>{name}</MemberName>
        <SocialMediaWrapper>
          <a href={gitHubUrl}> <AiOutlineGithub style={{width: "35px", height: "35px", color: "#A8A29E", borderRadius: "50%"}}
          className="fluorescent"
          /> </a>
        </SocialMediaWrapper>
      </DetailsWrapper>
    </CardWrapper>
  )
}

export default MemberCard;