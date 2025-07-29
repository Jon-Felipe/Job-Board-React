import { describe, it, expect } from 'vitest';
import reducer, { addUser, updateUser } from './userSlice';
import type { IUser } from '../../utils/types';

describe('user reducer', () => {
  const initialState: IUser = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    address: undefined,
  };

  it('should return the initial state when no action is provided', () => {
    const nextState = reducer(undefined, { type: 'unknown' });

    expect(nextState).toEqual(initialState);
  });

  it('should handle addUser action and update state', () => {
    const userPayload: IUser = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
    };

    const action = addUser(userPayload);

    const nextState = reducer(initialState, action);

    expect(nextState.firstName).toBe('John');
    expect(nextState.lastName).toBe('Doe');
    expect(nextState.email).toBe('john@gmail.com');
  });

  it('should handle updateUser action and update state', () => {
    const userPayload: IUser = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '0123456789',
      age: 22,
      address: {
        street: '123 Example Street',
        city: 'Example City',
        postalCode: '1234',
        country: 'Example Country',
      },
    };

    const action = updateUser(userPayload);

    const nextState = reducer(initialState, action);

    expect(nextState.firstName).toBe('John');
    expect(nextState.lastName).toBe('Doe');
    expect(nextState.email).toBe('john@gmail.com');
    expect(nextState.phone).toBe('0123456789');
    expect(nextState.age).toBe(22);
    expect(nextState.address).toEqual({
      street: '123 Example Street',
      city: 'Example City',
      postalCode: '1234',
      country: 'Example Country',
    });
  });
});
