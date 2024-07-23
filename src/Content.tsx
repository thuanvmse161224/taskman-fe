import { useState } from 'react';
import { Task, TaskStatus } from './common'; // Adjust the path based on your project structure
import TaskList from './components/TaskList';

const sampleTask: Task[] = [{
    title: 'Complete React Project',
    description: 'Build a sample project using React with TypeScript.',
    status: TaskStatus.TODO,
    dueDate: new Date(), // Optional dueDate field
}];

function Content() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [tasks, setTasks] = useState<Task[]>(sampleTask);

    return (
        <main className=''>
            <TaskList tasks={tasks} />
        </main>
    );
}

export default Content;
