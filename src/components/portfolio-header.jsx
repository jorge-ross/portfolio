import styled from "@emotion/styled";
import '../styles/styles.css'; 

import { typography2 } from "../styles/typography";
import { colors } from "../styles/colors";
import LinkedInLink from "./button";
import { Link } from "react-router-dom";



const NavBarContainer = styled.div`
  display: flex;
  width: 80%;
  height: 10rem;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 1px solid white;

  @media (max-width: 900px) {
    ${typography2.head.sm};
    justify-content: center;
    height: 7rem;
  }
`;

const NameContainer = styled.h1`
  ${typography2.head.md}
  color: ${colors.stone[100]};
  margin: 0;

  @media (max-width: 900px) {
    ${typography2.head.sm};
  }
`

const ContactContainer = styled.li`
  display: flex;

  @media (max-width: 900px) {
    display: none;
  }
`



function PortfolioHeader() {


  return (
    <>
    <NavBarContainer>
      <NameContainer>
      <Link to="/"
      style={{textDecoration: "none", color: "inherit"}}
      onClick={() => window.scrollTo(0, 0)}
      >
        Jorge Rosano
      </Link>
      </NameContainer>
      <ContactContainer>
        <LinkedInLink profileURL={"https://www.linkedin.com/in/jorgeros13"} />
      </ContactContainer>
      </NavBarContainer>
      </>
  )
}


export default PortfolioHeader;