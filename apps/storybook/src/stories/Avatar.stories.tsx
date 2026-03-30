import React from 'react';
import { Avatar, AvatarImage, AvatarFallback, AvatarIndicator } from '@org-design-system/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'org-design-system/components/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['0', '1', '2', '3', '4', '5'],
        },
        color: {
            control: 'select',
            options: ['green', 'red', 'blue', 'yellow', 'gray'],
        },
    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
    args: {
        size: '5',
        color: 'blue',
    },
    render: (args) => (
        <Avatar {...args}>
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=128&h=128&q=80" alt="JD" />
            <AvatarFallback size={args.size}>JD</AvatarFallback>
        </Avatar>
    )
};

export const WithIndicator: Story = {
    args: {
        size: '5',
        color: 'gray',
    },
    render: (args) => (
        <div className="flex gap-4">
            <Avatar {...args}>
                <AvatarImage src="https://i.pravatar.cc/150?u=1" alt="JD" />
                <AvatarFallback size={args.size}>JD</AvatarFallback>
                <AvatarIndicator color="green" size={args.size} />
            </Avatar>
            <Avatar {...args} radius="md">
                <AvatarImage src="https://i.pravatar.cc/150?u=2" alt="JD" />
                <AvatarFallback size={args.size}>JD</AvatarFallback>
                <AvatarIndicator color="red" size={args.size} />
            </Avatar>
        </div>
    )
};

export const AllColors: Story = {
    args: {
        size: '4',
    },
    render: (args) => (
        <div className="flex items-center gap-4 flex-wrap">
            {(['green', 'red', 'blue', 'yellow', 'gray'] as const).map(color => (
                <div key={color} className="flex flex-col items-center gap-2">
                    <Avatar {...args} color={color}>
                        <AvatarFallback color={color} size={args.size}>{color[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <span className="text-[10px] text-gray-9 font-mono opacity-50 capitalize">{color}</span>
                </div>
            ))}
        </div>
    )
};
