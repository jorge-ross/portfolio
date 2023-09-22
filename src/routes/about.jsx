import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import Header from "../components/header";
import Footer from "../components/footer";
import profilePic from "../assets/images/av-9.jpg";
import brain from "../assets/images/brain1.jpg";
import { typography } from "../styles/typography";
import { description } from "../components/data";

const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  background-color: ${colors.black[500]}
`;

const Container = styled.div`
  height: 400px;
  width: 100%;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 1px;
  grid-template-areas: "left right";

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "right"
      "left";
    height: 100%;
    gap: 16px;
    margin: 0;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: relative;
  grid-area: left;

  @media (max-width: 1000px) {
    height: 300px;
  }
`;

const Img = styled.img`
  width: auto;
  height: auto;
  max-width: 70%;
  max-height: 75%;

  border-bottom-left-radius: 15%;
  border-bottom-right-radius: 30%;
  border-top-left-radius: 40%;
  border-bottom: 4px solid #60A5FA;
  grid-area: left;
  position: absolute; 
  right: 0;
  filter: brightness(0.91);

  @media (max-width: 1000px) {
    position: static;
    margin: 0 auto;
    width: auto;
    height: auto;
    max-width: 70%;
    max-height: 85%;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: relative;
  grid-area: right;

  @media (max-width: 1000px) {
    width: 100%;
    height: 290px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
  }

  @media (max-width: 530px) {
    width: 100%;
    height: 370px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
  }
`;

const TextField = styled.div`
  height: 350px;
  width: 70%;
  grid-area: right;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  text-align: justify;
`;

const Title = styled.h1`
  ${typography.head.md};
  color: ${colors.yellow[400]};
  margin: 32px 0 0 0;
`

const Text = styled.p`
  ${typography.text.md};
  color: ${colors.stone[300]};
`

const ImgTwoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 16px 0;
  position: relative;
  grid-area: right;

  @media (max-width: 1000px) {
    height: 150px;
    grid-area: left;
    display: flex;
    justify-content: center;
  }
`;

const ImgTwo = styled.img`
  width: 300px;
  height: 290px;
  border-radius: 16%;
  grid-area: right;
  box-shadow: 0 0 15px 2px rgba(0, 255, 250, 1);
  filter: grayscale(40%);

  @media (max-width: 1000px) {
    position: static;
    margin: 0 auto;
    width: 100px;
    height: 100px;
  }
`

const TextTwoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  position: relative;
  grid-area: left;

  @media (max-width: 1000px) {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px 0 0 0;
    grid-area: right;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 470px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
  }
`;

const TextTwoField = styled.div`
  height: 350px;
  width: 90%;
  grid-area: right;
  border-radius: 50px;
  text-align: justify;
  position: absolute; 
  right: 0;

  @media (max-width: 1000px) {
    width: 70%;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;

function About() {

  return (
    <GeneralContainer>
    <Header />  
      <Container>
        <ImgContainer>
        <Img src={profilePic} alt="JRoss"/>
        </ImgContainer>
        <TextContainer>
        <TextField>
          <Title style={{textAlign: "center"}}>
            Hi there! ✌️
          </Title>
          <Text>
          {description[0].intro}
            <span style={{color: "#FBBF24"}}>Full Stack Web Developer</span>
          {description[0].gralDescription}
          </Text>
          <Text>
          {description[0].ironic}
          </Text>
          <Text>
          {description[0].explanation}
          </Text>
        </TextField>
        </TextContainer>
      </Container>

      <Container>
        <TextTwoContainer>
          <TextTwoField>
          <Text>
            {description[0].continuous}
          </Text>
          <Text>
            {description[0].brp}
          </Text>
          <Text>
            {description[0].det}
          </Text>
          <Text>
            <a href="https://www.linkedin.com/in/jorgeros13" 
            style={{textDecoration: "none"}}>
            <span style={{color: "#FBBF24"}} >Connect</span>
            </a>
            {description[0].con}
          </Text>
          </TextTwoField>
          </TextTwoContainer>
          <ImgTwoContainer>
            <ImgTwo src={brain} alt="brain"/>
          </ImgTwoContainer>
      </Container>       
    <Footer />
    </GeneralContainer>
  )
}

export default About;