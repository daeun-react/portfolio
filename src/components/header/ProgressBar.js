import { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import _ from "lodash";

const ProgressBarStyle = styled.div`
  width: 100%;
  height: 10px;
  z-index: 9999;

  div {
    display: block;
    background-image: linear-gradient(to right, royalblue, aquamarine);
    width: 100%;
    height: 100%;
    transform: ${({ percent }) =>
      percent ? `translateX(-${100 - percent}%)` : `translateX(-99%)`};
    transition: "transform 0.1s ease-out";
    overflow: hidden;
  }
`;

export default function ProgressBar() {
  const [percent, setPercent] = useState(0);

  const throttledScroll = useMemo(
    () =>
      _.throttle(() => {
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight =
          document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight =
          document.documentElement.clientHeight || document.body.clientHeight;

        const contentHeight = scrollHeight - clientHeight;
        const percentCalc = (scrollTop / contentHeight) * 100;
        setPercent(percentCalc);
      }, 500),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [throttledScroll]);

  return (
    <ProgressBarStyle percent={percent}>
      <div></div>
    </ProgressBarStyle>
  );
}
