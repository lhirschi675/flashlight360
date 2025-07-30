import { useState } from "react";
import "./App.css";

import Banner from "./components/Banner";
import CalendarPage from "./components/CalendarPage";
import DashboardPage from "./components/DashboardPage";
import LessonsPage from "./components/LessonsPage";
import SideNav from "./components/SideNav";
import StudentsPage from "./components/StudentsPage";

import type { Student } from "./types/student";

type Page = "Dashboard" | "Students" | "Lessons" | "Calendar";
type PageDescription =
  | "Welcome back! To your course overview"
  | "Manage and track your enrolled students"
  | "lessons"
  | "calendar";

function App() {
  const [selectedPage, setSelectedPage] = useState<Page>("Dashboard");
  const [studentDataFetch, setStudentDataFetch] = useState<Student[]>([
    {
      id: "STU00012",
      name: "John Smith",
      age: 16,
      email: "jsmith@gmail.com",
      phone: "(435)222-2222",
      course: "Course1A",
      created: "01/01/2025",
      updated: "01/02/2025",
    },
    {
      id: "STU00013",
      name: "Jane Doe",
      age: 12,
      email: "jdoe@gmail.com",
      phone: "(435)111-1111",
      course: "Course1B",
      created: "01/03/2025",
      updated: "01/04/2025",
    },
  ]);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideNav selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <main style={{ flex: 1 }}>
        <Banner
          selectedPage={selectedPage}
          title={selectedPage + " Manager"}
          subtitle="Manage and track your enrolled students"
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
