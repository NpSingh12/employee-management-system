import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  // ✅ Prevent error when data is null or undefined
  if (!data || !data.tasks) {
    return <p className="text-white text-lg">No tasks available</p>;  // ✅ Show a fallback UI instead of crashing
  }

  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5  mt-10 '>
        {data.tasks.map((elem, idx) => {
            if (elem.active) {
                return <AcceptTask key={idx} data={elem} />;
            }
            if (elem.newTask) {
                return <NewTask key={idx} data={elem} />;
            }
            if (elem.completed) {
                return <CompleteTask key={idx} data={elem} />;
            }
            if (elem.failed) {
                return <FailedTask key={idx} data={elem} />;
            }
            return null;  // ✅ Prevents returning `undefined` if no condition matches
        })}
    </div>
  );
};

export default TaskList;
