// style.ts

import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DashboardContainer = styled.div`
  margin: 3vw 16vw;
  width: 1362px;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const TotalStudentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 20px;
  border-right: 1px solid #cccccc;
  margin-right: 20px;
`;

export const FontLabel = styled.p`
  font-size: 24px;
  color: #000;
  margin-bottom: 5px;
`;

export const NumberLabel = styled.div`
  font-weight: bold;
  font-size: 64px;
  color: #000;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-top: 20px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const SearchLabel = styled.div`
  font-size: 16px;
  color: #000;
  margin-right: 10px;
`;

export const SearchIcon = styled.div`
  font-size: 16px;
  color: #000;
`;

export const DropdownLabel = styled.div`
  font-size: 16px;
  color: #000;
  margin-right: 10px;
`;

export const SearchInput = styled.input`
  width: 447px;
  height: 26px;
  padding: 5px;
  border: 1px solid #cccccc;
  border-radius: 50px;
  margin-left: 40px;
  padding-left: 10px;
`;

export const StatusDropdown = styled.select`
  width: 458px;
  height: 34px;
  padding: 5px;
  border: 1px solid #cccccc;
  border-radius: 50px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ListContainer = styled.div`
  width: 1400px;
  height: 450px;
  display: flex;
  flex-direction: column;
  margin: 3vw 16vw;
  background-color: #ffffff;
  box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 50px;
`;

export const ListLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ListItem = styled.div`
  height: 30px;
  display: flex;
  padding: 20px;
  margin-left: 30px;
`;

export const ListItemLabel = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  width: 180px;
  margin-left: 27px;
  border-right: 1px solid #cccccc;
  border-left: 1px solid #cccccc;
  color: #000;
`;

export const ListItemStatus = styled.div`
  display: flex;
  align-items: center;
`;

export const StatusDot = styled.div<{ submitted: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ submitted }) => (submitted ? '#007bff' : '#ff0000')};
  margin-left: 10px;
`;

export const ListRightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 40px 10px 40px;
    width: 2500px
`;

export const RightContainer = styled.div`
  width: 1300px;
  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px 10px;
  margin-left: 20px;
`;

export const RightItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 70px 10px 70px;
  border: 1px solid #000;
  border-radius: 10px;
  margin: 10px;
`;

export const RightItemLabel = styled.div`
    display: flex;
  font-size: 18px;
  color: #000;
  text-align: left; /* 텍스트를 왼쪽 정렬로 설정 */
`;

export const RightItemStatus = styled.div`
  display: flex;
  align-items: center;
`;

export const RightStatusDot = styled.div<{ submitted: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ submitted }) => (submitted ? '#007bff' : '#ff0000')};
  margin: 7px 0px 0px 10px;
`;

export const BarContainer = styled.div`
  width: 100%;
  height: 20px;
  width: 2800px;
  margin: 3vw 16vw;
  position: relative;
`;

export const Bar = styled.div<{ color: string; length: number }>`
  position: absolute;
  height: 100%;
  background-color: ${({ color }) => color};
  width: ${({ length }) => `${length}%`};
  z-index: ${({ length }) => length};
  border-radius: 10px; /* Optional: Add border-radius for rounded corners */
`;

