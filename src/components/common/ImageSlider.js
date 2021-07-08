import React, { useState, useEffect, useRef, useCallback } from "react";
import styled, { css } from "styled-components";

function ImageSlider({ images, paddingTop, auto = false }) {
  const totalItems = images.length;
  const [current, setCurrent] = useState(0);
  const isMoving = useRef(false);

  const moveNext = useCallback(() => {
    if (!isMoving.current) {
      if (current === totalItems - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }
  }, [current, totalItems]);

  const movePrev = () => {
    if (!isMoving.current) {
      if (current === 0) {
        setCurrent(totalItems - 1);
      } else {
        setCurrent(current - 1);
      }
    }
  };

  const ItemList = images?.map((img, index) => {
    const prev = current === 0 ? totalItems - 1 : current - 1;
    const next = current === totalItems - 1 ? 0 : current + 1;

    return (
      <ImageSlide
        key={`item_${index}`}
        active={index === current}
        prev={index === prev}
        next={index === next}
      >
        <img src={img} alt="" />
      </ImageSlide>
    );
  });

  useEffect(() => {
    isMoving.current = true;
    setTimeout(() => {
      isMoving.current = false;
    }, 500);
  }, [current]);

  useEffect(() => {
    if (!auto) return;

    const timer = setTimeout(() => {
      moveNext();
    }, 3000);

    return () => clearTimeout(timer);
  }, [moveNext, auto]);

  if (!images) return null;

  return (
    <ImageSliderStyle paddingTop={paddingTop}>
      <Container>
        {ItemList}
        <PrevButton onClick={movePrev}>&#10094;</PrevButton>
        <NextButton onClick={moveNext}>&#10095;</NextButton>
      </Container>
    </ImageSliderStyle>
  );
}

const ImageSlide = styled.div`
  display: none;
  transform: all 1s ease-in;
  ${({ active }) =>
    active &&
    css`
      display: block;
    `}
`;

const ImageSliderStyle = styled.div`
  height: auto;
  ${({ paddingTop }) => paddingTop && `padding-top: 70px;`}
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
