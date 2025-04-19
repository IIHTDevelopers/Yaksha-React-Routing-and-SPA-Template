import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from '../../pages/TaskList';
import '@testing-library/jest-dom';

describe('boundary', () => {
    test('TaskListComponent boundary renders the Task List heading', () => {
        render(<TaskList />);
        const headingElement = screen.getByText(/Task List/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('TaskListComponent boundary renders all tasks', () => {
        render(<TaskList />);
        const tasks = [
            { id: 1, name: 'Finish React Project' },
            { id: 2, name: 'Clean the house' },
            { id: 3, name: 'Buy groceries' },
        ];

        tasks.forEach(task => {
            const taskElement = screen.getByText(task.name);
            expect(taskElement).toBeInTheDocument();
        });
    });

    test('TaskListComponent boundary renders the correct number of tasks', () => {
        render(<TaskList />);
        const taskElements = screen.getAllByRole('listitem');
        expect(taskElements.length).toBe(3);
    });
});
