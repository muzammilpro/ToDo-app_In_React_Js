import React from 'react'

export default function StudentsList({student , index , deleteHandler , updateHandler}) {
   
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
            <td><button onClick={()=> updateHandler(index)}>Update</button></td>
        </tr>
    )
}
