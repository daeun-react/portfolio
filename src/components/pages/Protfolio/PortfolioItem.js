import React from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import styled from "styled-components";
import ImageSlider from "../../common/ImageSlider";

function PortfolioItem({ listItem, showModal, show, type = "page" }) {
  const renderDescInfo = (desc) => {
    return (
      <ul>
        {desc.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    );
  };

  return (
    <FilterItem show={show} type={type}>
      <ImageWrapper>
        {type === "page" && (
          <>
            <ModalWrapper onClick={() => showModal(listItem)}>
              <BsArrowsFullscreen />
            </ModalWrapper>
            <img src={listItem.images[0]} alt="" />
          </>
        )}
        {type === "modal" && (
          <ImageSlider images={listItem.images} auto={false} />
        )}
      </ImageWrapper>
      <InfoWrapper
        onClick={() => type === "page" && window.open(listItem.link)}
      >
        <div className="main">{listItem.title}</div>
        <div className="desc">
          {listItem.category === "project"
            ? listItem.desc
            : renderDescInfo(listItem.desc)}
        </div>
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
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 300ms ease;
  cursor: pointer;
  z-index: 999;

  &:hover {
    background-image: linear-gradient(to right, royalblue, aquamarine);
    opacity: 0.9;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    color: #fff;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 552px) {
    display: none;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  font-size: 1rem;
  background-color: #fafafa;
  letter-spacing: 1.5px;
  padding: 20px;
  z-index: 0;

  & > * {
    padding: 6px 0;
  }

  div.main {
    font-size: 1.15rem;
    font-weight: bold;
  }

  div.desc {
    font-size: 1rem;
    color: #777;
  }

  div.lang {
    font-size: 0.9rem;
  }

  div.link {
    font-size: 0.9rem;
    color: royalblue;
  }

  div.warning {
    font-size: 0.75rem;
    color: #ff6384;
  }

  ul {
    padding: 0 20px;
    list-style: square;
  }

  li {
    padding: 5px 0;
  }
`;

export default PortfolioItem;
