import type { Meta, StoryObj } from '@storybook/react';
import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@org-design-system/components';
import React from 'react';

const meta: Meta<typeof Tooltip> = {
  title: '@org-design-system/components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        Tooltip content here
      </TooltipContent>
    </Tooltip>
  ),
};

export const CustomSides: Story = {
  render: () => (
    <div className="flex gap-4">
      {['top', 'right', 'bottom', 'left'].map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">{side}</Button>
          </TooltipTrigger>
          <TooltipContent side={side as any}>
            Content on {side}
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
};
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">Sizes</h3>
        <div className="flex gap-4">
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <Tooltip key={size}>
              <TooltipTrigger asChild>
                <Button variant="outline">Size: {size}</Button>
              </TooltipTrigger>
              <TooltipContent size={size}>
                Tooltip content ({size})
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">Intents</h3>
        <div className="flex flex-wrap gap-4">
          {(['accent', 'neutral', 'success', 'warning', 'error', 'info'] as const).map((intent) => (
            <Tooltip key={intent}>
              <TooltipTrigger asChild>
                <Button variant="outline">Intent: {intent}</Button>
              </TooltipTrigger>
              <TooltipContent intent={intent}>
                Tooltip with {intent} intent
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  ),
};
