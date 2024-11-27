import styled from "@emotion/styled";
import mypic from "../../public/images/Developer.jpg"
import Card from "./card";

import { typography } from "../styles/typography";
import { colors } from "../styles/colors";

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

const IntroContainer = styled.div`
  width: 80%;
  border-bottom: 1px solid #A8A29E;
  display: flex;
  justify-content: center;
`;

const InsideIntro = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  gap: 6rem;
  padding: 5rem 0;

  @media (max-width: 1000px) {
    gap: 2.5rem;
    display: flex;
    flex-direction: column;
    padding: 4rem 0;
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 90%;
    gap: 1.5rem;
  }
`

const Intro = () => {

  return (
    <IntroContainer>
      <InsideIntro>
      <Card 
      gitHubUrl="https://github.com/jorge-ross"
      linkedInUrl="https://www.linkedin.com/in/jorgeros13"
      img={mypic}
      />
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
      </InsideIntro>
    </IntroContainer>
  )
}

export default Intro;