import React, { useState } from 'react';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import Search from './Search';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/UI/Search',
  component: Search,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    name: {
      control: 'text',
      description: 'The name attribute for the search input',
      table: {
        type: { summary: 'string' },
        category: 'Props',
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the search input',
      table: {
        type: { summary: 'string' },
        category: 'Props',
      },
    },
    value: {
      control: 'text',
      description: 'The current value of the input (controlled)',
      table: {
        type: { summary: 'string' },
        category: 'Props',
      },
    },
    required: {
      control: 'boolean',
      description: 'Marks the input as required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    onChange: {
      control: false,
      description: 'Callback when the input value changes',
      table: {
        type: { summary: '(e: React.ChangeEvent<HTMLInputElement>) => void' },
        category: 'Events',
      },
    },
  },
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultSearch: Story = {
  args: {
    name: 'firstName',
    placeholder: 'First Name',
    value: 'John',
    onChange: () => {},
  },
};

const Template: StoryFn<typeof Search> = (args) => {
  const [value, setValue] = useState<string>(args.value ?? '');

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return <Search {...args} value={value} onChange={handleOnChange} />;
};

export const ControlledSearch = Template.bind({});
ControlledSearch.args = {
  name: 'firstName',
  placeholder: 'First Name',
  value: '',
  required: true,
};
