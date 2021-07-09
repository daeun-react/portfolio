import styled from "styled-components";

export const Title = styled.div`
  padding-top: 10px;
  font-size: ${(props) => props.fontSize || "1.5rem"};
  font-weight: bold;
  text-align: center;
  letter-spacing: 3px;

  &::after {
    content: "";
    display: block;
    width: ${(props) => props.width}px;
    height: 10px;
    margin: 0 auto;
    background-image: linear-gradient(to right, royalblue, aquamarine);
  }
`;

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: auto;
  background-color: ${({ color }) => color || "#fff"};

  @media (min-width: 992px) {
    height: 100vh;
    max-width: 900px;
  }

  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`;
