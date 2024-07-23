import { useState } from 'react';
import { Task, TaskStatus } from './common'; // Adjust the path based on your project structure

const sampleTask: Task = {
    title: 'Complete React Project',
    description: 'Build a sample project using React with TypeScript.',
    status: TaskStatus.TODO,
    dueDate: new Date('2024-07-30'), // Optional dueDate field
};

function Content() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [task, setTask] = useState<Task>(sampleTask);

    return (
        <main>
            <div>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <p>Status: {task.status}</p>
                {task.dueDate && <p>Due Date: {task.dueDate.toLocaleDateString()}</p>}
            </div>
        </main>
    );
}

export default Content;
