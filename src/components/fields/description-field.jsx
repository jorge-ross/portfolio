import styled from "@emotion/styled";
import { typography } from "../../styles/typography";
import { colors } from "../../styles/colors";

const DescriptionField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AText = styled.p`
  ${typography.head.lgx};
  color: white;
  margin: 0;
  padding-top: 1rem;

   @media (max-width: 1100px) {
   text-align: center;
   ${typography.head.lg};
  }

  @media (max-width: 500px) {
    ${typography.head.md};
    
  }
`;

const BText = styled.p`
  ${typography.text.xl}
  color: white;
  margin: 0;
  padding: 2rem 0;

   @media (max-width: 1100px) {
    ${typography.text.lgx};
    padding-bottom: 0;
  }
`

const CText = styled.p`
  ${typography.head.lg};
  color: ${colors.blue[300]};
  margin: 0;
  padding-top: 2rem;

   @media (max-width: 1100px) {
   ${typography.text.xl};
   font-weight: 400;
  }
`;

function TextInDescription() {

  return (
    <DescriptionField>
      <AText>
      &#34;Hello world!&#34;
      </AText>
      <BText>
      I&#39;m <span style={{color: "#93C5FD", fontWeight: 600}}>Jorge</span> 
      , an independent full-stack web developer from México,
      designing and developing apps for different types of clients, 
      ranging from small businesses to growing companies. 
      <br/>
      </BText>
      <CText>
      Ready to bring your next big idea to life!
      </CText>
      

    </DescriptionField>
  )
}

export default TextInDescription;