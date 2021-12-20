import React from "react";

const TaskForm = () => {
  return (
    <div className="flex justify-center items-center h-3/4">
      <form className="bg-gray-900 p-10">
        <h2 className="mb-7 text-3x1">Add a Task</h2>

        <div className="mb-5">
          <input
            type="text"
            className="py-3 px-4 focus: outline-none focus:text-gray-100 bg-gray-700 w-full"
            name="title"
            placeholder="Write a title"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
