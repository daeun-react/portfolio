import { useRef } from "react";
import Header from "./components/header/Header";
import GlobalStyle from "./styles/GlobalStyle";

import About from "./components/pages/About";
import Growth from "./components/pages/Growth";
import Portfolio from "./components/pages/Portfolio";
import EndPage from "./components/pages/EndPage";

const pageInfo = {
  0: "about",
  1: "growth",
  2: "portfolio",
  3: "end",
};

function App() {
  const contentRef = useRef([]);
  const moveToPage = (index) => {
    contentRef.current[index].scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <>
      <GlobalStyle />

      <Header pageInfo={pageInfo} moveToPage={moveToPage} />
      <About ref={(r) => (contentRef.current[0] = r)} />
      <Growth ref={(r) => (contentRef.current[1] = r)} />
      <Portfolio ref={(r) => (contentRef.current[2] = r)} />
      <EndPage ref={(r) => (contentRef.current[3] = r)} />
    </>
  );
}

export default App;
