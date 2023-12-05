import React, { useState } from 'react';
import * as S from './style';

export const  LoginCom = () => {
 const [passwordShown, setPasswordShown] = useState(false);

 const handlePasswordToggle = () => {
   setPasswordShown(!passwordShown);
 };

 return (
   <S.Container>
     <S.LogoLeft>
       <S.LoginLogo src='./img/LoginLogo.svg' alt='Login_Imgage'/>
     </S.LogoLeft>
     <S.LoginRight>
       <S.LoginForm>
         <S.Login>Login</S.Login>
         <S.LoginID type='' placeholder='Email or ID'/>
         <S.LoginPw type={passwordShown ? 'text' : 'password'} placeholder='Password'/>
         <S.PWBtn src='./img/PasswordBtn.svg' onClick={handlePasswordToggle}/>
         <S.LoginBtn type='submit' value={"Login"}/>
       </S.LoginForm>
     </S.LoginRight>
   </S.Container>
 );
}
