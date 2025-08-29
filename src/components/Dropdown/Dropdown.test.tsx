import { describe, it } from 'vitest';
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
      <Dropdown title='Test Dropdown' dropdownOptions={dummyDropdownOptions} />
    );

    const dropdown = screen.getByText(/test dropdown/i);
    expect(dropdown).toBeInTheDocument();
    expect(screen.queryAllByRole('checkbox')).toHaveLength(2);
  });

  it('should let user to toggle open and close dropdown', () => {
    render(
      <Dropdown title='Test Dropdown' dropdownOptions={dummyDropdownOptions} />
    );

    const dropdown = screen.getByText(/test dropdown/i);
    fireEvent.click(dropdown);

    let dropdownOptions = screen.queryAllByRole('checkbox');
    expect(dropdownOptions).toHaveLength(0);

    fireEvent.click(dropdown);

    dropdownOptions = screen.queryAllByRole('checkbox');
    expect(dropdownOptions).toHaveLength(2);
  });

  it('should let user select and deselect options when checkbox is clicked', () => {
    render(
      <Dropdown title='Test Dropdown' dropdownOptions={dummyDropdownOptions} />
    );

    const dropdownOptions = screen.queryAllByRole(
      'checkbox'
    ) as HTMLInputElement[];
    expect(dropdownOptions[0].checked).toBe(false);
    expect(dropdownOptions[1].checked).toBe(false);

    fireEvent.click(dropdownOptions[0]);
    expect(dropdownOptions[0].checked).toBe(true);

    fireEvent.click(dropdownOptions[1]);
    expect(dropdownOptions[1].checked).toBe(true);

    fireEvent.click(dropdownOptions[0]);
    expect(dropdownOptions[0].checked).toBe(false);
  });
});
