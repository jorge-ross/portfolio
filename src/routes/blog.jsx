import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import Header from "../components/header";
import Footer from "../components/footer";
import underConstruction from "../assets/images/uc4.png"
import { typography2 } from "../styles/typography";

const Container = styled.div`
  width: 100%;
  height: 1000px;
`

const QContainer = styled.div`
  background-color: ${colors.black[300]};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 520px;
  width: 100%;
`

const Img = styled.img`
  width: 700px;
  height: 450px;

  @media (max-width: 1000px) {
    width: 300px;
    height: 180px;
  }
`

const TempText = styled.p`
  ${typography2.head.lg};
  font-weight: 500;
  color: ${colors.yellow[300]};
  margin-bottom: 64px;

  @media (max-width: 1000px) {
    ${typography2.head.md};
    margin: 16px 16px 24px;
    text-align: center;
  }
`

function BlogPage() {

  return (
    <Container>
      <Header />
      <QContainer>
        <ImgContainer>
        <TempText>
          Under construction
        </TempText>
        <Img src={underConstruction} alt="tempImg"/>
        </ImgContainer>
      </QContainer>
      <Footer />
    </Container>
  )
}

export default BlogPage;