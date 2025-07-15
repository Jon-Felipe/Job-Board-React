import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Button, { type ButtonProps } from './Button';

describe('Input Component', () => {
  const buttonProps: ButtonProps = {
    children: 'Click Me',
    variant: 'primary',
    disabled: false,
    isLoading: false,
  };

  it('should render button component with correct props', () => {
    render(<Button {...buttonProps} />);
    const button = screen.getByRole('button') as HTMLButtonElement;

    expect(button).toBeInTheDocument();
  });

  it('should render button as disabled if disabled prop is true', () => {
    render(<Button {...buttonProps} disabled={true} />);
    const button = screen.getByRole('button') as HTMLButtonElement;

    expect(button.disabled).toBeTruthy();
  });

  it('should render button loading text if loading prop is true', () => {
    render(<Button {...buttonProps} isLoading={true} />);
    const button = screen.getByRole('button') as HTMLButtonElement;

    expect(button.textContent).toBe('Loading...');
  });
});
