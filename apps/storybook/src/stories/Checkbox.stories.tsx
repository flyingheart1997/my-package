import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@org-design-system/components';
import React from 'react';

const meta: Meta<typeof Checkbox> = {
  title: '@org-design-system/components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['surface', 'solid'],
    },
    intent: {
      control: 'select',
      options: ['neutral', 'accent', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
  }
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    variant: 'surface',
    size: 'md',
    intent: 'accent',
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    size: 'md',
    intent: 'accent',
  },
};

export const AllIntents: Story = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-8 w-80">
      {(['neutral', 'accent', 'success', 'warning', 'error', 'info'] as const).map((intent) => (
        <div key={intent} className="flex items-center gap-2">
          <Checkbox {...args} intent={intent} defaultChecked />
          <p className="text-sm font-medium text-gray-11 capitalize">{intent}</p>
        </div>
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size} className="flex items-center gap-2">
          <Checkbox {...args} size={size} defaultChecked />
          <p className="text-sm font-medium text-gray-11 capitalize">Size: {size}</p>
        </div>
      ))}
    </div>
  ),
};

export const Indeterminate: Story = {
  args: {
    checked: 'indeterminate',
    intent: 'accent',
    size: 'md',
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 opacity-50">
        <Checkbox {...args} disabled />
        <p className="text-sm font-medium text-gray-11">Unchecked Disabled</p>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox {...args} disabled defaultChecked />
        <p className="text-sm font-medium text-gray-11">Checked Disabled</p>
      </div>
    </div>
  ),
};
