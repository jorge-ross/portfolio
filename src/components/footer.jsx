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

const SocialLinkText = styled.p`
  ${typography.text.md}
  color: white;
  margin: 0;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
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
  color: ${colors.stone[100]};
  margin: 0;
  text-decoration: underline;

  &:hover {
    color: ${colors.yellow[400]};
    cursor: pointer;
  }
`

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
          <MailText>
          Send me an email
          </MailText>
          &nbsp;and see how we can make a positive impact together!
        </OutlineText>
      </ZContainer>
  
        <MediaIcons>
        <SocialListItem>
          <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <SocialLinkText>Instagram</SocialLinkText>
            <FaInstagram />
          </SocialLink>
        </SocialListItem>
        <SocialListItem>
          <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
            <SocialLinkText>GitHub</SocialLinkText>
            <FaGithub />
          </SocialLink>
        </SocialListItem>
        <SocialListItem>
          <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <SocialLinkText>LinkedIn</SocialLinkText>
            <FaLinkedin />
          </SocialLink>
        </SocialListItem>
        <SocialListItem>
          <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <SocialLinkText>X</SocialLinkText>
            <FaSquareXTwitter />
          </SocialLink>
        </SocialListItem>
        </MediaIcons>

    </ContainerFooter>
  )
}

export default Footer;