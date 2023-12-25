import styled from "styled-components";

export const DoughnutCon = styled.div`
  width: 59.1146vw;
  height: 48.8889vh;
  border-radius: 20px;
  box-shadow: 4px 4px 25px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  left: 17.0833vw;
  top: 18.5185vh;
`;

export const ChartCon = styled.div`
  width: 20.8333vw;
  height: 20.8333vw;
  position: relative;
  top: 64px;
  left: 164.3px;
`;

export const ChartRight = styled.div`
  width: 11.2349vw;
  height: 25.6481vh;
  position: relative;
  bottom: 27.7778vh;
  left: 39.112vw;
`;

export const ChartRightSub = styled.div`
  width: 215.71px;
  height: 37px;
  margin: 2.1296vh 0px 2.1296vh 0px;
`;

export const ChartColorBox = styled.div<{ color: string }>`
  width: 1.3021vw;
  height: 1.3021vw;
  border-radius: 5px;
  background: ${(props) => props.color};
  position: relative;
  top: 5px;
`;

export const ChartColorTitle = styled.div`
  width: 7.2974vw;
  height: 3.4259vh;
  color: #000;
  font-family: SUIT Variable;
  font-size: 1.5625vw;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  position: relative;
  left: 50.4px;
  bottom: 3.2407vh;
`;
