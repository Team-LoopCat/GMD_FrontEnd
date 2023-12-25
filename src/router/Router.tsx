import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../components/Login/index";
import Navbar from "../components/common/navBar";
import Button from "../components/common/button"
import ListPage from "../pages/ListPage"
import CheckPage from "../pages/PhoneCheckerAddPage"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/Navbar" element={<Navbar/>}/>
        <Route path="/Button" element={<Button/>}/>
        <Route path="/ListPage" element={<ListPage/>}/>
        <Route path="/CheckPage" element={<CheckPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
