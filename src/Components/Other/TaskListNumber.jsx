import React, { useState, useEffect } from "react";

const TaskListNumber = ({ data }) => {
  // ✅ Ensure taskStats has a fallback value
  const [taskStats, setTaskStats] = useState(
    data?.taskNumber || {
      newTask: 0,
      active: 0,
      completed: 0,
      failed: 0,
    }
  );

  useEffect(() => {
    if (data?.taskNumber) {
      setTaskStats({ ...data.taskNumber });
    }
  }, [data]);

  return (
    <div className="flex flex-wrap mt-10 gap-5 justify-between">
      <div className="rounded-xl py-6 px-9 w-full md:w-[45%] bg-sky-500">
        <h3 className="text-xl font-medium">New Task</h3>
        <h2 className="text-3xl font-semibold">{taskStats.newTask}</h2>
      </div>

      <div className="rounded-xl py-6 px-9 w-full md:w-[45%] bg-emerald-300">
        <h3 className="text-xl font-medium">Active</h3>
        <h2 className="text-3xl font-semibold">{taskStats.active}</h2>
      </div>

      <div className="rounded-xl py-6 px-9 w-full md:w-[45%] bg-yellow-300">
        <h3 className="text-xl font-medium">Completed</h3>
        <h2 className="text-3xl font-semibold">{taskStats.completed}</h2>
      </div>

      <div className="rounded-xl py-6 px-9 w-full md:w-[45%] bg-red-400">
        <h3 className="text-xl font-medium">Failed</h3>
        <h2 className="text-3xl font-semibold">{taskStats.failed}</h2>
      </div>
    </div>
  );
};

export default TaskListNumber;
