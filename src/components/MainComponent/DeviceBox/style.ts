import styled from "styled-components";

export const deiviceBox = styled.div`
  width: 74.4792vw;
  height: 23.1481vh;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 10vh;
  left: 17.0833vw;
`;

export const DeviceCon = styled.div`
  width: 13.0208vw;
  height: 13.0208vw;
  border-radius: 25px;
  box-shadow: 4px 4px 25px 0px rgba(0, 0, 0, 0.25);
`;

export const DeviceImg = styled.img`
  width: 40px;
  height: 40px;
  @media screen and (max-width: 1700px) {
    width: 35.417px;
    height: 35.417px;
  }

  @media screen and (max-width: 1575px) {
    width: 31.25px;
    height: 31.25px;
  }

  @media screen and (max-width: 1428px) {
    width: 27.083px;
    height: 27.083px;
  }

  @media screen and (max-width: 1294px) {
    width: 22.917px;
    height: 22.917px;
  }

  @media screen and (max-width: 1200px) {
    width: 16.667px;
    height: 16.667px;
  }

  @media screen and (max-width: 1067px) {
    width: 12.5px;
    height: 12.5px;
  }
  position: relative;
  top: 27px;
  left: 27px;
`;

export const DeviceTitle = styled.div`
  width: 139px;
  position: relative;
  top: 50px;
  left: 27px;
  color: #000;
  font-family: SUIT Variable;
  font-size: 30px;
  @media screen and (max-width: 1700px) {
    font-size: 26.563px;
  }

  @media screen and (max-width: 1575px) {
    font-size: 23.438px;
  }

  @media screen and (max-width: 1428px) {
    font-size: 20.313px;
  }

  @media screen and (max-width: 1294px) {
    font-size: 17.188px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 12.5px;
  }

  @media screen and (max-width: 1067px) {
    font-size: 9.375px;
  }
  font-style: normal;
  font-weight: 200;
  line-height: normal;
`;

export const DeviceAllCnt = styled.div`
  width: 103px;
  color: #000;
  font-family: SUIT Variable;
  font-size: 64px;
  @media screen and (max-width: 1700px) {
    font-size: 56.667px;
  }

  @media screen and (max-width: 1575px) {
    font-size: 50px;
  }

  @media screen and (max-width: 1428px) {
    font-size: 43.333px;
  }

  @media screen and (max-width: 1294px) {
    font-size: 36.667px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 26.667px;
  }

  @media screen and (max-width: 1067px) {
    font-size: 20px;
  }
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: relative;
  top: 60px;
  left: 27px;
`;
