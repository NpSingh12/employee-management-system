import React, { useContext, useEffect, useState } from "react";
import { AuthProvide } from "../../Context/AuthContext";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthProvide);
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    setTaskData([...userData]);
  }, [userData]);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded">
      {/* Header */}
      <div className="bg-red-400 mb-2 py-2 px-4 hidden md:flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Name</h2>
        <h5 className="text-lg font-medium w-1/5">New Task</h5>
        <h5 className="text-lg font-medium w-1/5">Active</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>

      {/* Data Rows */}
      <div>
        {taskData.map((elem, idx) => (
          <div
            key={idx}
            className="bg-[#1c1c1c] border-2 mb-2 py-2 px-4 flex flex-col md:flex-row md:justify-between rounded"
          >
            {/* Name (Always First) */}
            <h2 className="text-lg font-medium text-white w-full md:w-1/5">
              {elem.firstName}
            </h2>

            {/* Tasks - Display as columns in Desktop, Rows in Mobile */}
            <div className="flex md:hidden text-gray-400 text-sm mb-1">
              <span className="w-1/2">New Task:</span>
              <span className="w-1/2 text-green-600">{elem.taskNumber.newTask}</span>
            </div>
            <div className="flex md:hidden text-gray-400 text-sm mb-1">
              <span className="w-1/2">Active:</span>
              <span className="w-1/2 text-red-600">{elem.taskNumber.active}</span>
            </div>
            <div className="flex md:hidden text-gray-400 text-sm mb-1">
              <span className="w-1/2">Completed:</span>
              <span className="w-1/2 text-yellow-600">{elem.taskNumber.completed}</span>
            </div>
            <div className="flex md:hidden text-gray-400 text-sm mb-1">
              <span className="w-1/2">Failed:</span>
              <span className="w-1/2 text-red-600">{elem.taskNumber.failed}</span>
            </div>

            {/* Desktop Layout (Hidden on Mobile) */}
            <h5 className="hidden md:block text-lg font-medium w-1/5 text-green-600">
              {elem.taskNumber.newTask}
            </h5>
            <h5 className="hidden md:block text-lg font-medium w-1/5 text-red-600">
              {elem.taskNumber.active}
            </h5>
            <h5 className="hidden md:block text-lg font-medium w-1/5 text-yellow-600">
              {elem.taskNumber.completed}
            </h5>
            <h5 className="hidden md:block text-lg font-medium w-1/5 text-red-600">
              {elem.taskNumber.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
