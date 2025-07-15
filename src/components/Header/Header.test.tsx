import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router';
import Header from './Header';

describe('Header Component', () => {
  it('renders the header component', () => {
    render(
      <MemoryRouter>
        <Header title='Header Title' />
      </MemoryRouter>
    );
    expect(screen.getByText(/header title/i)).toBeInTheDocument();
  });
});
