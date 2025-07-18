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
});
