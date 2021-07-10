import { imageSrc } from "../../../img/Images";

const list = [
  {
    id: 1,
    category: "project",
    title: "SPC 모니터링 조사",
    desc: "전문면접원이 파리바게트, 던킨 등 전국 모든 매장을 방문하여 제품 및 매장 상태를 점검하고 점검된 정보를 입력 및 데이터 검증, 가공된 정보의 결과물을 제공하는 사이트",
    language: "C#, MSSQL, Javascript, CSS, HTML",
    link: "http://spcbackup.hrcglobal.com",
    images: imageSrc.pj1,
  },
  {
    id: 2,
    category: "project",
    title: "골프매장 유통가격 모니터링 조사",
    desc: "매월 전문면접원이 조사 대상 골프점을 방문하여, 진열된 골프채 종류 및 가격 확인 후 권장가 미만인 매장에 대하여 구매 내역 영수증을 관리하는 사이트",
    language: "C#, MSSQL, Javascript, CSS, HTML",
    link: "http://ssk.hrcglobal.com",
    images: imageSrc.pj2,
  },
  {
    id: 3,
    category: "project",
    title: "순천향대학교 병원 서비스 만족도 조사",
    desc: "순천향대학교 병원에 전화하여 스크립트 내용을 바탕으로 통화 후 해당 정보를 웹 사이트에 기록 및 녹취 파일 업로드를 관리하는 사이트",
    language: "C#, MSSQL, Javascript, CSS, HTML",
    link: "http://schms.hrcglobal.com",
    images: imageSrc.pj1,
  },
  {
    id: 4,
    category: "project",
    title: "삼성판매 모니터링 조사",
    desc: "전국 삼성전자 판매점에 방문하여 제품별 구매 상담 후, 설문 내용 입력 및 경쟁사에 방문 후 제품 및 서비스 응대평가 비교 내용 입력 사이트",
    language: "C#, MSSQL, Javascript, CSS, HTML",
    link: "http://s.sales.hrcglobal.com",
    images: imageSrc.pj1,
  },
  {
    id: 5,
    category: "project",
    title: "홈플러스 가격 모니터링 조사",
    desc: "전문면접원이 매월 홈플러스 매장에 방문하여 할당된 조사 물품에 대한 가격 및 할인 정보에 대한 내용 입력하는 사이트",
    language: "C#, MSSQL, Javascript, CSS, HTML",
    link: "http://ltmm.hrcglobal.com",
    images: imageSrc.pj1,
  },
  {
    id: 6,
    category: "react",
    title: "Themoviedb API를 이용한 영화검색 사이트",
    desc: [
      "https://api.themoviedb.org API 이용",
      "영화 순위 정보 제공(Now Playing, Upcoming Movies, Popular Movies)",
      "TV 프로그램 순위 정보 제공(Top Rated Shows, Popular Shows, Airing Today)",
      "영화 및 TV 프로그램 검색 기능 제공",
    ],
    language: "React, Axios, react-helmet, styled-components",
    link: "https://daeun-react.github.io/moviesite",
    images: imageSrc.movie,
  },
  {
    id: 7,
    category: "react",
    title: "Kakao API를 이용한 Bookstore 사이트",
    desc: [
      "https://dapi.kakao.com/v3/search/book API 이용",
      "useReducer를 통한 상태관리",
      "Infinite Scroll 적용",
      "Lodash Throttle 적용",
    ],
    language: "React, Axios, Sass, uuid",
    link: "https://daeun-react.github.io/bookstore",
    images: imageSrc.book,
  },
];

export default list;
