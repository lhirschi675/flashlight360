import { useState } from "react";
import SideNav from "./components/SideNav";
import StudentsPage from "./components/StudentsPage";
import DashboardPage from "./components/DashboardPage";
import LessonsPage from "./components/LessonsPage";
import CalendarPage from "./components/CalendarPage";

type Page = "dashboard" | "students" | "lessons" | "calendar";

function App() {
  const [selectedPage, setSelectedPage] = useState<Page>("students");

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideNav selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <main style={{ padding: "1rem", flex: 1 }}>
        {selectedPage === "dashboard" && <DashboardPage />}
        {selectedPage === "students" && <StudentsPage />}
        {selectedPage === "lessons" && <LessonsPage />}
        {selectedPage === "calendar" && <CalendarPage />}
      </main>
    </div>
  );
}

export default App;
