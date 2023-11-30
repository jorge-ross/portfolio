import styled from "@emotion/styled";
import { typography, typography2 } from "../styles/typography";
import { colors } from "../styles/colors";
import PropTypes from 'prop-types';

export const ContactButton = styled.button`
  ${typography.head.xs}
  background-color: ${colors.blue[700]};
  color: white;
  border: none;
  border-radius: 16px;
  height: 48px;
  width: 148px;
  align-self: center;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.07);
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`
const LinkedInLink = ({ profileURL }) => {
  LinkedInLink.propTypes = {    
    profileURL: PropTypes.string,
  }

  return (
    <a href={profileURL} target="_blank" rel="noopener noreferrer">
      <ContactButton>Contact Me</ContactButton>
    </a>
  );
};

export default LinkedInLink;

export const FooterButton = styled.button`
  ${typography.text.xl}
  background-color: ${colors.blue[700]};
  color: white;
  border: none;
  border-radius: 36px;
  height: 64px;
  padding: 16px;
  align-items: center;
  cursor: pointer;
`

export const RepoButton = styled.button`
  ${typography2.head.xss}
  background-color: ${colors.green[600]};
  color: white;
  border: none;
  border-radius: 12px;
  height: 64px;
  width: 200px;
  padding: 16px;
  align-items: center;
  cursor: pointer;
`