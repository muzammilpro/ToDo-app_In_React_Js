import { useState } from "react";
import { data } from "./Data";
import StudentsList from "./StudentsList"; // Capitalize the component name

export default function Students() {
  const [students, setStudents] = useState(data);
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [roll, setRoll] = useState("");
  const [stuClass, setStuClass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const updateHandler = (student) => {
    setName(student.name);
    setStuClass(student.class);
    setRoll(student.roll);
    setBatch(student.batch);
  };

  const deleteHandler = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  const ctaHandler = () => {
    if (name !== "" && batch !== "" && roll !== "" && stuClass !== "") {
      const newStudent = {
        name,
        batch,
        roll,
        class: stuClass,
      };
      setStudents([...students, newStudent]); // Update the students state with the new student
      setName("");
      setStuClass("");
      setRoll("");
      setBatch("");
      setErrorMessage("");
    } else {
      setErrorMessage("Found Blank Forms");
    }
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
      <p style={{ backgroundColor: "red", color: "white" }}>
        {errorMessage}
      </p>
      <hr />

      <h3>Lists of Students</h3>
      <table>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Batch</th>
          <th>Roll no.</th>
          <th>Class</th>
          <th>Actions</th>
        </tr>
        {students.map((item, index) => (
          <StudentsList
            key={index}
            index={index}
            student={item}
            deleteHandler={deleteHandler}
            updateHandler={updateHandler}
          />
        ))}
      </table>
    </div>
  );
}
