import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import styled from "styled-components";

export const Graph = () => {
  const series = [
    {
      name: "Expenses",
      data: [
        10000, 1000000, 2000, 200030, 300, 0, 0, 200, 30000, 5000, 200, 100000,
      ],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 350,
      background:
        "linear-gradient(180deg, #ffa76d 0%, #ffc49d 12%, #ffffff 100%)",
      fontFamily: "Pretendard-Light",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    colors: ["#FF802C"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 0,
    },
    xaxis: {
      categories: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
      ],
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
  };

  return (
    <GraphWrapper>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={224}
        width="100%"
      />
    </GraphWrapper>
  );
};

const GraphWrapper = styled.div`
  border-radius: 5px;
  overflow: hidden;
  width: 85vw;
`;
