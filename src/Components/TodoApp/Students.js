// import { useState } from "react"
// import { data } from "./Data"
// import studentslist from "./studentsList"

// export default function Students() {
//   const [students, setstudents] = useState(data)
//   return (
//     <div>
//       <table>
//         <tr >
//           <th>Name</th>
//           <th>Batch</th>
//           <th>Roll no.</th>
//           <th>Class</th>
//         </tr>
//         {
//           students.map((items)=>{
//            return  < studentslist student={items} />
//           })
//         }
//       </table>
//     </div>
//   )
// }


import { useState } from "react";
import { data } from "./Data";
import StudentsList from "./studentsList"; // Capitalize the component name

export default function Students() {
  const [students, setStudents] = useState(data); // Renamed setstudents to setStudents

  return (
    <div>
      <table>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Batch</th>
          <th>Roll no.</th>
          <th>Class</th>
        </tr>
        {students.map((item , index) => (
          <StudentsList index={index} student={item} /> // Added a unique key prop for each student
        ))}
      </table>
    </div>
  );
}

 