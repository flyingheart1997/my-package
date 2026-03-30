import React from 'react';
import { Button } from '@org-design-system/components';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckIcon, InfoIcon, NotificationsIcon, SettingsIcon, SatelliteIcon } from '@org-design-system/icons';

const meta = {
    title: 'org-design-system/components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['solid', 'soft', 'surface', 'outline', 'ghost'],
        },
        intent: {
            control: 'select',
            options: ['accent', 'neutral', 'success', 'warning', 'error', 'info'],
        },
        mode: {
            control: 'select',
            options: ['button', 'icon'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl'],
        },
        leftIcon: {
            control: false,
        },
        rightIcon: {
            control: false,
        },
        children: {
            control: 'text',
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
    args: {
        variant: 'solid',
        intent: 'accent',
        children: 'Solid Button',
    },
};

export const Soft: Story = {
    args: {
        variant: 'soft',
        intent: 'accent',
        children: 'Soft Button',
    },
};

export const Surface: Story = {
    args: {
        variant: 'surface',
        intent: 'accent',
        children: 'Surface Button',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        intent: 'neutral',
        children: 'Outline Button',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        intent: 'accent',
        children: 'Ghost Button',
    },
};

export const WithIcons: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <Button {...args} intent="accent" leftIcon={<NotificationsIcon width={16} height={16} />}>
                    Notifications
                </Button>
                <Button {...args} intent="success" leftIcon={<CheckIcon width={16} height={16} />}>
                    Completed
                </Button>
                <Button {...args} intent="error" leftIcon={<InfoIcon width={16} height={16} />}>
                    Critical Error
                </Button>
            </div>
            <div className="flex items-center gap-4">
                <Button {...args} variant="surface" intent="info" rightIcon={<InfoIcon width={16} height={16} />}>
                    More Info
                </Button>
                <Button {...args} variant="outline" intent="neutral" rightIcon={<SettingsIcon width={16} height={16} />}>
                    Settings
                </Button>
            </div>
        </div>
    )
};

export const IconButton: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <Button {...args} mode="icon" size="xl"><SettingsIcon width={32} height={32} /></Button>
                <Button {...args} mode="icon" size="lg"><SettingsIcon width={24} height={24} /></Button>
                <Button {...args} mode="icon" size="md"><NotificationsIcon width={20} height={20} /></Button>
                <Button {...args} mode="icon" size="sm"><CheckIcon width={16} height={16} /></Button>
            </div>
            <div className="flex items-center gap-4">
                <Button {...args} mode="icon" variant="surface" size="md"><NotificationsIcon width={20} height={20} /></Button>
                <Button {...args} mode="icon" variant="outline" size="md"><CheckIcon width={20} height={20} /></Button>
                <Button {...args} mode="icon" variant="ghost" size="md"><SettingsIcon width={20} height={20} /></Button>
            </div>
        </div>
    )
};

export const AllIntents: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4 p-4 rounded-lg bg-gray-950">
            {(['solid', 'soft', 'surface', 'outline', 'ghost'] as const).map(v => (
                <div key={v} className="flex items-center gap-4">
                    <span className="w-20 text-xs font-mono opacity-50 capitalize text-gray-400">{v}</span>
                    {(['accent', 'neutral', 'success', 'warning', 'error', 'info'] as const).map(i => (
                        <Button key={i} {...args} variant={v} intent={i}>
                            {i}
                        </Button>
                    ))}
                </div>
            ))}
        </div>
    )
};

export const Sizes: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <Button {...args} size="xl">XL Button</Button>
                <Button {...args} size="lg">LG Button</Button>
                <Button {...args} size="md">MD Button</Button>
                <Button {...args} size="sm">SM Button</Button>
                <Button {...args} mode="icon" size="md"><SettingsIcon width={20} height={20} /></Button>
            </div>
        </div>
    )
};

export const States: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <Button {...args} intent="accent">Default</Button>
                <Button {...args} intent="accent" className="hover:bg-(--color-green-9)">Hover Appearance</Button>
                <Button {...args} intent="accent" disabled>Disabled State</Button>
            </div>
        </div>
    )
};