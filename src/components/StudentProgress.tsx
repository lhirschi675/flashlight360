import React from "react";
import "./StudentProgress.css";

type Student = {
  id: string;
  name: string;
  grade: number;
};

const getProgressColor = (grade: number) => {
  if (grade <= 25) return "progress-red";
  if (grade <= 65) return "progress-yellow";
  return "progress-green";
};

const StudentProgress: React.FC<{ studentInfo: Student }> = ({
  studentInfo,
}) => {
  const progressColor = getProgressColor(studentInfo.grade);
  console.log(studentInfo, "THIS SHOULD BE SOMETHING");
  return (
    <div className="student-card">
      <img
        src={`/uploads/${studentInfo.id}-profile.jpeg`}
        alt={studentInfo.name}
        className="student-avatar"
      />

      <div className="student-details">
        <h2 className="student-name">
          {studentInfo.name + "  " + String(studentInfo.grade) + "%"}
        </h2>
        <div className="progress-bar-bg">
          <div
            className={`progress-bar-fill ${progressColor}`}
            style={{ width: `${studentInfo.grade}%` }}
          ></div>
        </div>
      </div>

      <div className="student-actions">
        <button className="student-button">View</button>
        <button className="student-button">Grade</button>
      </div>
    </div>
  );
};

export default StudentProgress;
