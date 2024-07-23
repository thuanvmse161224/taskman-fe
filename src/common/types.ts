// Define an enum for TaskStatus
export enum TaskStatus {
    TODO = 'todo',
    IN_PROGRESS = 'in-progress',
    DONE = 'done'
}

// Define a TypeScript interface for Task
export interface Task {
    title: string;
    description: string;
    status: TaskStatus; // Use the TaskStatus enum for status
    dueDate?: Date; // Optional dueDate field
}
