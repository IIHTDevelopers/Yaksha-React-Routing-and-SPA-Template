import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home';
import '@testing-library/jest-dom';

describe('boundary', () => {
    test('HomeComponent boundary renders the heading', () => {
        render(<Home />);
        const headingElement = screen.getByText(/Welcome to Personal Task Manager/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('HomeComponent boundary renders the description', () => {
        render(<Home />);
        const descriptionElement = screen.getByText(/This is a simple task management app./i);
        expect(descriptionElement).toBeInTheDocument();
    });

    test('HomeComponent boundary renders the navigation instruction', () => {
        render(<Home />);
        const navigationInstructionElement = screen.getByText(/Navigate through the app using the links in the header./i);
        expect(navigationInstructionElement).toBeInTheDocument();
    });
});
