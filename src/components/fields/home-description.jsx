import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px;
  grid-template-rows: auto;
  grid-template-areas: "left right";

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "left"
      "right";
    height: 100%
  }
`

const Text = styled.div`
  color: ${colors.stone[400]};
  grid-area: left;
  width: 400px;
`

const TextTest = styled.div`
  color: ${colors.stone[400]};
  grid-area: right;
`

function HomeDescription() {
  return (
    <DescriptionContainer>
      <Text>
        Hola Mundo
      </Text>
      <TextTest>
        Hola 2
      </TextTest>
    </DescriptionContainer>
  )
}

export default HomeDescription;