// import React from 'react'
// import './Register.css'
// // import { useState } from 'react'

// function Register() {
//     // const[values,setValues]=useState({
//     //     name:"",
//     //     email:"",
//     //     password:"",
//     //     newpassword:""

//     // })

//   return (
    
//     <div className='main-container'>
//         <form className='form-container' onSubmit={(e)=> e.preventDefault()} >
//             <h1>Register </h1>
//             <p>Here is the Register page!</p>
//             <div className='input-container'>
//                 <label htmlFor='name'>Name</label>
//                 <input type='text' placeholder='aha'
//                     id='name'
//                 />
//                 <label htmlFor='mail'>Email</label>
//                 <input type='email' placeholder='aha@gmail.com'
//                     id='email'
//                 />
//                 <label htmlFor='password'>Password</label>
//                 <input type='password'
//                  placeholder='New-password'
//                  id='password'
//                  />
//                 <label htmlFor='confirm-password'>Confirm-Password</label>
//                 <input type='password'
//                  placeholder='Retype-password'
//                  id='confirm-password'
//                  />
//                 <button className='btn' type='submit'>Register</button>
//             </div>
//             <span>After register click</span> <span><button className='signup-btn'>Login</button></span>
//         </form>
//     </div>
//   )
// }

// export default Register

import React, { useState } from "react";
import "./Register.css";

function App() {
  const [tasks, setTasks] = useState([]); 
  const [input, setInput] = useState(""); 
  const [editIndex, setEditIndex] = useState(null); 

  // Function to handle input changes
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Function to add a new task
  const addTask = () => {
    if (input.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    if (tasks.find((task) => task === input)) {
      alert("Task already exists!");
    } else {
      setTasks([...tasks, input]);
      setInput(""); 
    }
  };

  // Function to update an existing task
  const updateTask = () => {
    if (input.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = input;
    setTasks(updatedTasks);
    setEditIndex(null); 
    setInput(""); 
  };

  // Function to delete a task
  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  // Function to start editing a task
  const editTask = (index) => {
    setInput(tasks[index]); 
    setEditIndex(index); 
  };

  // Function to handle the Add/Update button click
  const handleAddOrUpdate = () => {
    if (editIndex !== null) {
      updateTask();
    } else {
      addTask();
    }
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter a task..."
        />
        <button onClick={handleAddOrUpdate}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => deleteTask(task)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;