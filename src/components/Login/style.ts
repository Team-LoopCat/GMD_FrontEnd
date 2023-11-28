import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const LogoLeft = styled.div`
  box-sizing: border-box;
  width: 40.80801vw;
  height: 100vh;
  background-color: #31556e;
  float: left;
  box-shadow: 5px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const LoginLogo = styled.img`
  width: 21.8349vw;
  height: 34.7222vh;
  position: absolute;
  left: 9.7917vw;
  top: 29.537vh;
`;

export const LoginRight = styled.div`
  width: 56.1616vw;
  height: 100vh;
  float: left;
`;

export const LoginForm = styled.form`
  width: 23.4343vw;
  height: 42.963vh;
  position: relative;
  top: 29.6296vh;
  left: 16.4583vw;
`;

export const Login = styled.div`
  width: 14.0909vw;
  height: 11.2037vh;
  font-size: 5.2083vw;
  color: #2c4251;
  text-align: center;
  font-family: Inter;
  font-weight: 1000;
  position: relative;
  left: 4.7vw;
`;

export const LoginID = styled.input`
  width: 19.0909vw;
  height: 5vh;
  border: none;
  border-radius: 1.0417vw;
  box-shadow: 0px 2px 4px 1px rgba(46, 36, 110, 0.25);
  padding: 0 0.4167vw;
  position: relative;
  top: 5.0926vh;
  left: 2.0313vw;
  &::placeholder {
    color: #909090;
    font-family: SUIT Variable;
    font-size: 0.8333vw;
    font-style: normal;
    font-weight: 400;
    position: relative;
    left: 0.1042vw;
  }
`;

export const LoginPw = styled.input`
  width: 19.0909vw;
  height: 5vh;
  border: none;
  border-radius: 1.0417vw;
  box-shadow: 0px 2px 4px 1px rgba(46, 36, 110, 0.25);
  padding: 0 0.4167vw;
  position: absolute;
  top: 25.463vh;
  left: 2.0313vw;
  &::placeholder {
    color: #909090;
    font-family: SUIT Variable;
    font-size: 0.8333vw;
    font-style: normal;
    position: relative;
    left: 0.1042vw;
  }
`;

export const LoginBtn = styled.input`
  color: #fff;
  text-align: center;
  font-family: Jua;
  font-size: 1.5625vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  width: 19.0909vw;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 1.0417vw;
  border: 1px solid #2c4251;
  background: #2c4251;
  position: absolute;
  top: 33.6111vh;
  left: 2.3vw;
`;

export const PWBtn = styled.img`
width: 1.3021vw;
  position: absolute;
  left: 19.0104vw;
  top: 26.7593vh;
  &:hover {
    cursor: pointer;
  }
`;
