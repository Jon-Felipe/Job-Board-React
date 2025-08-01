import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button, { type ButtonProps } from './Button';

describe('Input Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const createButtonProps = (
    overrides: Partial<ButtonProps> = {}
  ): ButtonProps => ({
    type: 'button',
    children: 'Click Me',
    size: 'medium',
    variant: 'primary',
    disabled: false,
    isLoading: false,
    onClick: vi.fn(),
    ...overrides,
  });

  it('should render button component with correct props', () => {
    const buttonProps = createButtonProps();
    render(<Button {...buttonProps} />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
  });

  it('should let user click button', () => {
    const buttonProps = createButtonProps();
    render(<Button {...buttonProps} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(buttonProps.onClick).toBeCalledTimes(1);
  });

  it('should render button as disabled if disabled prop is true', () => {
    const buttonProps = createButtonProps({ disabled: true });
    render(<Button {...buttonProps} />);
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('should render button loading text if loading prop is true', () => {
    const buttonProps = createButtonProps({ isLoading: true });
    render(<Button {...buttonProps} />);
    const button = screen.getByRole('button');

    expect(button.textContent).toBe('Loading...');
  });
});
