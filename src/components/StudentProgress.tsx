import React from "react";
import "./StudentProgress.css";

type Student = {
  id: string;
  name: string;
  progress: number;
};

const getProgressColor = (progress: number) => {
  if (progress <= 25) return "progress-red";
  if (progress <= 65) return "progress-yellow";
  return "progress-green";
};

const StudentProgress: React.FC<{ studentInfo: Student }> = ({
  studentInfo,
}) => {
  const progressColor = getProgressColor(studentInfo.progress);

  return (
    <div className="student-card">
      <img
        src={`/uploads/${studentInfo.id}-profile.jpeg`}
        alt={studentInfo.name}
        className="student-avatar"
      />

      <div className="student-details">
        <h2 className="student-name">
          {studentInfo.name + "  " + studentInfo.progress + "%"}
        </h2>
        <div className="progress-bar-bg">
          <div
            className={`progress-bar-fill ${progressColor}`}
            style={{ width: `${studentInfo.progress}%` }}
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
