import React, { useContext, useEffect, useState } from "react";
import { AuthProvide } from "../../Context/AuthContext";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthProvide);
  const [taskData, setTaskData] = useState([]);

  // ✅ Force reloading data whenever userData changes
  useEffect(() => {
    setTaskData([...userData]);
  }, [userData]);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Name</h2>
        <h5 className="text-lg font-medium w-1/5">NewTask</h5>
        <h5 className="text-lg font-medium w-1/5">Active</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>
      <div>
        {taskData.map((elem, idx) => (
          <div
            key={idx}
            className="bg-[#1c1c1c] border-2 mb-2 py-2 px-4 flex flex-wrap justify-between rounded"
          >
            <h2 className="text-lg font-medium w-full md:w-1/5 text-white">
              {elem.firstName}
            </h2>
            <h5 className="text-lg font-medium w-full md:w-1/5 text-green-600">
              {elem.taskNumber.newTask}
            </h5>
            <h5 className="text-lg font-medium w-full md:w-1/5 text-red-600">
              {elem.taskNumber.active}
            </h5>
            <h5 className="text-lg font-medium w-full md:w-1/5 text-yellow-600">
              {elem.taskNumber.completed}
            </h5>
            <h5 className="text-lg font-medium w-full md:w-1/5 text-red-600">
              {elem.taskNumber.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
