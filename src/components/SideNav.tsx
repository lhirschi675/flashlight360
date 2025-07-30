type Props = {
  selectedPage: string;
  setSelectedPage: (
    page: "dashboard" | "students" | "lessons" | "calendar"
  ) => void;
};

const SideNav = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <nav
      style={{
        width: "200px",
        background: "linear-gradient(to bottom, #5c3ad6, #937fdc)",
        color: "white",
        padding: "1rem",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li
          style={{
            margin: "1rem 0",
            cursor: "pointer",
            fontWeight: selectedPage === "dashboard" ? "bold" : "normal",
          }}
          onClick={() => setSelectedPage("dashboard")}
        >
          Dashboard
        </li>
        <li
          style={{
            margin: "1rem 0",
            cursor: "pointer",
            fontWeight: selectedPage === "students" ? "bold" : "normal",
          }}
          onClick={() => setSelectedPage("students")}
        >
          Students
        </li>
        <li
          style={{
            margin: "1rem 0",
            cursor: "pointer",
            fontWeight: selectedPage === "lessons" ? "bold" : "normal",
          }}
          onClick={() => setSelectedPage("lessons")}
        >
          Lessons
        </li>
        <li
          style={{
            margin: "1rem 0",
            cursor: "pointer",
            fontWeight: selectedPage === "calendar" ? "bold" : "normal",
          }}
          onClick={() => setSelectedPage("calendar")}
        >
          Calendar
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
