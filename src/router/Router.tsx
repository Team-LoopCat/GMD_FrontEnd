import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../components/pages/LoginPage";
import Navbar from "../components/common/navBar";
import Button from "../components/common/button"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
