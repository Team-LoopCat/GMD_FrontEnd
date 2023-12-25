import React from 'react';
import Nav from '../../components/common/navBar/index';
import myImage from '../../assets/icon/폰검사자1.png';
import * as Styled from './style';

const CheckPage: React.FC = () => {
  return (
    <div>
        <Nav />
      <Styled.Img src={myImage}/>
    </div>
  );
};

export default CheckPage;
