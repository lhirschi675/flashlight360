import { useState, useEffect } from "react";
import "./App.css";

import Banner from "./components/Banner";
import CalendarPage from "./components/CalendarPage";
import DashboardPage from "./components/DashboardPage";
import LessonsPage from "./components/LessonsPage";
import SideNav from "./components/SideNav";
import StudentsPage from "./components/StudentsPage";

import type { Student } from "./types/student";

type Page = "Dashboard" | "Students" | "Lessons" | "Calendar";
const pages: Page[] = ["Dashboard", "Students", "Lessons", "Calendar"];
const pageDescriptions: string[] = [
  "Welcome back! To your course overview",
  "Manage and track your enrolled students",
  "Manage and track your enrolled lessons",
  "Manage and track of your projects/tasks using the Calendar",
];

function App() {
  const [selectedPage, setSelectedPage] = useState<Page>("Dashboard");
  const [studentDataFetch, setStudentDataFetch] = useState<Student[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/students")
      // fetch("http://18.224.252.238:8080/students")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch students");
        }
        return response.json();
      })
      .then((data) => {
        setStudentDataFetch(data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);

  useEffect(() => {
    console.log(studentDataFetch, "THIS SHOULD HAVE A GRADE");
  }, [studentDataFetch]);

  const pageIndex = pages.indexOf(selectedPage);
  const description: string = pageDescriptions[pageIndex];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideNav selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <main style={{ flex: 1 }}>
        <Banner
          selectedPage={selectedPage}
          title={selectedPage + " Manager"}
          subtitle={description}
          userName="Logan Hirschi"
          onLogout={() => console.log("User logged out")}
        />
        <div className="main-wrapper">
          {selectedPage === "Dashboard" && (
            <DashboardPage
              studentDataFetch={studentDataFetch}
              setStudentDataFetch={setStudentDataFetch}
            />
          )}
          {selectedPage === "Students" && (
            <StudentsPage
              studentDataFetch={studentDataFetch}
              setStudentDataFetch={setStudentDataFetch}
            />
          )}
          {selectedPage === "Lessons" && <LessonsPage />}
          {selectedPage === "Calendar" && <CalendarPage />}
        </div>
      </main>
    </div>
  );
}

export default App;
