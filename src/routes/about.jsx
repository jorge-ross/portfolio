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

const Container = styled.div`
  height: 100%;
  width: 100%;
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
  width: 350px;
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
  max-width: 75%;
  max-height: 80%;

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
  width: auto;
  height: auto;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: relative;

  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 32px 0 16px 0;
  }

  @media (max-width: 560px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 16px 0;
  }

  @media (max-width: 470px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

const TextField = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
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
        <GridItem>
          <TextField>
            <Title style={{textAlign: "center"}}>
              Hi there! ✌️
            </Title>
            <Text>
            {description[0].intro}
              <span style={{color: "#34D399"}}>Full Stack Web Developer</span>
            {description[0].gralDescription}
            <br></br>
            <br></br>
            <span style={{color: "#34D399"}}>How did I get here?</span>
            <br></br>
            <br></br>
            It all began when I decided to step away from engineering (ironically). I started my studies in psychology, and before I knew it, I had graduated.
            </Text>
          </TextField>
        </GridItem>
        </TextContainer>
        <GridItem>
          <Image src={imgMech} alt=""/>
        </GridItem>
        <GridItem>4
        </GridItem>
        <GridItem>5
        </GridItem>
        <GridItem>5
        </GridItem>
        <GridItem>5
        </GridItem>
        <GridItem>5
        </GridItem>
      </Container>      
      <Footer />
    </GeneralContainer>
  )
}

export default About;