import React from 'react'
import { useState } from 'react';
import './Todo.css'

export default function Todo() {
    const [text, settext] = useState('');
    const [inputs, setinputes] = useState([]);

    const currentText = (e) => {
        settext(e.target.value);
    };

    const toDisplay = () => {
        if (text !== '') {
            setinputes([...inputs, text]);
            settext('');
        }
    };

    const deleteHandler = (index) => {
        setinputes(inputs.filter((_, i) => i !== index));
    };

    const editHandler = (index) => {
        const editSection = inputs.find((item, i) => i === index);
        if (editSection) {
            settext(editSection);
            deleteHandler(index)
        }
    };

    return (
        <div>
           <center>
           <div className='upperSection'>
           <div className='upperSection1'>
           <input type="text" value={text} onChange={currentText} placeholder='Add new task' />
            <button onClick={toDisplay}>Add Task</button>
           </div>
           </div>


           <div className='lowerParent'>
           {inputs.map((input, index) => (
                <div >
                    <div key={index} >
                    <p>{input}</p>
                    <button onClick={() => deleteHandler(index)}>Delete</button>
                    <button onClick={() => editHandler(index)}>Edit</button>
                </div>
                </div>
            ))}

           </div>
           </center>
        </div>
    );
}
