import styled from "styled-components";

const ProgressBarStyle = styled.div`
  width: calc(100% - 120px);
  margin: auto 60px;
  height: 10px;
  z-index: 9999;

  @media (min-width: 992px) {
    max-width: 900px;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    max-width: 1000px;
  }

  span {
    display: block;
    height: 100%;
    background-image: linear-gradient(to right, royalblue, aquamarine);
    width: ${(props) => `${props.percent}%`};
    transition: "transform 0.1s ease-out";
    overflow: hidden;
  }
`;

export default function ProgressBar({ viewIndex }) {
  const percent = (100 / 4) * (viewIndex + 1);
  return (
    <ProgressBarStyle percent={percent}>
      <span></span>
    </ProgressBarStyle>
  );
}
