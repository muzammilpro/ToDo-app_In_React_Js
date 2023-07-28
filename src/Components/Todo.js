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
                <h1>Add New Task</h1>
                    <div className='upperSection1'>
                        <input type="text" value={text} onChange={currentText} placeholder='Add new task' />
                        <button onClick={toDisplay}>Add Task</button>
                    </div>
                </div>



            </center>
            <br/>
            <center>


                <div className='lowerParent'>
                    <h1>Task List</h1>
                    {inputs.map((input, index) => (
                        <div >
                            <div key={index} className='taskList' >
                                <p >{input}</p>
                               <div className='btnCon'>
                               <button onClick={() => deleteHandler(index)}>Delete</button>
                                <button onClick={() => editHandler(index)} className='editBtn'>Edit</button>
                               </div>
                            </div>
                            <br/>
                        </div>
                    ))}

                </div>
            </center>
        </div>
    );
}
