import type { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@org-design-system/components';
import React from 'react';
import { Mail, Globe, Lock, Settings } from 'lucide-react';

const meta: Meta<typeof Select> = {
  title: '@org-design-system/components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const SelectDemo = ({ variant, intent, size, radius, leftIcon, ...props }: any) => (
  <Select {...props}>
    <SelectTrigger variant={variant} intent={intent} size={size} radius={radius} leftIcon={leftIcon}>
      <SelectValue placeholder="Select an option" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruit</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectGroup>
      <SelectSeparator />
      <SelectGroup>
        <SelectLabel>Vegetables</SelectLabel>
        <SelectItem value="aubergine">Aubergine</SelectItem>
        <SelectItem value="broccoli">Broccoli</SelectItem>
        <SelectItem value="carrot" disabled>
          Carrot
        </SelectItem>
        <SelectItem value="courgette">Courgette</SelectItem>
        <SelectItem value="leek">Leek</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);

export const Default: StoryObj = {
  render: (args) => <SelectDemo {...args} />,
  args: {
    variant: 'surface',
    size: 'md',
  },
};

export const Solid: StoryObj = {
  render: (args) => <SelectDemo {...args} />,
  args: {
    variant: 'solid',
    size: 'md',
  },
};

export const AllIntents: StoryObj = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-8 w-150">
      {(['neutral', 'accent', 'success', 'warning', 'error', 'info'] as const).map((intent) => (
        <div key={intent} className="space-y-2">
          <p className="text-sm font-medium text-gray-11 capitalize">{intent}</p>
          <SelectDemo {...args} intent={intent} />
        </div>
      ))}
    </div>
  ),
};

export const AllSizes: StoryObj = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-80">
      {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <SelectDemo key={size} {...args} size={size} />
      ))}
    </div>
  ),
};

export const WithIcons: StoryObj = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-80">
      <Select>
        <SelectTrigger leftIcon={<Globe className="h-4 w-4" />}>
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="fr">French</SelectItem>
          <SelectItem value="es">Spanish</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger leftIcon={<Mail className="h-4 w-4" />}>
          <SelectValue placeholder="Select Email" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="work">Work</SelectItem>
          <SelectItem value="personal">Personal</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger leftIcon={<Lock className="h-4 w-4" />} aria-invalid="true" intent="error">
          <SelectValue placeholder="Security Level" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="low">Low</SelectItem>
          <SelectItem value="high">High</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};
