import type { Student } from "../types/student";

type Props = {
  studentDataFetch: Student[];
  setStudentDataFetch: React.Dispatch<React.SetStateAction<Student[]>>;
};

const DashboardPage = ({ studentDataFetch, setStudentDataFetch }: Props) => {
  return (
    <>
      <h2>Dashboard</h2>
      <ul>
        {studentDataFetch.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </>
  );
};

export default DashboardPage;
