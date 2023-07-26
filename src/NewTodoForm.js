import React, {useState} from "react";

const ToDoForm = ({addTask}) => {


    const [task, setTask] = useState([])

    const handleChange = (e) => {
        setTask(e.target.value);
      };


    const handleSubmitTask = (e) => {
        e.preventDefault();
        // alert("Task Submitted!");
        addTask(task);
        setTask("")
    }
    return (
        <div>

            
            <label htmlFor="task">Things To Do: </label>
            <input 
            placeholder="task"
            onChange={handleChange}
            name="task"
            type="text"
            value={task}></input>


            <button onClick={handleSubmitTask}>AddTask</button>
        </div>
    )
}

export default ToDoForm;