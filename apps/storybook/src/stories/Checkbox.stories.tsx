import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@org-design-system/components';

const meta: Meta<typeof Checkbox> = {
  title: 'org-design-system/components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};
