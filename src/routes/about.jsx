import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import Header from "../components/header";
import Footer from "../components/footer";
import profilePic from "../assets/images/av-9.jpg";
import { typography } from "../styles/typography";
import { description } from "../components/data";

const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 1px;
  grid-template-areas: "left right";

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "left"
      "right";
    height: 100%;
    gap: 8px;
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
    height: 200px;
    margin: 28px 0 0 0;
  }
`;

const Img = styled.img`
  width: auto;
  height: auto;
  max-width: 80%;
  max-height: 85%;

  border-bottom-left-radius: 15%;
  border-bottom-right-radius: 30%;
  border-top-left-radius: 40%;
  border-bottom: 5px solid #34D399;
  grid-area: left;
  position: absolute; 
  right: 0;
  filter: brightness(0.91);

  @media (max-width: 1000px) {
    position: static;
    margin: 0 auto;
    width: auto;
    height: auto;
    max-width: 85%;
    max-height: 100%;
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
    height: 750px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px 0;
  }

  @media (max-width: 530px) {
    width: 100%;
    height: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 16px 0;
  }

  @media (max-width: 400px) {
    width: 100%;
    height: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

const TextField = styled.div`
  width: 70%;
  grid-area: right;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
`;

const Title = styled.h1`
  ${typography.head.md};
  color: ${colors.green[400]};
  margin: 0;
`

const Text = styled.p`
  ${typography.text.md};
  color: ${colors.stone[300]};
`

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
            <span style={{color: "#34D399"}}>Full Stack Web Developer</span>
          {description[0].gralDescription}
          </Text>
          <Text>
          {description[0].ironic}
          </Text>
          <Text>
          {description[0].explanation}
          </Text>
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
        </TextField>
        </TextContainer>
      </Container>      
      <Footer />
    </GeneralContainer>
  )
}

export default About;