import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('Login Page', () => {
  it('should render the login page', () => {
    render(<LoginPage />);

    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const signInButton = screen.getByRole('button', { name: /sign up/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });

  it('should update email and password inputs when typing', () => {
    render(<LoginPage />);

    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    expect(emailInput).toHaveValue('test@test.com');
    expect(passwordInput).toHaveValue('123456');
  });

  it('should render sign up inputs on sign up button click', () => {
    render(<LoginPage />);

    const signUpButton = screen.getByRole('button', { name: /sign up/i });

    fireEvent.click(signUpButton);

    const firstNameInput = screen.getByPlaceholderText(/first name/i);
    const lastNameInput = screen.getByPlaceholderText(/last name/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/^password$/i);
    const confirmPasswordInput =
      screen.getByPlaceholderText(/^confirm password$/i);

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
  });

  it('should handle sign up form text input', () => {
    render(<LoginPage />);

    const signUpButton = screen.getByRole('button', { name: /sign up/i });

    fireEvent.click(signUpButton);

    const firstNameInput = screen.getByPlaceholderText(/first name/i);
    const lastNameInput = screen.getByPlaceholderText(/last name/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/^password$/i);
    const confirmPasswordInput =
      screen.getByPlaceholderText(/^confirm password$/i);

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });
    fireEvent.change(confirmPasswordInput, { target: { value: '123456' } });

    expect(firstNameInput).toHaveValue('John');
    expect(lastNameInput).toHaveValue('Doe');
    expect(emailInput).toHaveValue('john@gmail.com');
    expect(passwordInput).toHaveValue('123456');
    expect(confirmPasswordInput).toHaveValue('123456');
  });
});
