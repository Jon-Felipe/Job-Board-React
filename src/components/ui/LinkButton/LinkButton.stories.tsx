import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import styled from 'styled-components';
import LinkButton from './LinkButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/UI/LinkButton',
  component: LinkButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'text'],
      description: 'Visual style of the button',
      table: {
        type: { summary: 'primary | secondary | text' },
        defaultValue: { summary: 'primary' },
      },
    },
    path: {
      control: 'text',
      description: 'React Router path for navigation',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '/' },
      },
    },
    children: {
      control: 'text',
      description: 'Content inside the link button',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'Click Me' },
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
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const LinkButtonContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultLinkButton: Story = {
  args: {
    path: '/',
    children: 'Read More',
    variant: 'primary',
  },
};

export const VariantLinkButtons: Story = {
  args: {
    path: '/',
  },
  render: (args) => (
    <LinkButtonContainer>
      <LinkButton {...args} variant='primary'>
        Read More
      </LinkButton>
      <LinkButton {...args} variant='secondary'>
        Read More
      </LinkButton>
      <LinkButton {...args} variant='text'>
        Read More
      </LinkButton>
    </LinkButtonContainer>
  ),
};
