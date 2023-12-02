import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import Header from "../components/header";
import Footer from "../components/footer";
import profilePic from "../assets/images/av-9.jpg";
import imgFlag from "../assets/images/abimg2.png"
import imgMech from "../assets/images/mechatronics.jpg"
import { typography } from "../styles/typography";
import { description } from "../components/data";

const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

const TopContainer = styled.div`
  height: auto;
  width: 70%;
  margin: 32px 0 0 0;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 8px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    height: 100%;
    gap: 8px;
    margin: 0;
  }
`;

const Container = styled.div`
  height: 300px;
  width: 75%;
  margin: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    height: 100%;
    gap: 8px;
    margin: 0;
  }
`;

const GridItem = styled.div`
  height: 350px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px){
    width: 300px;
    height: 300px;
  }
`

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

  @media (max-width: 1000px) {
    height: 300px;
    margin: 28px 0 0 0;
  }
`;

const Img = styled.img`
  width: auto;
  height: auto;
  max-width: 85%;
  max-height: 90%;

  border-bottom-left-radius: 15%;
  border-bottom-right-radius: 30%;
  border-top-left-radius: 40%;
  border-bottom: 5px solid #34D399;
  filter: brightness(0.91);

  @media (max-width: 1000px) {
    margin: 0;
    width: auto;
    height: auto;
    max-width: 85%;
    max-height: 100%;
  }
`

const Image = styled.img`
  width: 300px;
  height: 200px;
  max-width: 85%;
  max-height: 90%;
  border-radius: 25%;

  @media (max-width: 1000px) {
    margin: 0;
    width: auto;
    height: auto;
    max-width: 85%;
    max-height: 100%;
  }
`

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;

  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 32px 0 16px 0;
  }

  @media (max-width: 560px) {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 0 16px 0;
  }

  @media (max-width: 470px) {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0;
  }
`;

const TopTextField = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const TextField = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  ${typography.head.lg};
  color: ${colors.green[400]};
  margin: 0;
`

const TopText = styled.p`
  ${typography.text.lg};
  color: ${colors.stone[300]};
  font-weight: 500;
  text-align: left;
`

const Text = styled.p`
  ${typography.text.md};
  color: ${colors.stone[300]};
`

function About() {

  return (
    <GeneralContainer>
      <Header />  
      <TopContainer>
        <ImgContainer>
          <Img src={profilePic} alt="JRoss"/>
        </ImgContainer>
        <TextContainer>
          <TopTextField>
            <Title style={{textAlign: "center"}}>
              Hi there! ✌️
            </Title>
            <TopText>
            {description[0].intro}
              <span style={{color: "#34D399"}}>Full Stack Web Developer</span>
            {description[0].gralDescription}
            <br></br>
            <br></br>
            </TopText>
          </TopTextField>
        </TextContainer>
      </TopContainer>
      <Container>
        <TextField>
          <Text>
          <span style={{color: "#34D399", fontSize: 22}}>How did I get here?</span>
            <br></br>
            <br></br>
          It all began when I decided to step away from engineering (ironically). I started my studies in psychology, and before I knew it, I had graduated.
          <br></br>
            <br></br>
          After multiple courses, certifications, and seminars, I set up my office in the second room of the apartment where I lived.
          <br></br>
            <br></br>
          The excitement of having my first patients was quickly fulfilled, and my duties as a mental health professional began to expand.
          </Text>
        </TextField>
      </Container>
      <Footer />
    </GeneralContainer>
  )
}

export default About;