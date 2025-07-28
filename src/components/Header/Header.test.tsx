import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import Header from './Header';
import { store } from '../../store';

describe('Header Component', () => {
  it('renders the header component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header title='Header Title' />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/header title/i)).toBeInTheDocument();
  });
});
