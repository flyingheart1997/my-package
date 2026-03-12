import React from 'react';
import { Button } from '@org-design-system/components';
import type { Meta, StoryObj } from '@storybook/react';
import { SolarGenerationIcon, UsersIcon, SatelliteIcon } from '@org-design-system/icons';

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
            options: ['solid', 'soft', 'surface', 'outline', 'ghost', 'link'],
        },
        intent: {
            control: 'select',
            options: ['primary', 'neutral', 'success', 'warning', 'error'],
        },
        size: {
            control: 'select',
            options: ['xl', 'lg', 'md', 'sm', 'xs', 'icon'],
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
        intent: 'primary',
        children: 'Solid Button',
    },
};

export const Soft: Story = {
    args: {
        variant: 'soft',
        intent: 'primary',
        children: 'Soft Button',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        intent: 'neutral',
        children: 'Outline Button',
    },
};

export const WithIcons: Story = {
    args: {
        variant: 'solid',
        intent: 'primary',
    },
    render: (args) => (
        <Button {...args} leftIcon={<SatelliteIcon width={16} height={16} />}>
            Satellite Control
        </Button>
    )
};

export const IconOnly: Story = {
    args: {
        variant: 'soft',
        intent: 'success',
        size: 'icon',
    },
    render: (args) => (
        <Button {...args}>
            <SolarGenerationIcon width={20} height={20} />
        </Button>
    )
};

export const AllIntents: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4 mx-auto bg-gray-900 algn-center justify-center p-3.5">
            {(['solid', 'soft', 'outline', 'ghost'] as const).map(v => (
                <div key={v} className="flex items-center gap-4">
                    <span className="w-20 text-xs font-mono opacity-50 capitalize text-amber-50">{v}</span>
                    {(['primary', 'neutral', 'success', 'warning', 'error'] as const).map(i => (
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
                <Button {...args} size="xs">XS Button</Button>
                <Button {...args} size="icon"><UsersIcon width={16} height={16} /></Button>
            </div>
        </div>
    )
};

export const AsChild: Story = {
    args: {
        asChild: true,
    },
    render: (args) => (
        <Button {...args}>
            <a href="https://google.com" target="_blank" rel="noreferrer">
                Rendered as Anchor Tag
            </a>
        </Button>
    )
};