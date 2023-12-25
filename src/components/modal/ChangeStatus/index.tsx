import React from "react";
import * as S from "../style";

export const ChangeStatus = () => {
  const statusList = [
    "선택 안 함",
    "제출 완료",
    "미제출",
    "일부 미제출",
    "공기계",
    "외박 / 자습",
  ];

  const statusColors: { [key: string]: string } = {
    "선택 안 함": "#ffffff",
    "제출 완료": "#5B819A",
    미제출: "#8CC0E4",
    "일부 미제출": "#A4D5F6",
    공기계: "#A4D5F6",
    "외박 / 자습": "#E2EFF7",
  };

  return (
    <S.changeStatus width={"146px"}>
      {statusList.map((status, index) => (
        <React.Fragment key={index}>
          <S.ChangeCon>
            <S.ChangeCircle
              color={statusColors[status]}
              top={"7px"}
              left={"0px"}
            ></S.ChangeCircle>
            <S.ChangeValue>{status}</S.ChangeValue>
          </S.ChangeCon>
        </React.Fragment>
      ))}
    </S.changeStatus>
  );
};
