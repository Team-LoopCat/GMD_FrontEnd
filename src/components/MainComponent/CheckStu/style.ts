import styled from "styled-components";

export const CheckStuCon = styled.div`
  width: 250px;
  height: 528px;
  border-radius: 20px;
  box-shadow: 4px 4px 25px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  left: 1508px;
  bottom: 330px;
`;

export const CheckStuSubCon = styled.div<{ top: string }>`
  width: 170px;
  height: 160px;
  position: relative;
  top: ${(props) => props.top};
  left: 29px;
`;

export const CheckStuTitle = styled.div`
  color: #000;
  font-family: SUIT Variable;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CheckSubCon = styled.div`
  width: 170px;
  height: 25px;
  display: flex;
  justify-content: space-between;
  margin: 13px 0px 13px 0px;
`;

export const CheckSub = styled.div`
  color: #000;
  font-family: SUIT Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CheckStuName = styled.div`
  color: #000;
  font-family: SUIT Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
`;

export const CheckLine = styled.hr`
  position: relative;
  top: 100px;
  border: none;
  border-top: 1px solid black;
`;
