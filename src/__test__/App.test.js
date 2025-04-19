import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('boundary', () => {
  test('AppComponent boundary renders the Header component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  test('AppComponent boundary renders Home page by default', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const homeHeading = screen.getByText(/Welcome to Personal Task Manager/i);
    expect(homeHeading).toBeInTheDocument();
  });

  test('AppComponent boundary navigates to Task List page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const taskListLink = screen.getByText(/Task List/i);
    taskListLink.click();
    const taskListHeading = screen.getAllByRole('heading', { name: /Task List/i })[0];
    expect(taskListHeading).toBeInTheDocument();
  });

  test('AppComponent boundary navigates to About page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const aboutLink = screen.getByText(/About/i);
    aboutLink.click();
    const aboutHeading = screen.getByText(/About Personal Task Manager/i);
    expect(aboutHeading).toBeInTheDocument();
  });
});
