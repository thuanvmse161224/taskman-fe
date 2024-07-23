// utils/taskUtils.ts

/**
 * Formats a dueDate into a readable string or returns 'No due date'
 * @param dueDate - Optional date object
 * @returns Formatted dueDate string or 'No due date'
 */
export function getDueDateString(dueDate?: Date): string {
    if (!dueDate) {
        return 'No due date';
    }

    const day = dueDate.getDate();
    const month = dueDate.getMonth() + 1; // Months are zero-indexed
    const year = dueDate.getFullYear();
    return `${month}/${day}/${year}`;
}

/**
 * Returns a status message for the dueDate indicating whether it's today, tomorrow, overdue, or a specific date
 * @param dueDate - Optional date object
 * @returns Status message for the dueDate
 */
export function getDueDateStatus(dueDate?: Date): string {
    if (!dueDate) {
        return 'No due date';
    }

    const now = new Date();
    if (dueDate.toDateString() === now.toDateString()) {
        return 'Due today';
    }
    if (dueDate.toDateString() === new Date(now.setDate(now.getDate() + 1)).toDateString()) {
        return 'Due tomorrow';
    }
    if (dueDate < now) {
        return `Overdue since ${dueDate.toLocaleDateString()}`;
    }
    return `Due on ${dueDate.toLocaleDateString()}`;
}
