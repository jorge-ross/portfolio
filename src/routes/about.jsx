import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import Header from "../components/header";
import Footer from "../components/footer";
import profilePic from "../assets/images/av-9.jpg";
import imgGrid from "../assets/images/ab2.jpg";
import imgGridTwo from "../assets/images/intro-brain.jpg"
import imgGridThree from "../assets/images/ab4.jpg"
import imgGridFour from "../assets/images/a11.jpg"
import { typography } from "../styles/typography";
import { description } from "../components/data";

const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  height: auto;
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
  height: auto;
  width: 65%;
  margin: 8px 32px 32px;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 8px;

  // @media (max-width: 1420px) {
  //   grid-template-columns: repeat(3, 1fr);
  //   height: 100%;
  //   gap: 8px;
  //   margin: 0;
  // }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    height: 100%;
    gap: 8px;
    margin: 0 0 16px 0;
  }
`;

const GridItem = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
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

  @media (max-width: 500px) {
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
    margin: 0;
    width: auto;
    height: auto;
    max-width: 85%;
    max-height: 100%;
  }
`

const Image = styled.img`
  max-width: 75%;
  max-height: 90%;
  border-radius: 30%;
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
    margin: 0;
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
  justify-content: center;
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
  margin: 18px 0 0 0;
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
          After multiple courses, certifications, and seminars, I founded Neuro-dev in the room next to mine in the apartment where I lived.
          <br></br>
            <br></br>
          The excitement of having my first patients was quickly fulfilled, and my duties as a mental health professional began to expand.
          </Text>
        </TextField>
        <GridItem>
          <Image src={imgGrid} alt="" />
        </GridItem>
        <TextField>
          <Text>
            After a few years of experience, and thanks to my analytical and observational skills, I decided to specialize in Neuropsychology. I realized I needed a more solid approach, and what better way than from the trenches of science.
          <br></br>
          <br></br>
          During the course of my Master&#39;s, I had the opportunity to collaborate as a co-therapist at Neurovita, a psychology and neuropsychology center located in Valencia, Spain. Everything was going as it should; even better!
          </Text>
        </TextField>
        <GridItem>
        <Image src={imgGridTwo} alt="" />
        </GridItem>
        <TextField>
          <Text>
          <span style={{color: "#34D399", fontSize: 22}}>And then?</span>
            <br></br>
            <br></br>
          Facing each day with wide-open eyes is the key.
          <br></br>
            <br></br>
            Health contingencies, global metamorphosis, social mutations, and new international agendas led me to use my chameleon-like abilities and quickly adapt to the new daily whirlwind. However, contemplating the evolution of the world as a phenomenon helped me visualize <span style={{color: "#34D399", fontSize: 16}}>what I had always wanted to do</span>.
          </Text>
        </TextField>
        <GridItem>
        <Image src={imgGridThree} alt="" />
        </GridItem>
        <TextField>
          <Text>
          Everything was clear by then!
            <br></br>
            <br></br>
          Thus, the desire awoke; that inherent to human nature, which is responsible for motivating, enabling, mobilizing, that led me to rethink myself, both as a professional and as a human being. Then I knew that my journey had just begun.
          </Text>
        </TextField>
        <GridItem>
        <Image src={imgGridFour} alt="" />
        </GridItem>
        <TextField>
          <Text>
          During my training as a developer, I realized that coding pushed me beyond my comfort zone. It forced me to confront my limits, to persevere, and to continuously seek improvement. Through this journey, I discovered my resilience, creativity, and a profound sense of fulfillment that I had never experienced before.
          <br></br>
          <br></br>
          It&#39;s been a path of self-discovery.
          </Text>
        </TextField>
      </Container>
      <Footer />
    </GeneralContainer>
  )
}

export default About;