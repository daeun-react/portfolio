import React from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
const data = {
  labels: ["HTML", "CSS", "JAVASCRIPT", "REACT", ".NET"],
  datasets: [
    {
      data: [20, 20, 20, 20, 20],
      label: "Dataset 1",
      backgroundColor: ["#FF6384", "#FF9F40", "#36A2EB", "#FFCE56", "#47C2C2"],
      hoverBackgroundColor: [
        "#FF6384",
        "#FF9F40",
        "#36A2EB",
        "#FFCE56",
        "#47C2C2",
      ],
    },
  ],
};

function Chart() {
  return (
    <ChartWrapper>
      <Doughnut data={data} />
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  margin: 40px 0;
  width: 60%;

  @media (min-width: 992px) {
    width: 40%;
  }
`;
export default Chart;
