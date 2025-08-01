import type { Meta, StoryObj } from '@storybook/react-vite';
import styled from 'styled-components';
import { FaShoppingCart, FaArrowRight, FaUserAlt } from 'react-icons/fa';
import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/UI/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: {
      control: 'select',
      description:
        'The native HTML button type. Can be "button", "submit" or "reset". Defaults to "button" if not specified.',
      options: ['button', 'submit', 'reset'],
    },
    children: {
      control: 'text',
      description: 'Content inside the button, usually text or an icon.',
    },
    size: {
      control: {
        type: 'radio',
      },
      description:
        'Controls the size of the button. Common values are "small", "medium", or "large".',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'radio',
      description:
        'Visual style of the button, e.g., "primary", "outlined" or "text".',
      options: ['primary', 'outlined', 'text'],
    },
    disabled: {
      control: 'boolean',
      description:
        'Disables the button, preventing interaction and applying a disabled style.',
    },
    isLoading: {
      control: 'boolean',
      description:
        'Shows a loading indicator and disables interaction while true',
    },
    onClick: {
      description: 'Callback function invoked when the button is clicked.',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const ChildrenContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;

  p {
    margin: 0;
  }
`;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultButton: Story = {
  args: {
    type: 'button',
    children: 'Click Me',
    variant: 'primary',
    size: 'medium',
  },
};

export const VariantButtons: Story = {
  args: {
    type: 'button',
    children: 'Click Me',
  },
  render: (args) => (
    <Container>
      <Button {...args} variant='primary' />
      <Button {...args} variant='outlined' />
      <Button {...args} variant='text' />
    </Container>
  ),
};

export const SizeButtons: Story = {
  args: {
    type: 'button',
    children: 'Click Me',
  },
  render: (args) => (
    <Container>
      <Button {...args} size='small' />
      <Button {...args} size='medium' />
      <Button {...args} size='large' />
    </Container>
  ),
};

export const IconButtons: Story = {
  args: {
    type: 'button',
    children: 'Click Me',
  },
  render: (args) => (
    <Container>
      <Button {...args} variant='primary'>
        <ChildrenContainer>
          <FaShoppingCart />
          <p>Buy now</p>
        </ChildrenContainer>
      </Button>
      <Button {...args} variant='outlined'>
        <ChildrenContainer>
          <p>Choose plan</p>
          <FaArrowRight />
        </ChildrenContainer>
      </Button>
      <Button {...args} variant='text'>
        <ChildrenContainer>
          <FaUserAlt />
          <p>Login</p>
        </ChildrenContainer>
      </Button>
    </Container>
  ),
};

export const DisabledButton: Story = {
  args: {
    type: 'button',
    children: 'Click Me',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
};

export const LoadingButton: Story = {
  args: {
    type: 'button',
    children: 'Click Me',
    variant: 'primary',
    size: 'medium',
    isLoading: true,
  },
};
