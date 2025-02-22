import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";

const ContainerFooter = styled.div`
  width: 80%;
  padding: 5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const MediaIcons = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  align-items: center;
  gap: 2rem;
  margin: 0;
  color: white;
 
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }

  @media (max-width: 600px) {
    gap: 1.5rem;
  }
`

const SocialListItem = styled.li`
  margin: 0;

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .5rem;
`;


const SocialLinkText = styled.p`
  ${typography.text.md}
  color: white;
  margin: 0;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    display: none;
  }
`

function DetailFooter() {

  return (
    <ContainerFooter>
        <MediaIcons>
        <SocialListItem>
          <SocialLink href="https://github.com/jorge-ross" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            <SocialLinkText>GitHub</SocialLinkText>
          </SocialLink>
        </SocialListItem>
        <SocialListItem>
          <SocialLink href="https://www.linkedin.com/in/jorgeros13" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            <SocialLinkText>LinkedIn</SocialLinkText>
          </SocialLink>
        </SocialListItem>
        <SocialListItem>
          <SocialLink href="https://www.instagram.com/_jorgeross" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            <SocialLinkText>Instagram</SocialLinkText>
          </SocialLink>
        </SocialListItem>
        
        <SocialListItem>
          <SocialLink href="https://x.com/jorg_ros" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter />
            <SocialLinkText>X</SocialLinkText>
          </SocialLink>
        </SocialListItem>
        </MediaIcons>
        
    </ContainerFooter>
  )
}

export default DetailFooter;