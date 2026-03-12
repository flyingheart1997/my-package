import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '@org-design-system/components';

const meta: Meta<typeof Breadcrumb> = {
  title: '@org-design-system/components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {},
};
