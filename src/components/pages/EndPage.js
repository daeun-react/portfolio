import React, { forwardRef } from "react";
import { SectionWrapper, Title } from "../../styles/CommonStyle";
import Chart from "../common/Chart";

function EndPage({}, ref) {
  return (
    <SectionWrapper color="#F9F9FF" ref={ref}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Title fontSize="3rem" width={300}>
          감사합니다!
        </Title>
        <Chart />
      </div>
    </SectionWrapper>
  );
}

export default forwardRef(EndPage);
