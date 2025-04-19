import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';
import '@testing-library/jest-dom';

describe('boundary', () => {
    test('HeaderComponent boundary renders Home link', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const homeLink = screen.getByText(/Home/i);
        expect(homeLink).toBeInTheDocument();
    });

    test('HeaderComponent boundary renders Task List link', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const taskListLink = screen.getByText(/Task List/i);
        expect(taskListLink).toBeInTheDocument();
    });

    test('HeaderComponent boundary renders About link', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const aboutLink = screen.getByText(/About/i);
        expect(aboutLink).toBeInTheDocument();
    });
});
