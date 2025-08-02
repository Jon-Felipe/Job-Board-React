import type { Meta, StoryObj } from '@storybook/react-vite';
import styled from 'styled-components';
import Spinner from './Spinner';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/UI/Spinner',
  component: Spinner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultSpinner: Story = {};

export const SizeSpinners: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => (
    <SpinnerContainer>
      <Spinner {...args} size='small' />
      <Spinner {...args} size='medium' />
      <Spinner {...args} size='large' />
    </SpinnerContainer>
  ),
};

export const VariantSpinners: Story = {
  args: {
    size: 'medium',
  },
  render: (args) => (
    <SpinnerContainer>
      <Spinner {...args} variant='primary' />
      <Spinner {...args} variant='secondary' />
      <Spinner {...args} variant='success' />
      <Spinner {...args} variant='danger' />
    </SpinnerContainer>
  ),
};
