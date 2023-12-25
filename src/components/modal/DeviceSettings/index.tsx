import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../style";

export const DeviceSettings = () => {
  const studentDevice = [
    {
      stuID: 1234,
      stuName: "test",
      status: "OK",
    },
    {
      stuID: 1234,
      stuName: "TEST",
      status: "OK",
    },
  ];

  const storedDeviceData = JSON.parse(
    localStorage.getItem("deviceCounts") || "{}"
  );

  const devicedata = [
    {
      stuID: 1109,
      ...storedDeviceData,
    },
  ];

  const deviceInfo = [
    { type: "핸드폰", key: "phone" },
    { type: "학교노트북", key: "schoolLaptop" },
    { type: "개인노트북", key: "personalLabtob" },
    { type: "태블릿", key: "tablet" },
  ];

  const navigate = useNavigate();

  const handleDeviceChange = () => {
    navigate("/AddDelDevice");
  };

  const handleDeviceConfirm = () => {
    navigate("/ListPage");
  };

  return (
    <S.deviceSettings>
      <S.deviceHeader width={"615px"}>
        <S.deviceTitle>디바이스 세부 조회</S.deviceTitle>
        <S.deviceImg
          src="./img/DeviceSettings.svg"
          alt="세부사항 이미지"
          left="253px"
          top="27px"
        />
        <S.deviceImg
          src="./img/ModalExport.svg"
          alt="나가기 이미지"
          left="530px"
          top="33px"
        />
      </S.deviceHeader>
      <S.deviceSTitle>디바이스 세부 조회</S.deviceSTitle>
      {studentDevice.map((device, index) => (
        <S.deviceCon key={index}>
          <S.deviceName>{index === 0 ? "사물함 번호" : "이름"}</S.deviceName>
          <S.deviceValue>
            {index === 0 ? device.stuID : device.stuName}
          </S.deviceValue>
        </S.deviceCon>
      ))}
      {devicedata.map((deviceData) =>
        deviceInfo.map((value) => (
          <S.deviceCon key={value.key}>
            <S.deviceType>{value.type}</S.deviceType>
            <S.deviceCnt>{(deviceData as any)[value.key]}개</S.deviceCnt>
            <S.deviceSubm>제출</S.deviceSubm>
            <S.ChangeCircle
              color={"#709FBF"}
              top={"9px"}
              left={"398px"}
            ></S.ChangeCircle>
          </S.deviceCon>
        ))
      )}
      <S.BtnContainer top={"103px"} left={"42px"}>
        <S.ModalBtn
          type="submit"
          value={"디바이스 변경"}
          onClick={handleDeviceChange}
        />
        <S.ModalBtn
          type="submit"
          value={"확인"}
          onClick={handleDeviceConfirm}
        />
      </S.BtnContainer>
    </S.deviceSettings>
  );
};
