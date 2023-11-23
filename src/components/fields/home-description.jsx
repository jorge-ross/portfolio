import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px;
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
    width: 85%;
    height: 1px;
    background-color: #A8A29E;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    height: 1px;
    background-color: #A8A29E;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "left"
      "right";
    height: 400px;
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
    height: 200px;
    border-top: 1px solid #A8A29E;
  }
`

const TextTest = styled.div`
  color: ${colors.stone[400]};
  grid-area: right;
`

function HomeDescription() {
  return (
    <DescriptionContainer>
      <Text>
      Motivated by a profound fascination for science, computing, and its boundless potential as a comprehensive field of study, I realized that the tech industry held the key to transform lives. 

      Walking this path has become a great opportunity to combine my understanding of the human mind, as a former neuropsychology specialist, with cutting-edge technologies, knowing that this fusion could unlock new horizons of empowerment.

      Not only was this decision to transition into tech a career move, it was also a calling to be at the forefront of innovation, to create solutions that could reach far beyond the confines of a therapist&apos;s office.

      That being said, I am determined to collaborate with like-minded professionals who share the same passion for leveraging technology to make a tangible difference in people&apos;s lives.
      </Text>
      <TextTest>
        Hola 2
      </TextTest>
    </DescriptionContainer>
  )
}

export default HomeDescription;