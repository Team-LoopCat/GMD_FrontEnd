import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { instance } from "../../apis/admin/axios";
import { LoginURL } from "../../apis/admin/Login/index";

export const LoginCom = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlePasswordToggle = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await instance.post(LoginURL, {
        userName: userName,
        password: password,
      });
      console.log(response.data);
      localStorage.setItem("access-token", response.data.accessToken);
      navigate("/mainPage");
    } catch (error) {
      alert("로그인이 실패되었습니다.");
    }
  };

  return (
    <S.Container>
      <S.LogoLeft>
        <S.LoginLogo src="./img/LoginLogo.svg" alt="Login_Imgage" />
      </S.LogoLeft>
      <S.LoginRight>
        <S.LoginForm onSubmit={handleSubmit}>
          <S.Login>Login</S.Login>
          <S.LoginID
            type="text"
            placeholder="Email or ID"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <S.LoginPw
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.PWBtn src="./img/PasswordBtn.svg" onClick={handlePasswordToggle} />
          <S.LoginBtn type="submit" value={"Login"} />
        </S.LoginForm>
      </S.LoginRight>
    </S.Container>
  );
};
