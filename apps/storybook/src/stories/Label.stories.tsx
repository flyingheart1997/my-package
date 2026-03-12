import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Label, Checkbox } from '@org-design-system/components';

const meta: Meta<typeof Label> = {
  title: 'org-design-system/components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Accept terms and conditions',
  },
};

export const WithControl: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};
