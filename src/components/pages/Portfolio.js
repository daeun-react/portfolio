import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import list from "./Protfolio/list";
import { SectionWrapper, Title } from "../../styles/CommonStyle";
import Blackout from "../common/Blackout";
import Modal from "../common/Modal";
import PortfolioItem from "./Protfolio/PortfolioItem";

function Portfolio() {
  const category = ["ALL", "PROJECT", "REACT"];
  const [active, setActive] = useState("ALL");
  const [buttonActive, setButtonActive] = useState(1);
  const [projectList, setProjectList] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [showItem, setshowItem] = useState(null);

  const handleCategoryChange = (category) => {
    setActive(category);

    const filteredList =
      category === "ALL"
        ? list
        : list.filter((pj) => pj.category === category.toLowerCase());
    setProjectList(filteredList);
    setButtonActive(1);
  };

  const showModal = (selectedItem) => {
    setIsVisible(true);
    setshowItem(selectedItem);
  };

  const handleButtonChange = (num) => {
    setButtonActive(num);
  };

  const renderButton = Array.from(
    { length: Math.ceil(projectList.length / 2) },
    (a, i) => i + 1
  ).map((num, i) => (
    <Page
      key={`btn${num}`}
      active={num === buttonActive}
      onClick={() => handleButtonChange(num)}
    >
      {num}
    </Page>
  ));

  useEffect(() => {
    setProjectList(list);
  }, []);

  return (
    <SectionWrapper color="#EAEAEA">
      <Title width={180}>PORTFOLIO</Title>
      <UL>
        {category.map((c, i) => (
          <LI
            key={c}
            active={active === c}
            onClick={() => handleCategoryChange(c)}
          >
            {c}
          </LI>
        ))}
      </UL>
      <div>
        {projectList.map((listItem, i) => (
          <PortfolioItem
            key={listItem.id}
            listItem={listItem}
            showModal={showModal}
            show={i === 2 * (buttonActive - 1) || i === 2 * buttonActive - 1}
          />
        ))}
      </div>
      <Pagenation>{renderButton}</Pagenation>
      <Blackout isVisible={isVisible} onSetIsVisible={setIsVisible} />
      {showItem && <Modal isVisible={isVisible} listItem={showItem} />}
    </SectionWrapper>
  );
}

const UL = styled.ul`
  display: flex;
  justify-content: center;
  width: calc(100% - 120px);
  margin: 10px 60px;
`;

const LI = styled.li`
  font-weight: bold;
  padding: 0 10px;
  font-size: 1.15rem;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  color: ${(props) => (props.active ? `royalblue` : `#000`)};

  &:hover {
    color: royalblue;
  }
`;

const Pagenation = styled.div`
  text-align: center;
  padding: 20px;
`;

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  background: royalblue;
  color: #fff;
  border: none;
  outline: none;
  margin-right: 10px;

  ${({ active }) =>
    active &&
    css`
      background: aquamarine;
    `}
`;
export default Portfolio;
