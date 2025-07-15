import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Input, { type InputProps } from './Input';

describe('Input Component', () => {
  const inputProps: InputProps = {
    type: 'text',
    name: 'name',
    value: '',
    onChange: vi.fn(),
    placeholder: 'Name',
  };

  it('should render input component with correct props', () => {
    render(<Input {...inputProps} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('name', inputProps.name);
    expect(input).toHaveAttribute('placeholder', inputProps.placeholder);
  });

  it('should call on change on input value change', () => {
    render(<Input {...inputProps} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'John' } });

    expect(inputProps.onChange).toHaveBeenCalledTimes(1);
  });
});
