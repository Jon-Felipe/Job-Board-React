import type { Meta, StoryObj } from '@storybook/react-vite';
import styled from 'styled-components';
import Badge from './Badge';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/UI/Badge',
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: {
      control: 'text',
      description: 'Text or element to display inside the badge',
      table: {
        type: { summary: 'ReactNode | string' },
        defaultValue: { summary: 'Badge' },
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Size of the badge',
      table: {
        type: { summary: 'small | medium | large' },
        defaultValue: { summary: 'medium' },
      },
    },
    rounded: {
      control: 'boolean',
      description: 'Whether the badge has fully rounded corners',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultBadge: Story = {
  args: {
    children: 'Badge',
  },
};

export const SizeBadge: Story = {
  args: {
    children: 'Size',
    rounded: false,
  },
  render: (args) => {
    return (
      <BadgeContainer>
        <Badge size='small' {...args} />
        <Badge size='medium' {...args} />
        <Badge size='large' {...args} />
      </BadgeContainer>
    );
  },
};

export const RoundedBadge: Story = {
  args: {
    children: 'Rounded',
    rounded: true,
  },
};
