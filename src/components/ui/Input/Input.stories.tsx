import type { Meta, StoryObj } from '@storybook/react-vite';
import Input from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/UI/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultInput: Story = {
  args: {
    type: 'text',
    placeholder: 'First Name',
    name: 'firstName',
    value: '',
    onChange: () => {},
  },
};

export const LabeledInput: Story = {
  args: {
    type: 'text',
    label: 'First Name',
    placeholder: 'First Name',
    name: 'firstName',
    value: '',
    onChange: () => {},
  },
};
