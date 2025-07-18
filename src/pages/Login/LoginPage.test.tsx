import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('Login Page', () => {
  it('should render the login page', () => {
    render(<LoginPage />);
  });
});
