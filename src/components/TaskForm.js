import React, {useState, useContext} from "react";
import {GlobalContext} from '../context/GlobalContext';
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
    const {addTask} = useContext(GlobalContext);
    const navigate = useNavigate();

    const [task, setTask] = useState({
        title: "",
        description: "",
    })

    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        addTask(task);
        navigate("/");
    }

  return (
    <div className="flex justify-center items-center h-3/4">
      <form className="bg-gray-900 p-10" onSubmit={handleSubmit}>
        <h2 className="mb-7 text-3x1">Add a Task</h2>

        <div className="mb-5">
          <input
            type="text"
            className="py-3 px-4 focus: outline-none focus:text-gray-100 bg-gray-700 w-full"
            name="title"
            onChange={handleChange}
            placeholder="Write a title"
          />
          <div className="mb-5">
            <textarea
              name="description"
              placeholder="Write a description"
              rows="2"
              onChange={handleChange}
              className="mt-5 py-3 px-4 focus: outline-none focus:text-gray-100 bg-gray-700 w-full"
            ></textarea>

            <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
                Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
