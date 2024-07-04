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
  padding: 4rem 0 5rem;
  text-align: left;

  @media (max-width: 800px) {
    padding: 4rem 0 0 0;
  }
`

const MediaIcons = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, auto);
  padding: 0;
  align-items: center;
  gap: 4rem;
  margin: 0;
  color: white;

  @media (max-width: 800px) {
    padding: 0 0 5rem 0;
    gap: 2rem;
    grid-template-columns: repeat(1, auto);
    align-items: flex-start;
  }
`

const SocialListItem = styled.li`
  margin: 0;
`;

const SocialLink = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 2.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .5rem;

   @media (max-width: 800px) {
    font-size: 2rem;
  }
`;

const AText = styled.p`
  color: ${colors.stone[300]};
  ${typography.head.lg};
  margin: 0;
`

const Text = styled.p`
  ${typography.text.md}
  color: ${colors.stone[100]};
  margin: .5rem 0;
  font-weight: 400;
`

const FFText = styled.p`
  ${typography.text.md}
  color: ${colors.stone[100]};
  margin: .5rem 0;
  font-weight: 400;
  text-align: right;

  @media (max-width: 800px) {
    text-align: left;
  }
`

const SocialLinkText = styled.p`
  ${typography.text.md}
  color: white;
  margin: 0;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    ${typography.text.sm}
  }
`

const OutlineText = styled.p`
  ${typography.text.md}
  color: ${colors.stone[100]};
  margin: 0;
  }
`

const MailText = styled.span`
  ${typography.text.md}
 color: ${colors.yellow[300]};
  margin: 0;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const EmailLink = styled.a`
  text-decoration: none;
`;

function Footer() {

  return (
    <ContainerFooter>
      <ZContainer>
        <AText>
        Let&#39;s chat! <br/><br/>
        </AText>
        <Text>
          Need a full-stack developer to help out? <br/>
        </Text>
        <OutlineText>
        <EmailLink href="mailto:jorg.ross@protonmail.com">
          <MailText>
            Send me an email
          </MailText>
        </EmailLink>
          &nbsp;and see how we can make a positive impact together! <br/><br/>
        </OutlineText>
        <FFText>
          Find me on these online spaces! →<br/>
        </FFText>
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

export default Footer;