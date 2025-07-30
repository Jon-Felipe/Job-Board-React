import { vi, describe, it, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// extras
import ProfilePage from './ProfilePage';
import userReducer, { type userSlice } from '../../features/user/userSlice';
import type { RootState } from '../../store';

vi.mock('../../features/user/userSlice', async () => {
  const actual = await vi.importActual<typeof userSlice>(
    '../../features/user/userSlice'
  );
  return {
    ...actual,
    updateUser: vi.fn(),
  };
});

vi.mock('../../hooks', async () => {
  const actualHooks = await vi.importActual('../../hooks');
  return {
    ...actualHooks,
    useAppDispatch: () => vi.fn(),
    useAppSelector: (selectorFn: (state: RootState) => unknown) =>
      selectorFn({
        user: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
          phone: '123456789',
          age: '22',
          address: {
            street: '123 Example Street',
            city: 'Townsville',
            postalCode: '12345',
            country: 'Wonderland',
          },
        },
      }),
  };
});

const renderWithStore = () => {
  const store = configureStore({ reducer: { user: userReducer } });
  return render(
    <Provider store={store}>
      <ProfilePage />
    </Provider>
  );
};

describe('Profile Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders pre-filled user data', () => {
    renderWithStore();

    expect(screen.getByDisplayValue('John')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Doe')).toBeInTheDocument();
    expect(screen.getByDisplayValue('john@example.com')).toBeInTheDocument();
    expect(screen.getByDisplayValue('123 Example Street')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Townsville')).toBeInTheDocument();
    expect(screen.getByDisplayValue('12345')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Wonderland')).toBeInTheDocument();
  });

  it('updates form inputs correctly', () => {
    renderWithStore();

    const firstNameInput = screen.getByPlaceholderText(
      'First Name'
    ) as HTMLInputElement;
    fireEvent.change(firstNameInput, { target: { value: 'Alice' } });

    expect(firstNameInput.value).toBe('Alice');
  });

  it('updates nested address field correctly', () => {
    renderWithStore();

    const cityInput = screen.getByPlaceholderText('City') as HTMLInputElement;
    fireEvent.change(cityInput, { target: { value: 'New City' } });

    expect(cityInput.value).toBe('New City');
  });
});
