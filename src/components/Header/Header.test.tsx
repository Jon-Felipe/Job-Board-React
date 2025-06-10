import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders the header component', () => {
    render(<Header title='Header Title' />);
    expect(screen.getByText(/header title/i)).toBeInTheDocument();
  });
});
