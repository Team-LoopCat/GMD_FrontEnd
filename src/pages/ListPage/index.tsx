import React, { useState, useEffect } from "react";
import * as Styled from "./style"; // 스타일드 컴포넌트에 따른 import
import Nav from "../../components/common/navBar";
import { DelStudentModal } from "../../components/modal/DelStudentModal/index";
import { DeviceSettings } from "../../components/modal/DeviceSettings/index";
import { useNavigate } from "react-router-dom";

interface Student {
  studentId: string;
  name: string;
  lockerNumber: string;
  submitted: boolean;
}

const Dashboard: React.FC = () => {
  const [studentsData, setStudentsData] = useState<Student[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [submissionStatus, setSubmissionStatus] = useState<string>("none");

  const navigate = useNavigate();

  const handleDeviceSettings = () => {
    navigate("/DeviceSettings");
  };

  const handleDelStudentModal = () => {
    navigate("/DelStudentModal");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API에서 학생 데이터 가져오기
        // const response = await fetch('YOUR_API_ENDPOINT_HERE');
        // const data = await response.json();
        // setStudentsData(data);

        // 테스트용 플레이스홀더 데이터
        setStudentsData([
          {
            studentId: "1101",
            name: "오송주",
            lockerNumber: "111",
            submitted: true,
          },
          {
            studentId: "1102",
            name: "김강민",
            lockerNumber: "110",
            submitted: false,
          },
          {
            studentId: "1103",
            name: "홍서은",
            lockerNumber: "109",
            submitted: true,
          },
          {
            studentId: "1104",
            name: "이태윤",
            lockerNumber: "108",
            submitted: false,
          },
          {
            studentId: "1105",
            name: "권민휘",
            lockerNumber: "107",
            submitted: true,
          },
        ]);
      } catch (error) {
        console.error("데이터 가져오기 오류:", error);
      }
    };

    fetchData();
  }, []); // 빈 의존성 배열은 useEffect가 componentDidMount처럼 한 번만 실행되도록 함

  const getStatusColor = (student: Student) => {
    if (student.submitted) {
      if (student.lockerNumber === "airplane") {
        return "#A4D5F6"; // 공기계 의심
      } else if (student.lockerNumber === "overnight") {
        return "#E2EFF7"; // 외박/자습
      } else {
        return "#5B819A"; // 제출
      }
    } else {
      return "#8CC0E4"; // 미제출
    }
  };

  const getStatusLength = (student: Student) => {
    if (student.lockerNumber === "airplane") {
      return 80; // 공기계 의심 길이
    } else if (student.submitted) {
      return 50; // 제출 길이
    } else {
      return 30; // 미제출 길이
    }
  };

  const filteredStudents = studentsData.filter(
    (student) =>
      student.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (submissionStatus === "none" ||
        (student.submitted && submissionStatus === "submitted") ||
        (!student.submitted && submissionStatus === "unsubmitted"))
  );

  return (
    <Styled.DashboardWrapper>
      <Nav />
      <Styled.DashboardContainer>
        <Styled.TotalStudentsContainer>
          <Styled.FontLabel>전체 인원수</Styled.FontLabel>
          <Styled.NumberLabel>{filteredStudents.length}</Styled.NumberLabel>
        </Styled.TotalStudentsContainer>

        <Styled.TotalStudentsContainer>
          <Styled.FontLabel>제출 인원수</Styled.FontLabel>
          <Styled.NumberLabel>
            {filteredStudents.filter((student) => student.submitted).length}
          </Styled.NumberLabel>
        </Styled.TotalStudentsContainer>

        <Styled.TotalStudentsContainer>
          <Styled.FontLabel>미제출 인원수</Styled.FontLabel>
          <Styled.NumberLabel>
            {filteredStudents.filter((student) => !student.submitted).length}
          </Styled.NumberLabel>
        </Styled.TotalStudentsContainer>

        <Styled.SearchContainer>
          <Styled.SearchWrapper>
            <Styled.SearchLabel>검색</Styled.SearchLabel>
            <Styled.SearchInput
              placeholder="학생 이름/사물함 번호를 입력하세요"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Styled.SearchWrapper>
          <Styled.SearchWrapper>
            <Styled.DropdownLabel>제출상태</Styled.DropdownLabel>
            <Styled.StatusDropdown
              value={submissionStatus}
              onChange={(e) => setSubmissionStatus(e.target.value)}
            >
              <option value="none">선택 안함</option>
              <option value="submitted">제출 완료</option>
              <option value="unsubmitted">미제출</option>
              <option value="partialUnsubmitted">일부 미제출</option>
              <option value="airplane">공기계</option>
              <option value="overnight">외박/자습</option>
            </Styled.StatusDropdown>
          </Styled.SearchWrapper>
        </Styled.SearchContainer>
      </Styled.DashboardContainer>

      <Styled.ListContainer>
        <Styled.ListLeftContainer>
          <Styled.ListItem>
            <Styled.ListItemLabel>학번</Styled.ListItemLabel>
            <Styled.ListItemLabel>이름</Styled.ListItemLabel>
            <Styled.ListItemLabel>사물함 번호</Styled.ListItemLabel>
            <Styled.ListItemLabel>제출상태</Styled.ListItemLabel>
            <Styled.ListItemLabel>디바이스 조회</Styled.ListItemLabel>
            <Styled.ListItemLabel>학생 조회</Styled.ListItemLabel>
          </Styled.ListItem>
        </Styled.ListLeftContainer>

        <Styled.ListRightWrapper>
          <Styled.RightContainer>
            {filteredStudents.map((student) => (
              <Styled.RightItem key={student.studentId}>
                <Styled.RightItemLabel>
                  {student.studentId}
                </Styled.RightItemLabel>
                <Styled.RightItemLabel>{student.name}</Styled.RightItemLabel>
                <Styled.RightItemLabel>
                  {student.lockerNumber}
                </Styled.RightItemLabel>
                <Styled.RightItemLabel>
                  {student.submitted
                    ? "제출"
                    : student.lockerNumber === "airplane"
                    ? "공기계 의심"
                    : student.lockerNumber === "overnight"
                    ? "외박/자습"
                    : "미제출"}
                  <Styled.RightStatusDot submitted={student.submitted} />
                </Styled.RightItemLabel>
                <Styled.RightItemLabel onClick={handleDeviceSettings}>
                  디바이스 조회
                </Styled.RightItemLabel>
                <Styled.RightItemLabel onClick={handleDelStudentModal}>
                  학생 조회
                </Styled.RightItemLabel>
              </Styled.RightItem>
            ))}
          </Styled.RightContainer>
        </Styled.ListRightWrapper>
      </Styled.ListContainer>

      <Styled.BarContainer>
        {/* Bar 컴포넌트 */}
        {filteredStudents.map((student) => (
          <Styled.Bar
            key={student.studentId}
            color={getStatusColor(student)}
            length={getStatusLength(student)}
          />
        ))}
      </Styled.BarContainer>
    </Styled.DashboardWrapper>
  );
};

export default Dashboard;
