import styled from "@emotion/styled";
import { AiOutlineGithub } from 'react-icons/ai';
import { typography2 } from "../styles/typography";
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 16px;
`;

const MemberName = styled.p`
  ${typography2.head.xs}
  font-weight: 400;
  color: white;
  margin: 0;
`

const Img = styled.img`
  width: 90px;
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
          <a href={gitHubUrl}> <AiOutlineGithub style={{width: "35px", height: "35px", color: "white", borderRadius: "50%"}}
          className="fluorescent"
          /> </a>
      </DetailsWrapper>
    </CardWrapper>
  )
}

export default MemberCard;