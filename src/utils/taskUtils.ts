import { Task } from "src/common";

/**
 * Formats a dueDate from a Task into a readable string or returns 'No due date'
 * @param task - Task object containing an optional dueDate
 * @returns Formatted dueDate string or 'No due date'
 */
export function getDueDateString(task: Task): string {
    const { dueDate } = task;

    if (!dueDate) {
        return 'No due date';
    }

    const date = new Date(dueDate);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-indexed
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
}

/**
 * Returns a status message for the dueDate from a Task indicating whether it's today, tomorrow, overdue, or a specific date
 * @param task - Task object containing an optional dueDate
 * @returns Status message for the dueDate
 */
export function getDueDateStatus(task: Task): string {
    const { dueDate } = task;

    if (!dueDate) {
        return 'No due date';
    }

    // Convert dueDate string to Date object
    const dueDateFormatted = new Date(dueDate);

    // Check for valid Date object
    if (isNaN(dueDateFormatted.getTime())) {
        return 'Invalid due date';
    }

    const now = new Date();
    const today = now.toDateString();

    if (dueDateFormatted.toDateString() === today) {
        return 'Due today';
    }

    // Check for tomorrow's date
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);

    if (dueDateFormatted.toDateString() === tomorrow.toDateString()) {
        return 'Due tomorrow';
    }

    // Check for overdue status
    if (dueDateFormatted < now) {
        return `Overdue since ${dueDateFormatted.toLocaleDateString()}`;
    }

    // Default due date message
    return `Due on ${dueDateFormatted.toLocaleDateString()}`;
}
