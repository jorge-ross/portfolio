import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const ContainerFooter = styled.div`
  background-color: ${colors.black[900]};
  width: 100%;
  height: 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #60A5FA;
`

const ZContainer = styled.div`
  ${typography.text.md}
  color: ${colors.stone[100]};
  margin: 0;
  padding-left: 24px;
  text-align: left;

  @media (max-width: 500px) {
    padding: 0;
  }
`
const YearText = styled.p`
  ${typography.text.sm}
  color: ${colors.stone[100]};
  margin: 0;
  text-align: center;
  font-weight: 400;
  padding-top: 8px;
`

function Footer() {

  return (
    <ContainerFooter>
      <ZContainer>
        Powered with ❤️ by <span style={{color: "#5dc1b9", fontWeight: 700}}> Jorge Rosano </span>
        <YearText>
          2023
        </YearText>
      </ZContainer>
    </ContainerFooter>
  )
}

export default Footer;