import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 4.5vw;
  background-color: #31556E;
  color: #FFFFFF;
  padding: 2vw;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  margin-right: 10px;
`;

export const LogoContainer = styled.div`
  margin-top: 2vh;
  margin-bottom: 8vh;
`;

export const NavIcon = styled.div`
  margin-top: 5vh;
  cursor: pointer;
  position: relative;
`;

export const HighlightBox = styled.div`
  position: absolute;
  top: -2.5vh;
  left: -4vw;
  bottom: -0.5vh;
  width: 1.3vw;
  height: 8.5vh;
  background-color: #24B663;
  border-radius: 12px;
`;

export const IconWrapper = styled.div`
  display: flex;
  margin-bottom: 5vh;
`;

export const LogoutWrapper = styled.div`
  margin-top: 30vh;
  cursor: pointer;
`;
