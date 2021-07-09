import React from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import styled from "styled-components";
import ImageSlider from "../../common/ImageSlider";

function PortfolioItem({ listItem, showModal, show, type = "page" }) {
  return (
    <FilterItem show={show} type={type}>
      <ImageWrapper>
        <ImageSlider images={listItem.images} auto={false} />
        {type === "page" && (
          <ModalWrapper onClick={() => showModal(listItem)}>
            <BsArrowsFullscreen />
          </ModalWrapper>
        )}
      </ImageWrapper>
      <InfoWrapper
        onClick={() => type === "page" && window.open(listItem.link)}
      >
        <div className="main">{listItem.title}</div>
        <div className="text">{listItem.desc}</div>
        <div className="lang">{listItem.language}</div>
        <div className="link">{listItem.link}</div>
        {listItem.category === "project" && (
          <div className="warning">
            7/4일 이후 회사 보안문제로 웹 접속을 차단한 프로젝트가 있습니다.
            <br />웹 사이트는 이미지로 대체하며, 계정정보 필요시 연락
            부탁드립니다.
          </div>
        )}
      </InfoWrapper>
    </FilterItem>
  );
}

const FilterItem = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  font-size: 1rem;
  margin-bottom: 20px;
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    ${({ type }) =>
      type === "page" &&
      `transform: scale(1.015);
       box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2);`};
  }

  @media (min-width: 992px) {
    ${({ show, type }) =>
      show
        ? type === "page"
          ? `display: grid;
             grid-template-columns: 1fr 1fr;`
          : `display: block`
        : `display:none;`};
  }
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  svg {
    font-size: 2rem;
    &:hover {
      color: #ff6384;
    }
  }

  @media (max-width: 552px) {
    display: none;
  }
`;

const InfoWrapper = styled.div`
  font-size: 1rem;
  background-color: #fafafa;
  letter-spacing: 1.5px;
  padding: 20px;
  z-index: 0;

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
    color: #ff6384;
  }
`;

export default PortfolioItem;
