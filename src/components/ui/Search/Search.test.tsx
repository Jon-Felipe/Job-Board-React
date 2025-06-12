import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Search, { type SearchProp } from './Search';

describe('Search Component', () => {
  const searchProps: SearchProp = {
    name: 'search',
    value: '',
    placeholder: 'Search something...',
    onChange: vi.fn(),
    required: true,
  };

  it('should render search component with correct props', () => {
    render(<Search {...searchProps} />);
    const search = screen.getByTestId('search-input') as HTMLInputElement;

    expect(search).toBeInTheDocument();
    expect(search).toHaveAttribute('type', 'search');
    expect(search).toHaveAttribute('id', searchProps.name);
    expect(search).toHaveAttribute('name', searchProps.name);
    expect(search).toHaveAttribute('placeholder', searchProps.placeholder);
    expect(search).toBeRequired();
  });

  it('should call on change on input value change', () => {
    render(<Search {...searchProps} />);

    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'new value' } });

    expect(searchProps.onChange).toHaveBeenCalledTimes(1);
  });
});
