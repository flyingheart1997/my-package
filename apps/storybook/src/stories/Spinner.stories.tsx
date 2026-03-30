import type { Meta, StoryObj } from '@storybook/react';
import { Spinner, Button } from '@org-design-system/components';
import React from 'react';

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

export const InButton: Story = {
  render: () => (
    <Button disabled>
      <Spinner className="mr-2" />
      Loading...
    </Button>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div className="flex gap-4">
      <Spinner className="text-(--color-stroke-success)" />
      <Spinner className="text-(--color-stroke-error)" />
      <Spinner className="text-(--color-stroke-warning)" />
    </div>
  ),
};
