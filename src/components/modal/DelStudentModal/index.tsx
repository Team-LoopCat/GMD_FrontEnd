import React from "react";
import * as S from "../style";

export const DelStudentModal = () => {
  return (
    <S.DelStudent>
      <S.DelStudentImgDiv>
      <S.DelStudentImg src="./img/delStudentImg.svg" alt="DeleteStudent"/>
      </S.DelStudentImgDiv>
      <S.WarningMessage>정말 삭제하시겠습니까?</S.WarningMessage>
      <S.BtnContainer>
        <S.ModalBtn type="submit" value={"취소"}/>
        <S.ModalBtn type="submit" value={"확인"}/>
      </S.BtnContainer>
    </S.DelStudent>
  );
};
