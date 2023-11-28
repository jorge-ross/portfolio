import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

import illustration from "../../assets/images/a11.jpg"

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  grid-template-rows: auto;
  grid-template-areas: "left right";
  justify-content: center;
  align-items: center;
  padding:24px 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 75%;
    height: 1px;
    background-color: #A8A29E;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 75%;
    height: 1px;
    background-color: #A8A29E;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "right"
      "left";

    &::before,
    &::after {
      display: none;
    }
  }
`

const Text = styled.div`
  ${typography.text.md};
  color: ${colors.stone[400]};
  grid-area: left;
  width: 600px;
  height: auto;

  @media (max-width: 1000px) {
    width: auto;
    padding: 16px 88px;
  }
`

const Illustration = styled.img`
  height: 210px;
  width: 210px;
  border-radius: 16px;

  @media (max-width: 1000px) {
    margin: 0 auto;
    height: 250px;
    width: 250px;
  }

  @media (max-width: 470px) {
    margin: 0 auto;
    height: 180px;
    width: 180px;
  }
`

function HomeDescription() {
  return (
    <DescriptionContainer>
      <Text>
      Motivated by a profound fascination for science, computing, and its boundless potential as a comprehensive field of study, I realized that the tech industry held the key to transform lives.<br></br> <br></br>

      Walking this path has become a great opportunity to combine my understanding of the human mind, as a former neuropsychology specialist, with cutting-edge technologies, knowing that this fusion could unlock new horizons of empowerment. This is the calling to be at the forefront of innovation, to create solutions that could reach far beyond the confines of a therapist&apos;s office. <br></br> <br></br>

      That being said, I am determined to collaborate with like-minded professionals who share the same passion for leveraging technology to make a tangible difference in people&apos;s lives.
      </Text>
      <Illustration src={illustration} alt="psicprog"/>
    </DescriptionContainer>
  )
}

export default HomeDescription;