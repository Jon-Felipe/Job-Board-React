import type { Meta, StoryObj } from '@storybook/react-vite';
import JobCard from './JobCard';
import { MemoryRouter } from 'react-router';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/JobCard',
  component: JobCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    job: {
      description:
        'Job data object containing all job details displayed in the card.',
      control: 'object',
      table: {
        type: {
          summary: 'IJob',
          detail: `
interface IJob {
  _id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  salaryFrom: number;
  salaryTo: number;
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Freelance';
  createdAt: string;
  skillsRequired: string[];
  remote: boolean;
  experienceLevel: 'Entry' | 'Mid' | 'Senior';
  industry: string;
}
          `,
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof JobCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultJobCard: Story = {
  args: {
    job: {
      _id: '123',
      title: 'Frontend Developer',
      description:
        'Build and maintain user-facing features using React and TypeScript.',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      salaryFrom: 100000,
      salaryTo: 150000,
      employmentType: 'Full-time',
      skillsRequired: ['React', 'JavaScript', 'TypeScript', 'CSS'],
      remote: true,
      experienceLevel: 'Mid',
      industry: 'Technology',
      createdAt: '2025-08-31',
    },
  },
};
