import React from 'react';
import { Task } from '../common'; // Adjust the path based on your project structure
import { getDueDateString, getDueDateStatus } from '../utils/taskUtils';  // Adjust the path based on your project structure

interface TaskCardProps {
    task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
    return (
        <article className="rounded-lg bg-blue-100 p-4 mb-4 h-64 flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-between pb-3">
                    <h2 className="text-xl font-semibold">{task.title}</h2>
                    <span className="bg-gray-300 text-gray-800 rounded-full py-1 px-3 text-xs font-semibold">
                        {task.status}
                    </span>
                </div>
                <div>
                    <p>{task.description}</p>
                </div>
            </div>
            <div>
                <p>Due Date: {getDueDateString(task.dueDate)}</p>
                <p>Status: {getDueDateStatus(task.dueDate)}</p>
            </div>
            <div className='flex justify-end'>
                <button type='button' className='bg-white p-1 mr-1'>lock</button>
                <button type='button' className='bg-white p-1'>delete</button>
            </div>
        </article>

    );
}

export default TaskCard;
