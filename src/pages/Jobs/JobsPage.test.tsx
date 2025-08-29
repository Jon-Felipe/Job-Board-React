import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import JobsPage from './JobsPage';

describe('JobsPage', () => {
  it('should render jobs page', () => {
    render(
      <MemoryRouter>
        <JobsPage />
      </MemoryRouter>
    );

    const title = screen.getByText(/find your favourite job/i);
    const description = screen.getByText(
      /Find jobs, create trackable resumes and enrich your applications/i
    );
    const filtersTitle = screen.getByText(/^filters$/i);
    const jobTypeDropdown = screen.getByText(/job types/i);
    const experienceLevelDropdown = screen.getByText(/experience level/i);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(filtersTitle).toBeInTheDocument();
    expect(jobTypeDropdown).toBeInTheDocument();
    expect(experienceLevelDropdown).toBeInTheDocument();

    const clearButton = screen.getByRole('button', { name: /clear filters/i });
    expect(clearButton).toBeInTheDocument();

    const jobCards = screen.getAllByTestId('job-card');
    expect(jobCards.length).toBeGreaterThan(0);
  });
});
