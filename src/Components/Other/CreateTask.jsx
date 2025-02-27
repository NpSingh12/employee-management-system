import React, { useContext, useState } from "react";
import { AuthProvide } from "../../Context/AuthContext";

const CreateTask = () => {
  const [userData, setuserData] = useContext(AuthProvide);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newtask = {
      taskTitle,
      taskDate,
      taskDescription,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const data = userData.map((user) => {
      if (user.firstName === asignTo) {
        return {
          ...user,
          tasks: [...user.tasks, newtask], // ✅ Correctly append new task
          taskNumber: {
            ...user.taskNumber,
            newTask: user.taskNumber.newTask + 1,
          },
        };
      }
      return user;
    });

    // ✅ Store updated user data in localStorage
    setuserData(data);
    localStorage.setItem("employees", JSON.stringify(data));

    console.log(data);

    setAsignTo("");
    setCategory("");
    setTaskDate("");
    setTaskDescription("");
    setTaskTitle("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-full md:w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Enter a task "
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="Date"
              placeholder="Enter Date"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
            <input
              value={asignTo}
              onChange={(e) => {
                setAsignTo(e.target.value);
              }}
              className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text "
              placeholder="Employee Name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design, Dev etc "
            />
          </div>
        </div>

        <div className="w-full md:w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            className="text-sm h-44 py-2 px-4 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
