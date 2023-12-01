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
  align-items: center;
  margin: 0;
`;

const Container = styled.div`
  height: 100%;
  width: 80%;
  margin: 32px auto;
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
`

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 300px;
  width: 300px;

  @media (max-width: 1000px) {
    height: 200px;
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

  @media (max-width: 1000px) {
    width: 100%;
    height: 750px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 32px 0 16px 0;
  }

  @media (max-width: 560px) {
    width: 100%;
    height: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 16px 0;
  }

  @media (max-width: 470px) {
    width: 100%;
    height: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

const TextField = styled.div`
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
        <GridItem>
          <TextField>
            <Title style={{textAlign: "center"}}>
              Hi there! ✌️
            </Title>
            <Text>
            {description[0].intro}
              <span style={{color: "#34D399"}}>Full Stack Web Developer</span>
            {description[0].gralDescription}
            </Text>
          </TextField>
        </GridItem>
        </TextContainer>
        <GridItem>3
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