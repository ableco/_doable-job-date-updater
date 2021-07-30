import * as React from 'react';
import { Task } from './external/types';

export const TaskDueDate = ({ task }: { task: Task }) => {
  const handleDateClick = () => {};

  return (
    <button onClick={handleDateClick}>
      {task.dueDate ? (
        // format(task.dueDate, 'MMMM dd')
        '...'
      ) : (
        <span className="underline">Add Date</span>
      )}
    </button>
  );
};
