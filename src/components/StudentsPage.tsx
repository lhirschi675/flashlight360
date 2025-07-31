import type { Student } from "../types/student";
import "./StudentPage.css";

type Props = {
  studentDataFetch: Student[];
  setStudentDataFetch: React.Dispatch<React.SetStateAction<Student[]>>;
};

const StudentsPage = ({ studentDataFetch }: Props) => {
  return (
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
  );
};

export default StudentsPage;
