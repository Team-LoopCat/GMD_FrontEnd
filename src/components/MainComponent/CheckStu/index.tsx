import React from "react";
import * as S from "./style";

interface CheckSubConProps {
  grade: string;
  names: string;
}

const CheckSubCon: React.FC<CheckSubConProps> = ({ grade, names }) => (
  <S.CheckSubCon>
    <S.CheckSub>{grade}</S.CheckSub>
    <S.CheckStuName>{names}</S.CheckStuName>
  </S.CheckSubCon>
);

interface CheckStuSubConProps {
  gender: string;
  top: string;
  students: CheckSubConProps[];
}

const CheckStuSubCon: React.FC<CheckStuSubConProps> = ({ gender, top, students }) => (
  <S.CheckStuSubCon top={top}>
    <S.CheckStuTitle>{gender}</S.CheckStuTitle>
    {students.map((student, index) => (
      <CheckSubCon key={index} grade={student.grade} names={student.names} />
    ))}
  </S.CheckStuSubCon>
);

export const CheckStu: React.FC = () => {
  const maleStudents = [
    { grade: "1학년", names: "오송주, 이태윤" },
    { grade: "2학년", names: "이태윤, 오송주" },
    { grade: "3학년", names: "오송주, 유연준" },
  ];

  const femaleStudents = [
    { grade: "1학년", names: "사람인, 인사람" },
    { grade: "2학년", names: "윤태이, 주송오" },
    { grade: "3학년", names: "안녕이, 준연유" },
  ];

  return (
    <S.CheckStuCon>
      <CheckStuSubCon gender="남자" top="63px" students={maleStudents} />
      <S.CheckLine />
      <CheckStuSubCon gender="여자" top="125px" students={femaleStudents} />
    </S.CheckStuCon>
  );
};
