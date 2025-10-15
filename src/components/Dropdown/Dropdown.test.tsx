import { describe, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

// extras
import type { IDropdownOption } from '../../utils/types';

const dummyDropdownOptions: IDropdownOption[] = [
  { id: 1, text: 'test 1' },
  { id: 2, text: 'test 2' },
];

describe('Dropdown Component', () => {
  it('should render the dropdown component with dropdown options', () => {
    render(
      <Dropdown
        title='Test Dropdown'
        dropdownOptions={dummyDropdownOptions}
        selectedOptions={[]}
        setSelectedOptions={vi.fn()}
      />
    );

    const dropdown = screen.getByText(/test dropdown/i);
    expect(dropdown).toBeInTheDocument();

    const dropdownOptions = screen.queryAllByRole(
      'checkbox'
    ) as HTMLInputElement[];
    expect(dropdownOptions).toHaveLength(2);
    expect(dropdownOptions[0].checked).toBe(false);
    expect(dropdownOptions[1].checked).toBe(false);
  });

  it('should let user to toggle open and close dropdown', () => {
    render(
      <Dropdown
        title='Test Dropdown'
        dropdownOptions={dummyDropdownOptions}
        selectedOptions={[]}
        setSelectedOptions={vi.fn()}
      />
    );

    const dropdown = screen.getByText(/test dropdown/i);
    fireEvent.click(dropdown);

    let dropdownOptions = screen.queryAllByRole('checkbox');
    expect(dropdownOptions).toHaveLength(0);

    fireEvent.click(dropdown);

    dropdownOptions = screen.queryAllByRole('checkbox');
    expect(dropdownOptions).toHaveLength(2);
  });

  it('should trigger setSelectedOptions on checkbox click', () => {
    const mockSetSelectedOptions = vi.fn();

    render(
      <Dropdown
        title='Test Dropdown'
        dropdownOptions={dummyDropdownOptions}
        selectedOptions={[]}
        setSelectedOptions={mockSetSelectedOptions}
      />
    );

    const dropdownOptions = screen.queryAllByRole(
      'checkbox'
    ) as HTMLInputElement[];

    fireEvent.click(dropdownOptions[0]);
    expect(mockSetSelectedOptions).toHaveBeenCalledTimes(1);

    fireEvent.click(dropdownOptions[1]);
    expect(mockSetSelectedOptions).toHaveBeenCalledTimes(2);
  });

  it('should reflect the checked state', () => {
    render(
      <Dropdown
        title='Test Dropdown'
        dropdownOptions={dummyDropdownOptions}
        selectedOptions={['test 1']}
        setSelectedOptions={vi.fn()}
      />
    );

    const dropdownOptions = screen.queryAllByRole(
      'checkbox'
    ) as HTMLInputElement[];

    expect(dropdownOptions[0].checked).toBe(true);
    expect(dropdownOptions[1].checked).toBe(false);
  });
});
