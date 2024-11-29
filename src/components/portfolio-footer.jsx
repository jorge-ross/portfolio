import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";

const ContainerFooter = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  border-top: 1px solid #A8A29E;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`

const ZContainer = styled.div`
  ${typography.text.lg}
  color: ${colors.stone[200]};
  font-weight: 500;
  margin: 0;
  padding: 3rem 0;
  text-align: left;

  @media (max-width: 800px) {
    padding: 4rem 0 0 0;
  }
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

  @media (max-width: 800px) {
    padding: 0 0 5rem 0;
  }
  
  @media (max-width: 550px) {
    display: grid;
    grid-template-columns: repeat(1, auto);
    align-items: center;
    justify-content: center;
  }
`

const SocialListItem = styled.li`
  margin: 0;

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
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

const AText = styled.p`
  color: ${colors.stone[300]};
  ${typography.head.lg};
  margin: 0;

  @media (max-width: 550px){
    ${typography.head.md};
    text-align: left;
  }
`

const Text = styled.p`
  ${typography.text.md}
  color: ${colors.stone[100]};
  margin: .5rem 0;
  font-weight: 400;
`


const SocialLinkText = styled.p`
  ${typography.text.md}
  color: white;
  margin: 0;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`

function PortFooter() {

  return (
    <ContainerFooter>
      <ZContainer>
        <AText>
        Jorge Rosano <br/><br/>
        </AText>
        <Text>
        An independent web developer from Mexico. <br/>
        </Text>
      </ZContainer>
  
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

export default PortFooter;