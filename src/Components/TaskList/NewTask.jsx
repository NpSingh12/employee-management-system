import React, { useContext } from "react";
import { AuthProvide } from "../../Context/AuthContext"; // ✅ Import context to update state

const NewTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthProvide);

  const handleAcceptTask = () => {
    const updatedUsers = userData.map((user) => {
      if (user.tasks.some((task) => task.taskTitle === data.taskTitle)) {
        return {
          ...user,
          tasks: user.tasks.map((task) =>
            task.taskTitle === data.taskTitle
              ? { ...task, newTask: false, active: true } // ✅ Move to active
              : task
          ),
          taskNumber: {
            ...user.taskNumber,
            newTask: Math.max(0, user.taskNumber.newTask - 1), // ✅ Prevent negative count
            active: user.taskNumber.active + 1, // ✅ Increase active count
          },
        };
      }
      return user;
    });

    setUserData([...updatedUsers]); // ✅ Update React state
    localStorage.setItem("employees", JSON.stringify(updatedUsers)); // ✅ Save in localStorage
  };

  return (
    <div className="flex-shrink-0 h-full w-full md:w-[300px] bg-yellow-400 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>

      <div className="mt-4">
        <button
          onClick={handleAcceptTask}
          className="py-1 px-2 text-sm bg-emerald-500 rounded"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
