import styled from "@emotion/styled";
import img from "/images/Developer.png"

import { typography } from "../styles/typography";
import { colors } from "../styles/colors";

const DescriptionField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  padding-bottom: 1rem;
`

const Img = styled.img`
  width: 280px;
  border-radius: 50%;

  @media (max-width: 600px) {
    width: 250px;
  }

  @media (max-width: 350px) {
    width: 180px;
  }
`

const AText = styled.p`
  ${typography.head.lgx};
  color: white;
  margin: 0;
  padding-top: 1rem;
  text-align: center;

   @media (max-width: 1000px) {
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
  text-align: center;

   @media (max-width: 1000px) {
    ${typography.text.lgx};
    padding-bottom: 0;
  }
`

const CText = styled.p`
  ${typography.head.lg};
  color: ${colors.blue[300]};
  margin: 0;
  padding-top: 2rem;
  text-align: center;

   @media (max-width: 1000px) {
   ${typography.text.xl};
   font-weight: 400;
  }
`;

const IntroContainer = styled.div`
  border-bottom: 1px solid #A8A29E;
  display: flex;
  justify-content: center;
  width: 80%;
`;

const Intro = styled.div`
  display: flex;
  padding: 4rem 0;
  gap: 5rem;
  width: 85%;

  @media (max-width: 1000px) {
    gap: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 500px) {
    gap: 1.5rem;
  }
`

const Introduction = () => {

  return (
    <IntroContainer>
      <Intro>
        <ImgContainer>
          <Img src={img} alt="JRoss" />
        </ImgContainer>
        <DescriptionField>
          <AText>
            &#34;Hello, World!&#34;
          </AText>
          <BText>
            I&#39;m <span style={{ color: "#93C5FD", fontWeight: 600 }}>Jorge</span>
            , an independent full-stack web developer from México,
            designing and developing apps for different types of clients,
            ranging from small businesses to growing companies.
            <br />
          </BText>
          <CText>
            Ready to bring your next big idea to life!
          </CText>
        </DescriptionField>
      </Intro>
    </IntroContainer>
  )
}

export default Introduction;