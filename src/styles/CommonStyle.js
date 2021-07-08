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
