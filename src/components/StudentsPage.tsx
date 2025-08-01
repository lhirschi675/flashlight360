import type { Student } from "../types/student";
import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css"; // Import the default styling
import "./StudentPage.css";

type Props = {
  studentDataFetch: Student[];
  setStudentDataFetch: React.Dispatch<React.SetStateAction<Student[]>>;
};

const StudentsPage = ({ studentDataFetch }: Props) => {
  // const [studentPopUp, setStudentPopUp] = useState(false);
  return (
    <>
      <div
        className="student-info-wrapper"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Popup
            trigger={
              <button className="actions button orange-btn">
                {" "}
                + Add Student{" "}
              </button>
            }
            modal
            nested
          >
            {
              ((close: () => void) => (
                <div className="modal">
                  <div className="header"> My Modal Title </div>
                  <div className="content">
                    This is the content of your modal. You can put any React
                    components or HTML here.
                  </div>
                  <div className="actions">
                    <button
                      className="button"
                      onClick={() => {
                        console.log("modal closed");
                        close();
                      }}
                    >
                      Close Modal
                    </button>
                  </div>
                </div>
              )) as unknown as React.ReactNode
            }
          </Popup>
          <button className="actions gray-btn">Import</button>
          <button className="actions gray-btn">Export</button>
        </div>
        <div>
          <input
            placeholder="Search for Students..."
            type="text-area"
            className="search-students-box"
          />
        </div>
      </div>
      <div className="student-info-wrapper">
        <h2>Students</h2>
        {studentDataFetch.map((student) => (
          <div>
            {"NAME: " +
              student.name +
              " EMAIL: " +
              student.email +
              " ID: " +
              student.id}
          </div>
        ))}
      </div>
    </>
  );
};

export default StudentsPage;
