import React, { useState } from "react";
import * as S from "./style";
import { ReactComponent as ListIcon } from "../../../assets/icon/list.svg";
import { ReactComponent as CListIcon } from "../../../assets/icon/Clist.svg";
import { ReactComponent as CGraphIcon } from "../../../assets/icon/Cgraph.svg";
import { ReactComponent as GraphIcon } from "../../../assets/icon/Graph.svg";
import { ReactComponent as AdditionIcon } from "../../../assets/icon/addition.svg";
import { ReactComponent as CAdditionIcon } from "../../../assets/icon/CAddition.svg";
import { ReactComponent as LogoIcon } from "../../../assets/icon/GMDLogo.svg";
import { ReactComponent as Logout } from "../../../assets/icon/logout.svg";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
 const [activeIcon, setActiveIcon] = useState("graph");
 const navigate = useNavigate();

 const handleIconClick = (iconType: string) => {
  setActiveIcon(iconType);
  if (iconType === "graph") {
    navigate("/MainPage");
  } else if (iconType === "list") {
    navigate("/ListPage");
  } else if (iconType === "addition") {
    navigate("/CheckPage");
  }
 };

 return (
  <S.NavContainer>
    <S.LogoContainer>
      <LogoIcon />
    </S.LogoContainer>
    <div>
      <S.NavIcon onClick={() => handleIconClick("graph")}>
        {activeIcon === "graph" && <S.HighlightBox />}
        <S.IconWrapper>
          {activeIcon === "graph" ? <CGraphIcon /> : <GraphIcon />}
        </S.IconWrapper>
      </S.NavIcon>
      <S.NavIcon onClick={() => handleIconClick("list")}>
        {activeIcon === "list" && <S.HighlightBox />}
        <S.IconWrapper>
          {activeIcon === "list" ? <CListIcon /> : <ListIcon />}
        </S.IconWrapper>
      </S.NavIcon>
      <S.NavIcon onClick={() => handleIconClick("addition")}>
        {activeIcon === "addition" && <S.HighlightBox />}
        <S.IconWrapper>
          {activeIcon === "addition" ? <CAdditionIcon /> : <AdditionIcon />}
        </S.IconWrapper>
      </S.NavIcon>
    </div>

    <S.LogoutWrapper>
      <Logout />
    </S.LogoutWrapper>
  </S.NavContainer>
 );
};

export default Navbar;
