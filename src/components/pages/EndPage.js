import React from "react";
import { Title } from "../../styles/CommonStyle";
import Chart from "../common/Chart";

function EndPage() {
  return (
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
      <Title fontSize="5rem" width={500}>
        감사합니다!
      </Title>
      <Chart />
    </div>
  );
}

export default EndPage;
