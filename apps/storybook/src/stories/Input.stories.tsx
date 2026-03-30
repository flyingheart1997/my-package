import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@org-design-system/components';
import React from 'react';

const meta: Meta<typeof Input> = {
  title: '@org-design-system/components/Input',
  component: Input,
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
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Type something...",
    variant: 'surface',
    size: 'md',
  },
};

export const Solid: Story = {
  args: {
    placeholder: "Solid variant",
    variant: 'solid',
    size: 'md',
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-80">
      {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Input key={size} {...args} size={size} placeholder={`Size: ${size}`} />
      ))}
    </div>
  ),
};

export const AllVariantsAndIntents: Story = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-8 w-150">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-bold text-gray-11 mb-2">Surface Variant</h3>
        {(['neutral', 'accent', 'success', 'warning', 'error', 'info'] as const).map((intent) => (
          <Input key={intent} {...args} variant="surface" intent={intent} placeholder={`Surface ${intent}`} />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-bold text-gray-11 mb-2">Solid Variant</h3>
        {(['neutral', 'accent', 'success', 'warning', 'error', 'info'] as const).map((intent) => (
          <Input key={intent} {...args} variant="solid" intent={intent} placeholder={`Solid ${intent}`} />
        ))}
      </div>
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-80">
      <Input {...args} state="default" placeholder="Forced: Default" />
      <Input {...args} state="hover" placeholder="Forced: Hover" />
      <Input {...args} state="select" placeholder="Forced: Select (Focus)" />
      <Input {...args} state="error" placeholder="Forced: Error" />
      <Input {...args} aria-invalid="true" placeholder="Aria-invalid example" />
      <Input {...args} disabled placeholder="Disabled state" />
    </div>
  ),
};

export const Icons: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-80">
      <Input 
        {...args}
        placeholder="Search..." 
        leftIcon={<span>🔍</span>} 
      />
      <Input 
        {...args}
        placeholder="Password" 
        type="password"
        rightIcon={<span>👁️</span>} 
      />
      <Input 
        {...args}
        placeholder="Both icons" 
        leftIcon={<span>📧</span>} 
        rightIcon={<span>✅</span>} 
      />
    </div>
  ),
};
