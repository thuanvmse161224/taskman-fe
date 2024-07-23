import React from 'react';
import { Task } from '../common'; // Adjust the path based on your project structure
import TaskCard from './TaskCard';

interface TaskListProps {
    tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    return (    
        <section className="grid m-3 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {tasks.map((task, index) => (
                <TaskCard key={index} task={task} />
            ))}
        </section>
    );
}

export default TaskList;
