import React from 'react'

export default function studentsList({student}) {
    return (
        <tr>
            <td>{student.name}</td>
            <td>{student.batch}</td>
            <td>{student.roll}</td>
            <td>{student.class}</td>
        </tr>
    )
}
