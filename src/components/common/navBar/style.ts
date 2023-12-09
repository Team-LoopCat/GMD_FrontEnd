import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 6vw;
  background-color: #31556E;
  color: #FFFFFF;
  padding: 2vw;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
`;

export const LogoContainer = styled.div`
  margin-top: 2vh;
  margin-bottom: 0;
`;

export const NavIcon = styled.div`
  margin-top: 5vh;
  cursor: pointer;
  position: relative;
`;

export const HighlightBox = styled.div`
  position: absolute;
  top: -1.7vh;
  left: -4vw;
  bottom: -0.5vh;
  width: 1.1vw;
  height: 8vh;
  background-color: #24B663;
  border-radius: 0 1vw 1vw 0;
`;

export const IconWrapper = styled.div`
  display: flex;
`;

export const LogoutWrapper = styled.div`
  margin-top: 10vh;
  cursor: pointer;
`;
