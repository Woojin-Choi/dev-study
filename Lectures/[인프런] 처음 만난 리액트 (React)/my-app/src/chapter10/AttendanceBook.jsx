import React from "react";

const students = [
  {
    name: "Inje",
    id: "1",
  },
  {
    name: "Steve",
    id: "2",
  },
  {
    name: "Bill",
    id: "3",
  },
  {
    name: "Jeff",
    id: "4",
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student, index) => {
        return <li key={`student-id-${student.id}`}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;
