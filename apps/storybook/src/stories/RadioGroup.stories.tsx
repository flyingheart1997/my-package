import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from '@org-design-system/components';
import React from 'react';

const meta: Meta<typeof RadioGroup> = {
  title: '@org-design-system/components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const RadioGroupDemo = ({ size, ...args }: any) => (
  <RadioGroup defaultValue="option-1" {...args}>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="option-1" id="option-1" size={size} disabled={args.disabled} />
      <label htmlFor="option-1" className={`text-sm font-medium text-gray-12 ${args.disabled ? "opacity-50" : ""}`}>Option One</label>
    </div>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="option-2" id="option-2" size={size} disabled={args.disabled} />
      <label htmlFor="option-2" className={`text-sm font-medium text-gray-12 ${args.disabled ? "opacity-50" : ""}`}>Option Two</label>
    </div>
  </RadioGroup>
);

export const Default: StoryObj = {
  render: (args) => <RadioGroupDemo {...args} />,
  args: {
    size: 'md',
  },
};

export const Disabled: StoryObj = {
  render: (args) => <RadioGroupDemo {...args} />,
  args: {
    size: 'md',
    disabled: true,
  },
};

export const AllSizes: StoryObj = {
  render: (args) => (
    <div className="flex flex-col gap-6">
      {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size} className="space-y-2">
          <p className="text-sm font-medium text-gray-11 capitalize">Size: {size}</p>
          <RadioGroupDemo {...args} size={size} />
        </div>
      ))}
    </div>
  ),
};
