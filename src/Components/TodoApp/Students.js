import { useState } from "react";
import { data } from "./Data";
import StudentsList from "./studentsList"; // Capitalize the component name

export default function Students() {
  const [students, setStudents] = useState(data);
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [roll, setRoll] = useState("");
  const [stuClass, setStuClass] = useState("");

  const ctaHandler = () => {
    const newStudent = {
      name,
      batch,
      roll,
      class: stuClass,
    };
    console.log(newStudent);
    setStudents([...students, newStudent]); // Update the students state with the new student
      setName("");
      setStuClass("")
      setRoll("")
      setBatch("")
  };

  return (
    <div>
      <h3>New Students Add</h3>
      <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="text" value={batch} placeholder="Batch" onChange={(e) => setBatch(e.target.value)} />
      <input type="text" value={roll} placeholder="Roll no." onChange={(e) => setRoll(e.target.value)} />
      <input type="text" value={stuClass} placeholder="Class" onChange={(e) => setStuClass(e.target.value)} />
      <hr />
      <button onClick={ctaHandler}>Submit</button>
      <hr />

      <h3>Lists of Students</h3>
      <table>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Batch</th>
          <th>Roll no.</th>
          <th>Class</th>
        </tr>
        {students.map((item, index) => (
          <StudentsList key={index} index={index} student={item} />
        ))}
      </table>
    </div>
  );
}
