import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Badge } from '@org-design-system/components';
import { Check, AlertCircle, Info, Bell } from 'lucide-react';

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
      options: ['accent', 'neutral', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Solid: Story = {
  args: { variant: 'solid', intent: 'accent', children: 'Solid Badge' },
};

export const Soft: Story = {
  args: { variant: 'soft', intent: 'accent', children: 'Soft Badge' },
};

export const Surface: Story = {
  args: { variant: 'surface', intent: 'accent', children: 'Surface Badge' },
};

export const Outline: Story = {
  args: { variant: 'outline', intent: 'accent', children: 'Outline Badge' },
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Badge intent="accent" leftIcon={<Bell className="size-3" />}>Notifications</Badge>
        <Badge intent="success" leftIcon={<Check className="size-3" />}>Success</Badge>
        <Badge intent="error" leftIcon={<AlertCircle className="size-3" />}>Error</Badge>
      </div>
      <div className="flex gap-2">
        <Badge variant="soft" intent="info" rightIcon={<Info className="size-3" />}>Info</Badge>
        <Badge variant="outline" intent="neutral" rightIcon={<Check className="size-3" />}>Completed</Badge>
      </div>
    </div>
  ),
};

export const Intents: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Badge variant="solid" intent="accent">Accent</Badge>
        <Badge variant="solid" intent="neutral">Neutral</Badge>
        <Badge variant="solid" intent="success">Success</Badge>
        <Badge variant="solid" intent="warning">Warning</Badge>
        <Badge variant="solid" intent="error">Error</Badge>
        <Badge variant="solid" intent="info">Info</Badge>
      </div>
      <div className="flex gap-2">
        <Badge variant="soft" intent="accent">Accent</Badge>
        <Badge variant="soft" intent="neutral">Neutral</Badge>
        <Badge variant="soft" intent="success">Success</Badge>
        <Badge variant="soft" intent="warning">Warning</Badge>
        <Badge variant="soft" intent="error">Error</Badge>
        <Badge variant="soft" intent="info">Info</Badge>
      </div>
      <div className="flex gap-2">
        <Badge variant="surface" intent="accent">Accent</Badge>
        <Badge variant="surface" intent="neutral">Neutral</Badge>
        <Badge variant="surface" intent="success">Success</Badge>
        <Badge variant="surface" intent="warning">Warning</Badge>
        <Badge variant="surface" intent="error">Error</Badge>
        <Badge variant="surface" intent="info">Info</Badge>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge size="sm" intent="accent">Small</Badge>
      <Badge size="md" intent="accent">Medium</Badge>
      <Badge size="lg" intent="accent">Large</Badge>
    </div>
  ),
};
