import styled from "@emotion/styled";
import { keyframes } from '@emotion/react';
import '../styles/styles.css'; 
import Modal from "./modal";

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

// const HamburgerMenu = styled.div`
//   display: ${props => (props.visible ? "block" : "none")};
//   background-color: ${colors.black[100]};
//   border-radius: 0.5rem;
//   padding-bottom: 16px;
//   display: none;
  
//   @media (max-width: 900px) {
//     display: ${props => (props.visible ? "block" : "none")}; 
//     width: 80%;
//     align-self: center;
//     z-index: 100;
//     position: absolute;
//     top: 0;;
//     left: 0;
//     text-align: center;
//   }
// `;

const HamburgerMenu = styled.div`
  display: ${props => (props.visible ? "flex" : "none")};
  flex-direction: column;
  background-color: ${colors.black[100]};
  border-radius: 0.5rem;
  padding-bottom: 16px;
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: ${props => (props.visible ? "0" : "-250px")};
  transition: left 0.3s ease;
  z-index: 100;
  text-align: center;

  @media (max-width: 900px) {
    width: 80%;
    left: ${props => (props.visible ? "0" : "-80%")};
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
  transition: transform 0.5s ease;

  @media (max-width: 900px) {
    display: ${props =>
      props.menuVisible ? "block" : "none"};
  }
  animation: ${rotate} 0.5s linear reverse;
  margin: 1rem 1rem 0 0;
  align-self: flex-end;
`;

function Header() {

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(prevMenuVisible => !prevMenuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <>
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
      <OptionsContainer>
        
        <Link to="/projects" style={{textDecoration: "none"}}
        onClick={() => window.scrollTo(0, 0)}>
        <Option>Portfolio</Option>
        </Link>
        <LinkedInLink profileURL={"https://www.linkedin.com/in/jorgeros13"} />
      </OptionsContainer>
      <HamburgerMenu visible={menuVisible}>

      <CloseIcon
        onClick={toggleMenu}
        menuVisible={menuVisible}
      >
        <IoClose style={{height: "1.5rem", width: "1.5rem"}}/>
      </CloseIcon>
     
      <Link to="/projects" style={{textDecoration: "none"}}
      onClick={() => window.scrollTo(0, 0)}>
        <Option style={{color: "white"}}>Portfolio</Option>
      </Link>
      <LinkedInLink profileURL={"https://www.linkedin.com/in/jorgeros13"} />

      
      </HamburgerMenu>

      </NavBarContainer>
      <Modal visible={menuVisible} onClose={closeMenu} />
      </>
  )
}


export default Header;