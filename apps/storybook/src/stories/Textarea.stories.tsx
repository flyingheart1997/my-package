import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@org-design-system/components';
import React from 'react';

const meta: Meta<typeof Textarea> = {
  title: '@org-design-system/components/Textarea',
  component: Textarea,
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
    state: {
      control: 'select',
      options: ['default', 'hover', 'select'],
    },
  }
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Type your message here...",
    variant: 'surface',
    size: 'md',
  },
};

export const Solid: Story = {
  args: {
    placeholder: "Solid variant textarea",
    variant: 'solid',
    size: 'md',
  },
};

export const AllIntents: Story = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-8 w-150">
      {(['neutral', 'accent', 'success', 'warning', 'error', 'info'] as const).map((intent) => (
        <div key={intent} className="space-y-2">
          <p className="text-sm font-medium text-gray-11 capitalize">{intent}</p>
          <Textarea {...args} intent={intent} placeholder={`${intent} intent`} />
        </div>
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-96">
      {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Textarea key={size} {...args} size={size} placeholder={`Size: ${size}`} />
      ))}
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-96">
      <Textarea {...args} state="default" placeholder="Default state" />
      <Textarea {...args} state="hover" placeholder="Forced: Hover" />
      <Textarea {...args} state="select" placeholder="Forced: Select (Focus)" />
      <Textarea {...args} state="error" placeholder="Forced: Error" />
      <Textarea {...args} aria-invalid="true" placeholder="Aria-invalid example" />
      <Textarea {...args} disabled placeholder="Disabled state" />
    </div>
  ),
};
