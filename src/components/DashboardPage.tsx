import React, { useState } from "react";
import "./Dashboard.css";
import type { Student } from "../types/student";
import MyCalendar from "./MyCalendar";
import { FaUsers, FaAward, FaExclamationCircle } from "react-icons/fa";
import StudentProgress from "./StudentProgress";

type Props = {
  studentDataFetch: Student[];
  setStudentDataFetch: React.Dispatch<React.SetStateAction<Student[]>>;
};

const DashboardPage: React.FC<Props> = ({ studentDataFetch }) => {
  const [selectedCourse, setSelectedCourse] = useState("Course 1");

  return (
    <div className="dashboard-container">
      <div className="dropdown-container select-wrapper">
        <select
          id="courseSelect"
          className="course-select"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option>Course 1</option>
          <option>Course 2</option>
          <option>Course 3</option>
        </select>
      </div>

      <div className="summary-cards">
        <div className="card">
          Total Students: {studentDataFetch.length}
          <FaUsers style={{ marginLeft: "20px", fontSize: "1.5em" }} />
        </div>
        <div className="card">
          Total Lessons: 12
          <FaAward style={{ marginLeft: "20px", fontSize: "1.5em" }} />
        </div>
        <div className="card">
          Total Courses: 3
          <FaExclamationCircle
            style={{ marginLeft: "20px", fontSize: "1.5em" }}
          />
        </div>
      </div>

      <div className="main-content">
        <div className="panel panel-big">
          <h2>Student Progress</h2>
          <div
            style={{ height: "2px", width: "100%", backgroundColor: "#8d8d8d" }}
          ></div>
          <div className="panel-inside">
            {studentDataFetch.map((student) => (
              <StudentProgress
                key={student.id}
                studentInfo={{
                  id: student.id,
                  name: student.name,
                  grade: student.grade,
                }}
              />
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="calendar-card">
            <h3>Quick Calendar</h3>
            <MyCalendar />
          </div>
          <h4>Tasks</h4>
          <ul>
            <li>Math Homework — Due July 31</li>
            <li>Science Project — Due August 2</li>
            <li>English Essay — Due August 5</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
