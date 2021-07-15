import React, { useState, useCallback, useEffect } from "react";
import styled, { css } from "styled-components";
import useInterval from "./useInterval";

function ImageSlider({ images, auto = false }) {
  const totalItems = images.length;
  const [current, setCurrent] = useState(0);

  const moveNext = useCallback(() => {
    if (current === totalItems - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }, [current, totalItems]);

  const movePrev = () => {
    if (current === 0) {
      setCurrent(totalItems - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const reanderItemList = images?.map((img, index) => {
    const prev = current === 0 ? totalItems - 1 : current - 1;
    const next = current === totalItems - 1 ? 0 : current + 1;

    return (
      <ImageSlide
        key={`item_${index}`}
        active={index === current}
        prev={index === prev}
        next={index === next}
        auto={auto}
      >
        <img src={img} alt={img} />
      </ImageSlide>
    );
  });

  // useInterval(moveNext, 3000);

  useEffect(() => {
    images?.map((image) => {
      const img = new Image();
      img.src = image;
      return null;
    });
  }, [images]);

  if (!images) return null;

  return (
    <ImageSliderStyle auto={auto}>
      <Container>
        {reanderItemList}
        <PrevButton onClick={movePrev}>&#10094;</PrevButton>
        <NextButton onClick={moveNext}>&#10095;</NextButton>
      </Container>
    </ImageSliderStyle>
  );
}

const ImageSlide = styled.div`
  display: none;
  transform: all 1s ease-in;
  ${({ auto }) => (auto ? `height: auto` : `height: 100%`)};
  ${({ active }) =>
    active &&
    css`
      display: block;
    `}
`;

const ImageSliderStyle = styled.div`
  ${({ auto }) =>
    auto
      ? css`
          height: auto;
          padding-top: 70px;
        `
      : css`
          height: 100%;
        `};
`;

const Container = styled.div`
  position: relative;
  height: 100%;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Button = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 3rem;
  user-select: none;
  transition: 0.6s ease;
  background-color: transparent;
  border: none;
  border-radius: 0 3px 3px 0;
  transform: translateY(-50%);

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
const PrevButton = styled(Button)``;
const NextButton = styled(Button)`
  right: 0;
  border-radius: 3px 0 0 3px;
`;

export default ImageSlider;
