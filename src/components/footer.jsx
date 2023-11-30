import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const ContainerFooter = styled.div`
  background-image: url('/src/assets/images/nn.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #A8A29E;
`

const ZContainer = styled.div`
  ${typography.text.lg}
  color: ${colors.stone[200]};
  font-weight: 500;
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
        Powered with ❤️ by <span style={{color: "#FBBF24", fontWeight: 500, fontSize: 19}}> Jorge Rosano </span>
        <YearText>
          2023
        </YearText>
      </ZContainer>
    </ContainerFooter>
  )
}

export default Footer;