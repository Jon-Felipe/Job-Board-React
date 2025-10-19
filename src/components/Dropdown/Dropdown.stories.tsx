import type { Meta, StoryFn } from '@storybook/react-vite';
import Dropdown from './Dropdown';
import { jobTypes } from '../../utils/constants';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/UI/Dropdown',
  component: Dropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: {
      control: 'text',
      description: 'The heading/title of the dropdown section.',
    },
    dropdownOptions: {
      control: 'object',
      description: 'Array of available dropdown options with `id` and `text`.',
    },
    selectedOptions: {
      control: 'object',
      description: 'Array of currently selected option strings.',
    },
    setSelectedOptions: {
      table: {
        disable: true,
      },
      description: 'Function to update the selected options.',
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

const Template: StoryFn<typeof Dropdown> = (args) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    args.selectedOptions || []
  );

  return (
    <Dropdown
      {...args}
      selectedOptions={selectedOptions}
      setSelectedOptions={setSelectedOptions}
    />
  );
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  title: 'Job Types',
  dropdownOptions: jobTypes,
  selectedOptions: ['Full-time', 'Part-time'],
};
