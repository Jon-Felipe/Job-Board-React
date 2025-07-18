import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
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
});
