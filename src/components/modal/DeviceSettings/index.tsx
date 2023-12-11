import React from "react";
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

  const devicedata = [
    {
      stuID: 1109,
      phone: 1,
      personalLabtob: 1,
      schoolLaptop: 1,
      tablet: 0,
    },
  ];

  const deviceInfo = [
    { type: "핸드폰", key: "phone" },
    { type: "학교노트북", key: "schoolLaptop" },
    { type: "개인노트북", key: "personalLabtob" },
    { type: "태블릿", key: "tablet" },
  ];

  return (
    <S.deviceSettings>
      <S.deviceHeader>
        <S.deviceTitle>디바이스 세부 조회</S.deviceTitle>
        <S.deviceImg
          src="./img/DeviceSettings.svg"
          alt="세부사항 이미지"
          left="253px"
        />
        <S.deviceImg
          src="./img/ModalExport.svg"
          alt="나가기 이미지"
          left="568px"
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
        deviceInfo.map((info) => (
          <S.deviceCon key={info.key}>
            <S.deviceType>{info.type}</S.deviceType>
            <S.deviceCnt>{(deviceData as any)[info.key]}개</S.deviceCnt>
            <S.deviceSubm>제출</S.deviceSubm>
            <S.ChangeCircle
              color={"#709FBF"}
              top={"9px"}
              left={"398px"}
            ></S.ChangeCircle>
          </S.deviceCon>
        ))
      )}
      <S.BtnContainer>
        <S.ModalBtn type="submit" value={"디바이스 변경"}/>
        <S.ModalBtn type="submit" value={"확인"}/>
      </S.BtnContainer>
    </S.deviceSettings>
  );
};
