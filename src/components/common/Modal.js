import React from "react";
import styled from "styled-components";
import PortfolioItem from "../pages/Protfolio/PortfolioItem";

function Modal({ isVisible, listItem }) {
  return (
    <ModalStyle isVisible={isVisible}>
      <PortfolioItem
        key={listItem.id}
        listItem={listItem}
        showModal={() => {}}
        type="modal"
        show
      />
    </ModalStyle>
  );
}

const ModalStyle = styled.div`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  max-width: 960px;
  height: 80vh;
  background-color: #fafafa;
  transform: translate(-50%, -50%);
  z-index: 2;
  align-items:center;
  justify-content: center;
  
  div.info {
      font-size: 1rem;
      background-color: #fafafa;
      letter-spacing: 1.5px;
      padding: 20px;
      z-index:0;
      

      & > * {
        padding-top: 10px;
      }

      div.main {
        font-size: 1.5rem;
        font-weight: bold;
      }

      div.text {
        color: #777;
      }

      div.link {
        color: royalblue;
      }

      div.warning {
        font-size: 0.75rem;
        color: #e04848;
      }
    }
  }
`;

export default Modal;
