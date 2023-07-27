import React from 'react'

export default function studentsList({student , index , deleteHandler}) {
   
    return (
        <tr>
            <td>{index}</td>
            <td>{student.name}</td>
            <td>{student.batch}</td>
            <td>{student.roll}</td>
            <td>{student.class}</td>
            <td><button
            onClick={()=> deleteHandler(index)}
            >Delete</button></td>
        </tr>
    )
}
