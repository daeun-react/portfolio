import React from "react";
import styled from "styled-components";

function Blackout({ isVisible, onSetIsVisible }) {
  return (
    <BlackoutStyle
      isVisible={isVisible}
      onClick={() => onSetIsVisible(false)}
    />
  );
}

const BlackoutStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.65);
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

export default Blackout;
