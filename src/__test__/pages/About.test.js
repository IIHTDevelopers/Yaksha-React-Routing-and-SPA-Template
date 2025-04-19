import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../../pages/About';
import '@testing-library/jest-dom';

describe('boundary', () => {
    test('AboutComponent boundary renders the heading', () => {
        render(<About />);
        const headingElement = screen.getByText(/About Personal Task Manager/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('AboutComponent boundary renders the description', () => {
        render(<About />);
        const descriptionElement1 = screen.getByText(/This app helps you manage your personal tasks efficiently./i);
        const descriptionElement2 = screen.getByText(/You can view and manage your tasks easily with this simple interface./i);
        expect(descriptionElement1).toBeInTheDocument();
        expect(descriptionElement2).toBeInTheDocument();
    });
});
