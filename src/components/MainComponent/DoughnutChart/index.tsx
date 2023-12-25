import React, { useState, useEffect } from "react";
import * as S from "./style";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import { Chart, ArcElement } from "chart.js";
import axios from "axios";
Chart.register(ArcElement);

interface Props {}

export const DoughnutChart: React.FC<Props> = () => {
  const [chartData, setChartData] = useState({
    OK: 0,
    NotSubSome: 0,
    NotSubAll: 0,
    Confused: 0,
    Allowed: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem("access-token");
      const BASE_URL = "http://3.36.26.135:8080";
      try {
        const response = await axios.get(`${BASE_URL}/admin`, {
          headers: {
            access_token: ` Bearer ${accessToken}`,
          },
        });
        setChartData(response.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    fetchData();
  }, []);

  const ChartColor = [
    { type: "제출완료", key: "#0F0C2E" },
    { type: "전부 미제출", key: "#709FBF" },
    { type: "일부 미제출", key: "#8CC0E4" },
    { type: "공기계", key: "#A4D5F6" },
    { type: "외출, 외박", key: "#E2EFF7" },
  ];

  const data = {
    labels: ["Ok", "NotSubAll", "NotSubSome", "Confused", "Allowed"],
    datasets: [
      {
        data: [3, 0, 0, 0, 0],
        backgroundColor: [
          "#0F0C2E",
          "#709FBF",
          "#8CC0E4",
          "#A4D5F6",
          "#E2EFF7",
        ],
        borderColor: ["#0F0C2E", "#709FBF", "#8CC0E4", "#A4D5F6", "#E2EFF7"],
        borderWidth: 1,
        plugins: {
          datalabels: {
            color: "#fff",
            align: "center",
            anchor: "center",
            formatter: function (this: any, value: number, context: any) {
              return context.dataset.data[context.dataIndex];
            },
            font: {
              weight: "bold",
            },
          },
        },
      },
    ],
  };

  return (
    <S.DoughnutCon>
      <S.ChartCon>
        <Doughnut
          data={data}
          width="20.8333vw"
          height="20.8333vw"
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </S.ChartCon>
      <S.ChartRight>
        {ChartColor.map((value, index) => (
          <S.ChartRightSub key={index}>
            <S.ChartColorBox color={value.key}></S.ChartColorBox>
            <S.ChartColorTitle>{value.type}</S.ChartColorTitle>
          </S.ChartRightSub>
        ))}
      </S.ChartRight>
    </S.DoughnutCon>
  );
};
