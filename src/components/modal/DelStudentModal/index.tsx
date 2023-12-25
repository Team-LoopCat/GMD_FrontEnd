import React from "react";
import * as S from "../style";
import { useNavigate } from "react-router-dom";

export const DelStudentModal = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/ListPage");
  };

  const handleDelelte

  return (
    <S.DelStudent>
      <S.DelStudentImgDiv>
        <S.DelStudentImg src="./img/delStudentImg.svg" alt="DeleteStudent" />
      </S.DelStudentImgDiv>
      <S.WarningMessage>정말 삭제하시겠습니까?</S.WarningMessage>
      <S.BtnContainer top={"0px"} left={"10px"}>
        <S.ModalBtn type="submit" value={"취소"} onClick={handleNavigate} />
        <S.ModalBtn type="submit" value={"확인"} onClick={handleDelelte} />
      </S.BtnContainer>
    </S.DelStudent>
  );
};
