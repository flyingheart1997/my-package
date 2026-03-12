import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Toggle } from '@org-design-system/components';
import { EditIcon } from '@org-design-system/icons';

const meta: Meta<typeof Toggle> = {
  title: 'org-design-system/components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    children: 'Toggle',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const WithIcon: Story = {
  render: () => (
    <Toggle aria-label="Toggle italic">
      <EditIcon className="h-4 w-4" />
    </Toggle>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};
