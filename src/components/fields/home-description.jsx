import styled from "@emotion/styled";
import { typography } from "../../styles/typography";


const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  width: 80%;
  gap: 3rem;
  padding: 5rem 0;
  border-bottom: 1px solid #A8A29E;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 4rem 0;
  }
`

const Text = styled.div`
  ${typography.text.md};
  color: white;
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