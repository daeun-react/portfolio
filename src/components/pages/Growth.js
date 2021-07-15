import React, { forwardRef } from "react";
import { SectionWrapper, Title } from "../../styles/CommonStyle";
import { IoMdSchool, IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import styled from "styled-components";

function Growth({}, ref) {
  return (
    <SectionWrapper color="#F9F9FF" ref={ref}>
      <Title width={150}>SERVICES</Title>

      <Container>
        <Item>
          <Icon>
            <IoMdSchool />
            <div>건국대학교 인터넷미디어 공학부</div>
          </Icon>
          <Content>
            인터넷미디어 공학부는 현재 소프트웨어 공학부로 학과명이
            변경되었습니다. 입학 후 C, C++, JAVA 등 프로그래밍 언어부터 DB, OS
            이론 과목까지 전공과목을 배울 수 있었습니다. 그중 데이터마이닝 관련
            수업을 듣고 ‘소셜데이터를 활용한 오피니언 마이닝’을 주제로 1년여간
            연구하였습니다. 졸업 논문 작성 및 결과를 웹사이트로 구현하여
            발표하였고, 당시 교수님께서 진행하시던 다이닝코드 웹사이트에 데이터
            마이닝 결과가 적용되었습니다.
          </Content>
        </Item>

        <Item>
          <Icon>
            <IoLogoJavascript />
            <div>한국리서치 웹조사개발팀</div>
          </Icon>
          <Content>
            한국리서치 전산본부 웹조사개발팀에서 5년간 근무했습니다. 국내외
            마케팅 조사 및 여론조사 프로젝트를 다수 진행했습니다. 연구부서 및
            고객사로부터 협의된 기획안을 전달받아 웹 사이트를 개발하고, DB 설계
            및 데이터 검증 후 결과표 제공을 하였습니다. 웹 화면뿐만 아니라
            DB설계, 프로시저 작성, 파일 처리, API 연동 등 진행하면서 프로젝트가
            성공적으로 마무리 될 수 있도록 책임감과 꼼꼼함을 가지고
            임하였습니다.
          </Content>
        </Item>

        <Item>
          <Icon>
            <FaReact />
            <div>리액트 프론트엔드 개발자</div>
          </Icon>
          <Content>
            재직 중 사내 교육 프로그램으로, 외부 시설에 가서 원하는 교육을 받을
            수 있었습니다. 평소 인터넷 강의로 배워왔던 리액트 내용을 복습하고,
            직접 프로젝트를 진행하면서 리액트 전반에 대해 더 깊이 알 수 있는
            시간이었습니다. 교육과정을 마치고 실무에 어떻게 적용할까 생각하다,
            사내 연구원들이 내부 지표로 사용되는 진행상황표에 적용하였습니다.
            리액트의 장점인 컴포넌트화를 통한 재사용과 다양한 라이브러리를
            접목시킬 수 있다는 점에서 매력을 느끼고 다수의 사이트를
            개발하였습니다.
          </Content>
        </Item>
      </Container>
    </SectionWrapper>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Item = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 20px;
  text-align: left;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.015);
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;

  svg {
    font-size: 48px;
    color: #aaa;
    margin-right: 10px;
  }

  div {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 10px 0;
  }
`;

const Content = styled.div`
  font-size: 1rem;
  letter-spacing: 1.5px;
  padding: 10px 0;
`;

export default forwardRef(Growth);
