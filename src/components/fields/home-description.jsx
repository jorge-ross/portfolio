import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";


const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  position: relative;
  width: 80%;
  gap: 3rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const Text = styled.div`
  ${typography.text.md};
  color: ${colors.stone[300]};
  height: auto;
  width: 400px;
  font-weight: 500;

  @media (max-width: 1000px) {
    width: auto;
    padding: 16px 88px;
  }
`

function HomeDescription() {
  return (
    <DescriptionContainer>
      <Text>
      Motivated by a profound fascination for science, computing, and its boundless potential as a comprehensive field of study, I realized that the tech industry held the key to transform lives.<br></br> <br></br>

      Walking this path has become a great opportunity to combine my understanding of the human mind, as a former neuropsychology specialist, with cutting-edge technologies, knowing that this fusion could unlock new horizons of empowerment. 
      This is the calling to be at the forefront of innovation, to create solutions that could reach far beyond the confines of a therapist&apos;s office. <br></br> <br></br>
      </Text>
      <Text>
      That being said, I am determined to collaborate with like-minded professionals who share the same passion for leveraging technology to make a tangible difference in people&apos;s lives.
      </Text>

    </DescriptionContainer>
  )
}

export default HomeDescription;