import { describe, it, expect } from 'vitest';
import reducer, { addUser, type IUserState } from './userSlice';

describe('user reducer', () => {
  const initialState: IUserState = { firstName: '', lastName: '', email: '' };

  it('should return the initial state when no action is provided', () => {
    const nextState = reducer(undefined, { type: 'unknown' });

    expect(nextState).toEqual(initialState);
  });

  it('should handle addUser action and update state', () => {
    const userPayload: IUserState = {
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
});
