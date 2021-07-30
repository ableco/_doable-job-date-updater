import { format } from 'date-fns';
import * as React from 'react';
import { Task } from './external/types';

const TaskDueDate = ({ task }: { task: Task }) => {
  const handleDateClick = async () => {
    console.log('CALLED');
  };

  return (
    <button onClick={handleDateClick}>
      {task.dueDate ? (
        format(task.dueDate, 'MMMM dd')
      ) : (
        <span className="underline">Add Date</span>
      )}
    </button>
  );
};

export default TaskDueDate;
