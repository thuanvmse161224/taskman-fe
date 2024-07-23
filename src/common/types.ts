// Define an enum for TaskStatus
enum TaskStatus {
    TODO = 'todo',
    IN_PROGRESS = 'in-progress',
    DONE = 'done'
}

// Define a TypeScript interface for Task
interface Task {
    title: string;
    description: string;
    status: TaskStatus; // Use the TaskStatus enum for status
    dueDate?: Date; // Optional dueDate field
}

export default Task;
