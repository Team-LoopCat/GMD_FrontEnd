import React, { useState } from "react";
import * as S from "../style";

export const AddDelDevice = () => {
  const AddDevice = ["핸드폰", "학교노트북", "개인노트북", "태블릿"];

  const initialCountState = AddDevice.reduce(
    (obj, device) => ({ ...obj, [device]: 0 }),
    {}
  );

  const [count, setCount] = useState<Record<string, number>>(initialCountState);

  const handleIncrease = (value: string) => {
    setCount({ ...count, [value]: count[value] + 1 });
  };

  const handleDecrease = (value: string) => {
    if (count[value] > 0) {
      setCount({ ...count, [value]: count[value] - 1 });
    }
  };
  
  return (
    <S.addDelDeivce>
      <S.deviceHeader width={"862px"}>
        <S.deviceTitle>디바이스 추가/삭제</S.deviceTitle>
        <S.deviceImg
          src="./img/DeviceSettings.svg"
          alt="세부사항 이미지"
          left="253px"
          top="27px"
        />
        <S.deviceImg
          src="./img/ModalExport.svg"
          alt="나가기 이미지"
          left="770px"
          top="33px"
        />
      </S.deviceHeader>
      <S.deviceSTitle>디바이스 추가/삭제</S.deviceSTitle>
      <S.AddSCon width={"532px"} height={"90px"} left={"120px"} top={"120px"}>
        {AddDevice.map((value, index) => (
          <React.Fragment key={index}>
            <S.AddsubCon width={"132px"} height={"90px"}>
              <S.AddsubTitle>{value}</S.AddsubTitle>
              <S.AddsubCon width={"66.462px"} height={"18px"}>
                <S.AddsubImg
                  src="./img/minus.svg"
                  onClick={() => handleDecrease(value)}
                />
                <S.AddsubValue>{count[value]}</S.AddsubValue>
                <S.AddsubImg
                  src="./img/plus.svg"
                  onClick={() => handleIncrease(value)}
                />
              </S.AddsubCon>
            </S.AddsubCon>
          </React.Fragment>
        ))}
      </S.AddSCon>
      <S.AddSCon width={"143px"} height={"44px"} left={"690px"} top={"180px"}>
        <S.ModalBtn type="submit" value={"변경사항 저장"} />
      </S.AddSCon>
    </S.addDelDeivce>
  );
};
