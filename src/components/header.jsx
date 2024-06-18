import styled from "@emotion/styled";
import { keyframes } from '@emotion/react' 

import { typography, typography2 } from "../styles/typography";
import { colors } from "../styles/colors";
import LinkedInLink from "./button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';


const NavBarContainer = styled.div`
  display: flex;
  width: 80%;
  height: 10rem;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 1px solid white;
`;

const NameContainer = styled.h1`
  ${typography2.head.md}
  color: ${colors.stone[100]};
  margin: 0;

  @media (max-width: 900px) {
    ${typography2.head.sm};
  }
`

const OptionsContainer = styled.li`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`

const Option = styled.p`
  ${typography.head.xs}
  font-weight: 500;
  color: ${colors.stone[100]};
  margin: 0;
  padding: 16px 0;
`

const HamburgerMenu = styled.div`
  display: ${props => (props.visible ? "block" : "none")};  
  background-color: ${colors.stone[100]};
  width: 85%;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding-bottom: 16px;
  text-align: center;
  position: fixed;
  top: 80px;
  display: none;
  
  @media (max-width: 900px) {
    display: ${props => (props.visible ? "block" : "none")}; 
    width: 95%;
    position: absolute;
    top: 100%;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  color: ${colors.stone[100]};
  position: fixed;
  right: 16px;
  align-self: center;
  padding-top: 4px;
  transition: transform 0.5s ease;  

  @media (max-width: 900px) {
    display: ${props => (props.menuVisible ? "none" : "block")};
    animation: ${rotate} 0.5s linear;
  }
`;

const CloseIcon = styled.div`
  display: none;
  cursor: pointer;
  color: ${colors.stone[100]};
  position: fixed;
  right: 16px;
  align-self: center;
  transition: transform 0.5s ease; 

  @media (max-width: 900px) {
    display: ${props =>
      props.menuVisible ? "block" : "none"};
  }
  animation: ${rotate} 0.5s linear reverse;
`;

function Header() {

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(prevMenuVisible => !prevMenuVisible);
  };

  return (
    <NavBarContainer menuVisible={menuVisible}>
      <NameContainer>
      <Link to="/"
      style={{textDecoration: "none", color: "inherit"}}
      onClick={() => window.scrollTo(0, 0)}
      >
        Jorge Rosano
      </Link>
      </NameContainer>
      <HamburgerIcon 
        onClick={toggleMenu} 
        menuVisible={menuVisible}
        >
        <GiHamburgerMenu style={{height: "40px", width: "40px"}}/>
      </HamburgerIcon>
      <CloseIcon
        onClick={toggleMenu}
        menuVisible={menuVisible}
      >
        <IoClose style={{height: "45px", width: "45px"}}/>
      </CloseIcon>
      <OptionsContainer>
        
        <Link to="/projects" style={{textDecoration: "none"}}
        onClick={() => window.scrollTo(0, 0)}>
        <Option>Portfolio</Option>
        </Link>
        <LinkedInLink profileURL={"https://www.linkedin.com/in/jorgeros13"} />
      </OptionsContainer>
      <HamburgerMenu visible={menuVisible}>
     
      <Link to="/projects" style={{textDecoration: "none"}}
      onClick={() => window.scrollTo(0, 0)}>
        <Option style={{color: "black"}}>Portfolio</Option>
      </Link>
      <LinkedInLink profileURL={"https://www.linkedin.com/in/jorgeros13"} />
      </HamburgerMenu>

    </NavBarContainer>
  )

}

export default Header;