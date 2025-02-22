import styled from "@emotion/styled";
import { typography } from "../styles/typography";

const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 3rem;
  padding: 5rem 0;
  border-top: 1px solid #A8A29E;

  @media (max-width: 1000px) {
    gap: 2.5rem;
    padding: 4rem 0;
  }
`

const AText = styled.p`
  color: white;
  ${typography.head.lgx};
  margin: 0;
  padding-left: 6rem;

  @media (max-width: 1100px) {
   ${typography.head.lg};
    padding: 0;
  }

  @media (max-width: 600px) {
    ${typography.head.md};
  }
`;

const BText = styled.p`
  ${typography.text.lg}
  color: white;
  margin: 0;
  width: 60%;
  padding-left: 6rem;

  @media (max-width: 1100px) {
    ${typography.text.lgx}
    padding: 0;
    width: 80%;
  }

  @media (max-width: 600px) {
    ${typography.text.md};
    padding: 0;
    width: 100%;
  }
`

function Statement() {
  return (
    <Container>
      <AText>
        Why work with me?
      </AText>
      <BText>
        Being a
        <span style={{ color: "#93C5FD", fontWeight: 600 }}> Web Developer</span> has enabled me
        to cultivate the exceptional ability to solve problems.
        I enjoy breaking down complex ideas and
        figuring out how to build them.<br /><br />

        I&#39;ve worked independently on various projects,
        which has made me agile and quick to adapt.
        Likewise, I&#39;ve launched projects that needed to work
        flawlessly from day one, so I understand the importance
        of reliability and performance.<br /><br />

        Finally, I&#39;m a great communicator and collaborator,
        and I know that what&#39;s most important is getting the job
        done well and on time.
      </BText>
    </Container>
  )

}

export default Statement;