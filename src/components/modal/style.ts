import styled from "styled-components";

// Modal

export const ModalBtn = styled.input`
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

export const ChangeCircle = styled.div<{ top: string; left: string }>`
  width: 11px;
  height: 11px;
  border: 1px solid black;
  border-radius: 100%;
  position: relative;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background-color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
  }
`;

// DelStudentModal

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

export const BtnContainer = styled.div<{ top: string; left: string }>`
  width: 528px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  position: relative;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
`;

// ChangeStatus

export const changeStatus = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: 232px;
  border-radius: 17px;
  border: 1px solid #000;
  row-gap: 100px;
`;

export const ChangeCon = styled.div`
  width: 110px;
  height: 25px;
  position: relative;
  top: 5px;
  left: 20px;
  margin: 10px 0px 10px 0px;
`;

export const ChangeValue = styled.div`
  width: 95px;
  position: relative;
  left: 15px;
  bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`;

// Device

export const deviceHeader = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: 54px;
  border-radius: 20px 20px 0px 0px;
  background: #31556e;
`;

export const deviceTitle = styled.div`
  color: #fff;
  font-family: SUIT Variable;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: relative;
  left: 20px;
  top: 4px;
`;

export const deviceImg = styled.img<{ left: string; top: string }>`
  position: relative;
  bottom: ${(props) => props.top};
  left: ${(props) => props.left};
`;

export const deviceSTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: SUIT Variable;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: relative;
  top: 39px;
`;

// DeviceSettings

export const deviceSettings = styled.div`
  width: 615px;
  height: 730px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  left: 652.5px;
  top: 175px;
`;

export const deviceCon = styled.div`
  width: 408px;
  height: 41px;
  padding: 17px 0px 17px 0px;
  position: relative;
  top: 91px;
  left: 104px;
`;

export const deviceName = styled.div`
  width: 141px;
  color: #5a5a5a;
  font-family: SUIT Variable;
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const deviceValue = styled.div`
  width: 192px;
  height: 41px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #5a5a5a;
  font-family: SUIT Variable;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-align: center;
  border-radius: 10px;
  background: #e2eff7;
  position: relative;
  left: 216px;
  bottom: 37.6125px;
`;

export const deviceType = styled.div`
  width: 132px;
  color: #5a5a5a;
  font-family: SUIT Variable;
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  position: absolute;
`;

export const deviceCnt = styled.div`
  width: 50px;
  color: #000;
  font-family: SUIT Variable;
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  position: absolute;
  left: 170px;
`;

export const deviceSubm = styled.div`
  width: 42px;
  color: #000;
  font-family: SUIT Variable;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  position: absolute;
  left: 350px;
  &:hover {
    cursor: pointer;
  }
`;

// AddDelDevice

export const addDelDeivce = styled.div`
  width: 862px;
  height: 430px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const AddsubCon = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  left: 5px;
`;

export const AddsubTitle = styled.div`
  width: 132px;
  text-align: center;
  color: #5a5a5a;
  font-family: SUIT Variable;
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
export const AddsubImg = styled.img`
  width: 18px;
  height: 18px;
  &:hover {
    cursor: pointer;
  }
`;

export const AddsubValue = styled.div`
  color: #000;
  font-family: SUIT Variable;
  font-size: 13.846px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const AddSCon = styled.label<{
  width: string;
  height: string;
  left: string;
  top: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 100px;
  display: flex;
  column-gap: 25px;
  position: relative;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
`;
