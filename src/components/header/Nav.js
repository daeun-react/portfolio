import React from "react";
import styled from "styled-components";

const Container = styled.nav`
  position: sticky;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  margin: 0 auto;
  z-index: 9999;
  background-color: #fff;
  padding: 10px;
`;

const NavStyle = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  overflow: hidden;
  max-width: 980px;
  margin: 0 auto;

  li {
    position: relative;
    flex: 1;
    text-align: center;
  }
  li:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    border-left: solid 1px #ececec;
  }
  li:first-child::before {
    border: 0;
  }
  li.on button {
    background-color: #428bca;
    color: #fff;
    font-weight: bold;
  }
  button {
    display: block;
    line-height: 30px;
    width: 100%;
    border: 0;
    outline: 0;
    background-color: #fff8;
    cursor: pointer;
    transition: 0.3s;
  }
  button:hover {
    padding: 3px;
    border-bottom: 3px solid #428bca;
  }
`;

const Nav = ({ pages, viewIndex, moveToPage }) => (
  <Container>
    <NavStyle>
      {Object.keys(pages).map((p, i) => (
        <li key={p}>
          <button onClick={() => moveToPage(i)}>{pages[i]}</button>
        </li>
      ))}
    </NavStyle>
  </Container>
);

export default Nav;
