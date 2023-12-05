import styled from "styled-components";

export const DelStudent = styled.div`
  width: 862px;
  height: 430px;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 325px;
  left: 529px;
`;

export const DelStudentImgDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const DelStudentImg = styled.img`
  width: 112px;
  height: 99px;
`;

export const WarningMessage = styled.div`
  color: #000;
  text-align: center;
  font-family: SUIT Variable;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const BtnContainer = styled.div`
  width: 528px;
  height: 45px;
  display: flex;
  justify-content: space-between;
`;

export const DelStudentBtn = styled.input`
  width: 143px;
  height: 44px;
  border-radius: 20px;
  background: #31556e;
  color: #fff;
  font-family: SUIT Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: 0px 2px 4px 1px rgba(46, 36, 110, 0.25);
  }
`;
