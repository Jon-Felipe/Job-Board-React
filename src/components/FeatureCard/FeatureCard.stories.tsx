import type { Meta, StoryObj } from '@storybook/react-vite';
import { FaRegBell } from 'react-icons/fa';
import FeatureCard from './FeatureCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/FeatureCard',
  component: FeatureCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    icon: {
      control: false,
      description:
        'An optional icon (ReactNode) to display at the top of the card.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    title: {
      control: 'text',
      description: 'Title text displayed in the card header.',
      table: {
        type: { summary: 'string' },
      },
    },
    text: {
      control: 'text',
      description: 'Main text content of the card',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultFeatureCard: Story = {
  args: {
    icon: <FaRegBell />,
    title: 'Never miss an opportunity',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corrupti ipsam, quae dolorem nobis excepturi laboriosam consequuntur consectetur velit numquam!',
  },
};

export const FeatureCardWithoutIcon: Story = {
  args: {
    title: 'Never miss an opportunity',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corrupti ipsam, quae dolorem nobis excepturi laboriosam consequuntur consectetur velit numquam!',
  },
};
