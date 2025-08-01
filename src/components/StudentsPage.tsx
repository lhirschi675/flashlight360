import type { Student } from "../types/student";
import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./StudentPage.css";

type Props = {
  studentDataFetch: Student[];
  setStudentDataFetch: React.Dispatch<React.SetStateAction<Student[]>>;
};

const StudentsPage = ({ studentDataFetch, setStudentDataFetch }: Props) => {
  const [form, setForm] = useState({
    name: "",
    course: "",
    status: "",
    email: "",
    phone: "",
    age: 0,
    grade: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "age" || name === "grade" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    close: () => void
  ) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to add student");

      const newStudent = await res.json();
      setStudentDataFetch((prev) => [...prev, newStudent]);
      close();
      setForm({
        name: "",
        course: "",
        status: "",
        email: "",
        phone: "",
        age: 0,
        grade: 0,
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <div
        className="student-info-wrapper"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Popup
            trigger={
              <button className="actions orange-btn">+ Add Student</button>
            }
            modal
            nested
          >
            {/* @ts-expect-error This error keeps popping up so I ignored it I haven't used reactjs-popup before but I assume it's because it's JS and I'm using TS */}
            {(close: () => void) => (
              <div className="modal" style={{ padding: "10px" }}>
                <button
                  className="close"
                  onClick={close}
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    border: "none",
                    background: "transparent",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                  aria-label="Close modal"
                >
                  &times;
                </button>
                <div className="header">Add New Student</div>
                <form
                  className="content"
                  onSubmit={(e) => handleSubmit(e, close)}
                >
                  <label>
                    Name:
                    <input
                      type="text"
                      name="name"
                      className="add-student-input"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                    Course:
                    <input
                      type="text"
                      name="course"
                      className="add-student-input"
                      value={form.course}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                    Status:
                    <input
                      type="text"
                      name="status"
                      className="add-student-input"
                      value={form.status}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                    Email:
                    <input
                      type="email"
                      name="email"
                      className="add-student-input"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                    Phone:
                    <input
                      type="tel"
                      name="phone"
                      className="add-student-input"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Age:
                    <input
                      type="number"
                      name="age"
                      className="add-student-input"
                      value={form.age}
                      onChange={handleChange}
                      min={0}
                    />
                  </label>
                  <label style={{ display: "none" }}>
                    Grade (defaults to 0):
                    <input
                      type="number"
                      name="grade"
                      value={form.grade}
                      readOnly
                    />
                  </label>
                  <div className="actions">
                    <button type="submit" className="button orange-btn">
                      Add Student
                    </button>
                    <button
                      type="button"
                      className="button"
                      onClick={close}
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </Popup>

          <button className="actions gray-btn">Import</button>
          <button className="actions gray-btn">Export</button>
        </div>
        <div>
          <input
            placeholder="Search for Students..."
            type="text"
            className="search-students-box"
          />
        </div>
      </div>
      <div className="student-info-wrapper">
        <h2>Students</h2>
        {studentDataFetch.map((student) => (
          <div key={student.id}>
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
