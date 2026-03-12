import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@org-design-system/components';

const meta: Meta<typeof Spinner> = {
  title: '@org-design-system/components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};
