import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

function Header({ pageInfo, viewIndex, moveToPage }) {
  const [show, setShow] = useState(false);
  const toggleClick = () => {
    setShow((show) => setShow(!show));
  };

  return (
    <HeaderStyle>
      <Navbar>
        <NavbarBrand>Daeun.lee</NavbarBrand>
        <NavbarToggler onClick={toggleClick}>
          <GiHamburgerMenu />
        </NavbarToggler>
        <NavbarMenu show={show}>
          {Object.keys(pageInfo).map((page, i) => (
            <NavItem key={`page${i}`} onClick={() => moveToPage(i)}>
              <NavLink>{pageInfo[i]}</NavLink>
            </NavItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <ProgressBar viewIndex={viewIndex} />
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  background-color: white;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
`;

const Navbar = styled.nav`
  width: calc(100% - 120px);
  margin: auto 60px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 992px) {
    max-width: 900px;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`;

const NavbarBrand = styled.div`
  font-size: 1.25rem;
  cursor: pointer;
`;

const NavbarToggler = styled.a`
  font-size: 32px;
  height: 70px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 992px) {
    display: none;
  }
`;

const NavbarMenu = styled.div`
  text-transform: uppercase;
  @media (max-width: 992px) {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: ${(props) => (props.show ? "200px" : "0")};
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.5s ease;
    overflow: hidden;
  }

  @media (min-width: 992px) {
    position: relative;
    background-color: transparent;
    width: auto;
    height: auto;
    display: flex;
  }
`;

const NavItem = styled.div`
  float: none;
  display: block;
  height: 50px;
  line-height: 50px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  @media (min-width: 992px) {
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: transparent;
    }
  }
`;

const NavLink = styled.a`
  display: block;
  padding-left: 50px;
  color: #fff;
  cursor: pointer;

  @media (min-width: 992px) {
    display: block;
    padding: 0 20px;
    color: black;
  }
`;

export default Header;
