import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./style";

export const DeviceBox = () => {
  const [DeviceAll, setDeviceAll] = useState({
    OK: 0,
    NotSubSome: 0,
    NotSubAll: 0,
    Confused: 0,
    Allowed: 0,
  });

  const MainDeviceImg = [
    "제출완료",
    "전부 미제출",
    "일부 미제출",
    "공기계",
    "외출, 외박",
  ];
  const MainDeviceImgSrc = [
    "./img/Ok.svg",
    "./img/NotSubAll.svg",
    "./img/NotSubSome.svg",
    "./img/Confused.svg",
    "./img/Allowed.svg",
  ];
  const deviceKeys = ["OK", "NotSubAll", "NotSubSome", "Confused", "Allowed"];

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
        setDeviceAll(response.data.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    fetchData();
  }, []);


  return (
    <S.deiviceBox>
      {MainDeviceImg.map((value, index) => (
        <React.Fragment key={index}>
          <S.DeviceCon>
            <S.DeviceImg src={MainDeviceImgSrc[index]} alt="Main_Device_Img" />
            <S.DeviceTitle>{value}</S.DeviceTitle>
            <S.DeviceAllCnt>
              {DeviceAll[
                deviceKeys[index % deviceKeys.length] as keyof typeof DeviceAll
              ] || "0"}
            </S.DeviceAllCnt>
          </S.DeviceCon>
        </React.Fragment>
      ))}
    </S.deiviceBox>
  );
};
