import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const ContainerFooter = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  border-top: 1px solid #A8A29E;
`

const ZContainer = styled.div`
  ${typography.text.lg}
  color: ${colors.stone[200]};
  font-weight: 500;
  margin: 0;
  padding: 3rem 0;
  text-align: left;

  @media (max-width: 500px) {
    padding: 0;
  }
`

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

const OutlineText = styled.p`
  ${typography.text.md}
  color: ${colors.stone[100]};
  margin: 0;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    color: ${colors.yellow[500]};
  }

`

function Footer() {

  return (
    <ContainerFooter>
      <ZContainer>
        <AText>
        Let&#39;s chat!
        </AText>
        
        <Text>
          Need a full-stack developer to help out? <br/>
        </Text>
        <OutlineText>
          Send me an email
        </OutlineText>
      </ZContainer>
    </ContainerFooter>
  )
}

export default Footer;