import { useState, useRef, useEffect } from "react";
import Layout from "./components/Layout";
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
  const [viewIndex, setViewIndex] = useState(0);
  const contentRef = useRef([]);
  const moveToPage = (index) => {
    contentRef.current[index].scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  // useEffect(() => {
  //   const scrollSpyObserver = new IntersectionObserver(
  //     (entries) => {
  //       const { target } = entries.find((entry) => entry.isIntersecting) || {};
  //       const index = contentRef.current.indexOf(target);
  //       index > -1 && setViewIndex(index);
  //     },
  //     {
  //       root: null,
  //       rootMargin: "0px",
  //       threshold: 0.5,
  //     }
  //   );

  //   contentRef.current.forEach((item) => scrollSpyObserver.observe(item));
  //   return () => {
  //     contentRef.current.forEach((item) => scrollSpyObserver.unobserve(item));
  //   };
  // }, []);

  return (
    <>
      <GlobalStyle />

      <Header
        pageInfo={pageInfo}
        viewIndex={viewIndex}
        moveToPage={moveToPage}
      />
      {/* <>
        {Object.keys(pageInfo).map((p, i) => (
          <Layout key={p} page={p} ref={(r) => (contentRef.current[i] = r)} />
        ))}
      </> */}
      <About />
      <Growth />
      <Portfolio />
      <EndPage />
    </>
  );
}

export default App;