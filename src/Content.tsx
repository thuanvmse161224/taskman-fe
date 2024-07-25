import { useState, useEffect } from 'react';
import axios from 'axios';
import { Task } from './common';
import TaskList from './components/TaskList';
import config from '@config';

function Content() {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(`${config.backendUrl}/tasks`);
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <main className=''>
            <TaskList tasks={tasks} />
        </main>
    );
}

export default Content;
