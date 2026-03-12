import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Badge } from '@org-design-system/components';

const meta: Meta<typeof Badge> = {
  title: 'org-design-system/components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'soft', 'surface', 'outline'],
    },
    intent: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info', 'neutral'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Soft: Story = {
  args: { variant: 'soft', intent: 'primary', children: 'Badge' },
};

export const Solid: Story = {
  args: { variant: 'solid', intent: 'primary', children: 'Badge' },
};

export const Surface: Story = {
  args: { variant: 'surface', intent: 'primary', children: 'Badge' },
};

export const Outline: Story = {
  args: { variant: 'outline', intent: 'primary', children: 'Badge' },
};

export const Intents: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Badge variant="soft" intent="primary">Primary</Badge>
        <Badge variant="soft" intent="success">Success</Badge>
        <Badge variant="soft" intent="warning">Warning</Badge>
        <Badge variant="soft" intent="error">Error</Badge>
        <Badge variant="soft" intent="info">Info</Badge>
        <Badge variant="soft" intent="neutral">Neutral</Badge>
      </div>
      <div className="flex gap-2">
        <Badge variant="solid" intent="primary">Primary</Badge>
        <Badge variant="solid" intent="success">Success</Badge>
        <Badge variant="solid" intent="warning">Warning</Badge>
        <Badge variant="solid" intent="error">Error</Badge>
        <Badge variant="solid" intent="info">Info</Badge>
        <Badge variant="solid" intent="neutral">Neutral</Badge>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge size="sm" intent="primary">Small</Badge>
      <Badge size="md" intent="primary">Medium</Badge>
      <Badge size="lg" intent="primary">Large</Badge>
    </div>
  ),
};
