import styled from "@emotion/styled";

import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";


const DescriptionField = styled.div`
  height: 390px;
  width: 95%;
  grid-area: right;
  display: flex;
  flex-direction: column;
  justify-content: center;


  @media (min-width: 1480px) {
    width: 95%;
    height: 350px;
  }

  @media (max-width: 1250px) {
    width: 95%;
    height: 390px;
  }

  @media (max-width: 700px) {
    width: 450px;
    height: 500px;
    margin-bottom: 32px;
  }

  @media (max-width: 500px) {
    width: 310px;
    height: 500px;
    margin-bottom: 32px;
  }

  @media (max-width: 330px) {
    width: 300px;
    height: 570px;
    margin-bottom: 32px;
  }
`;

const AText = styled.p`
  color: ${colors.stone[300]};
  ${typography.head.lgx}
  margin: 32px 0 0 0;
  text-align: center;

  @media (max-width: 500px) {
    ${typography.head.md};
  }
`;

const BText = styled.p`
  ${typography.head.xs}
  color: ${colors.white};
  margin: 28px 40px 16px;
  text-align: center;
  font-weight: 500;

  @media (max-width: 500px) {
    ${typography.head.sm};
  }
`

function TextInDescription() {

  return (
    <DescriptionField>
      <AText>
      &#34;Hello world!&#34;
      </AText>
      <BText>
      I&#39;m <span style={{color: "#D1AE00", fontWeight: 600}}>Jorge</span> 
      , an independent full-stack web developer from México, building apps and online experiences for companies large and small.
      <br/>
      <br/>
      Ready to bring your next big idea to life.
      </BText>
    </DescriptionField>
  )
}

export default TextInDescription;