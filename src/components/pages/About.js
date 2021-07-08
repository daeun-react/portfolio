import React from "react";
import ImageSlider from "../common/ImageSlider";
import styled from "styled-components";
import { Title } from "../../styles/CommonStyle";
import { BsCalendar, BsEnvelope } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { imageSrc } from "../../img/Images";

function About() {
  return (
    <>
      <ImageSlider images={imageSrc.myinfo} paddingTop auto />
      <AboutArea>
        <Title width={120}>ABOUT</Title>
        <Info>
          <MyIntro>
            안녕하세요. 끊임없는 성장을 추구하는 열정있는 개발자입니다. React로
            웹페이지 만드는게 재밌어요 ! 궁금하신 점이 있으시다면 언제든지
            편하게 연락주세요.
          </MyIntro>
          <MyContact>
            <li>
              <BsCalendar /> 1992.01.05
            </li>
            <li>
              <BiPhoneCall /> +82 010-2954-1248
            </li>
            <li>
              <BsEnvelope /> smile_daeun@naver.com
            </li>
          </MyContact>
        </Info>
      </AboutArea>
    </>
  );
}

const AboutArea = styled.section`
  height: auto;
  position: relative;
`;

const Info = styled.div`
  display: block;
  font-size: 1rem;

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    padding: 20px 0;
  }
`;

const MyIntro = styled.div`
  width: 50%;
  padding: 20px;
  letter-spacing: 1.5px;
`;

const MyContact = styled.ul`
  width: 50%;
  li {
    height: 40px;
    display: flex;
    align-items: center;
    color: #777;
  }

  svg {
    margin-right: 10px;
  }
`;

export default About;
