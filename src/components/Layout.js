import React, { forwardRef } from "react";
import styled from "styled-components";
import About from "./pages/About";
import Growth from "./pages/Growth";
import Portfolio from "./pages/Portfolio";
import EndPage from "./pages/EndPage";

const Layout = ({ page }, ref) => {
  return (
    <ContentStyle ref={ref} page={page}>
      {page === "0" && <About />}
      {page === "1" && <Growth />}
      {page === "2" && <Portfolio />}
      {page === "3" && <EndPage />}
    </ContentStyle>
  );
};

const ContentStyle = styled.div`
  max-width: 1000px;
  height: 100vh;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${({ page }) =>
    Number(page) % 2 === 0 ? "#EAEAEA" : "#F9F9FF"};
`;

export default forwardRef(Layout);
