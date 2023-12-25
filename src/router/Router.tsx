import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from "../components/common/navBar";
// import Button from "../components/common/button"
import { LoginPage } from "../components/pages/LoginPage/index";
import {Filter} from '../components/modal/Filter/index'
import { ChangeStatus } from '../components/modal/ChangeStatus/index';
import { DeviceSettings } from '../components/modal/DeviceSettings/index';
import { AddDelDevice } from '../components/modal/AddDelDevice/index';
import { DelStudentModal } from './../components/modal/DelStudentModal/index';
import { MainPage } from '../components/pages/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path='/Filter' element={<Filter/>} />
        <Route path='/ChangeStatus' element={<ChangeStatus/>} />
        <Route path='/DeviceSettings' element={<DeviceSettings/>} />
        <Route path='/AddDelDevice' element={<AddDelDevice/>} />
        <Route path='/DelStudent' element={<DelStudentModal/>} />
        <Route path='/MainPage' element={<MainPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
