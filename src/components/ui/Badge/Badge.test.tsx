import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Badge from './Badge';

describe('Badge Component', () => {
  it('should render badge component', () => {
    render(<Badge children='Full-time' />);
    expect(screen.getByText('Full-time')).toBeInTheDocument();
  });

  it('should apply styles for small size badge', () => {
    render(<Badge children='Full-time' size='small' />);
    expect(screen.getByText('Full-time')).toHaveStyle('font-size: 12px');
    expect(screen.getByText('Full-time')).toHaveStyle('padding: 2px 10px');
    expect(screen.getByText('Full-time')).toHaveStyle('border-radius: 4px');
  });

  it('should apply styles for medium size badge', () => {
    render(<Badge children='Full-time' size='medium' />);
    expect(screen.getByText('Full-time')).toHaveStyle('font-size: 14px');
    expect(screen.getByText('Full-time')).toHaveStyle('padding: 4px 12px');
    expect(screen.getByText('Full-time')).toHaveStyle('border-radius: 6px');
  });

  it('should apply styles for large size badge', () => {
    render(<Badge children='Full-time' size='large' />);
    expect(screen.getByText('Full-time')).toHaveStyle('font-size: 16px');
    expect(screen.getByText('Full-time')).toHaveStyle('padding: 6px 14px');
    expect(screen.getByText('Full-time')).toHaveStyle('border-radius: 8px');
  });

  it('should apply styles for rounded badge', () => {
    render(<Badge children='Full-time' size='small' rounded />);
    expect(screen.getByText('Full-time')).toHaveStyle('border-radius: 9999px');
  });
});
