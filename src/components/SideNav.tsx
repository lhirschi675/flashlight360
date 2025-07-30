import "./SideNav.css";
import { FaHome, FaSchool, FaBook, FaCalendar } from "react-icons/fa";

type Props = {
  selectedPage: string;
  setSelectedPage: (
    page: "Dashboard" | "Students" | "Lessons" | "Calendar"
  ) => void;
};

const SideNav = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <nav className="sidenav">
      <img
        className="sidenav-logo"
        src="/flashlight-learning-logo.png"
        alt="Flashlight Learning Logo"
      />
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li
          className={`nav-link ${
            selectedPage === "Dashboard" ? "active-link" : ""
          }`}
          onClick={() => setSelectedPage("Dashboard")}
        >
          <FaHome className="icon-margin" /> Dashboard
        </li>
        <li
          className={`nav-link ${
            selectedPage === "Students" ? "active-link" : ""
          }`}
          onClick={() => setSelectedPage("Students")}
        >
          <FaSchool className="icon-margin" /> Students
        </li>
        <li
          className={`nav-link ${
            selectedPage === "Lessons" ? "active-link" : ""
          }`}
          onClick={() => setSelectedPage("Lessons")}
        >
          <FaBook className="icon-margin" /> Lessons
        </li>
        <li
          className={`nav-link ${
            selectedPage === "Calendar" ? "active-link" : ""
          }`}
          onClick={() => setSelectedPage("Calendar")}
        >
          <FaCalendar className="icon-margin" /> Calendar
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
