import styled from "@emotion/styled";

import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";


const DescriptionField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;


  @media (max-width: 500px) {
    width: auto;
    height: auto;
  }
`;

const AText = styled.p`
  color: ${colors.stone[300]};
  ${typography.head.lgx}
  margin: 0;
  padding: 2rem 0 0 0;

  @media (max-width: 500px) {
    ${typography.head.md};
  }
`;

const BText = styled.p`
  ${typography.head.xs}
  color: white;
  font-weight: 400;
  margin: 0;
  padding: 2rem 0;

   @media (max-width: 1000px) {
    ${typography.text.lg};
  }
`

const CText = styled.p`
  ${typography.head.xs}
  color: white;
  font-weight: 400;
  margin: 0;
  text-align: center;
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
      </BText>
      <CText>
      Ready to bring your next big idea to life!
      </CText>
    </DescriptionField>
  )
}

export default TextInDescription;