import React, { useContext } from "react";
import { AuthProvide } from "../../Context/AuthContext";

const AcceptTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthProvide);

  const handleTaskUpdate = (status) => {
    const updatedUsers = userData.map((user) => {
      if (user.tasks.some((task) => task.taskTitle === data.taskTitle)) {
        return {
          ...user,
          tasks: user.tasks.map((task) =>
            task.taskTitle === data.taskTitle
              ? { ...task, active: false, [status]: true } // ✅ Mark as completed/failed
              : task
          ),
          taskNumber: {
            ...user.taskNumber,
            active: Math.max(0, user.taskNumber.active - 1), // ✅ Reduce active count
            [status]: user.taskNumber[status] + 1, // ✅ Increase completed/failed count
          },
        };
      }
      return user;
    });

    setUserData([...updatedUsers]); // ✅ Update React state
    localStorage.setItem("employees", JSON.stringify(updatedUsers)); // ✅ Save in localStorage
  };

  return (
    <div className="flex-shrink-0 h-full w-full md:w-[300px] bg-red-400 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => handleTaskUpdate("completed")}
          className="bg-green-500 py-1 px-2 text-sm"
        >
          Mark as Completed
        </button>
        <button
          onClick={() => handleTaskUpdate("failed")}
          className="bg-red-500 py-1 px-2 text-sm"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
