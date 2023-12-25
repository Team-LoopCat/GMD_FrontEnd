import React from "react";
import * as S from "./style";
import Navbar from "../common/navBar";
import { DeviceBox } from "./DeviceBox";
import { DoughnutChart } from "./DoughnutChart";
import { CheckStu } from "./CheckStu/index";

export const MainCom = () => {
  return (
    <S.MainContainer>
      <Navbar />
      <DeviceBox />
      <DoughnutChart />
      <CheckStu />
    </S.MainContainer>
  );
};
