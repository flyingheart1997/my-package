import React from 'react';
import type { Meta } from '@storybook/react';
import * as Icons from '@org-design-system/icons';

const meta = {
    title: 'org-design-system/Icons',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const AllIcons = {
    render: () => {
        const iconEntries = Object.entries(Icons).filter(([name, Icon]) => {
            // Only render items that look like React components (function or memoized)
            return typeof Icon === 'function' || (typeof Icon === 'object' && Icon !== null && '$$typeof' in Icon);
        });

        return (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-5 p-5 text-slate-300 w-full">
                {iconEntries.map(([name, Icon]) => (
                    <div key={name} className="flex flex-col items-center gap-2 p-3 border border-s-zinc-500 bg-gray-800 rounded-lg">
                        {/* @ts-ignore */}
                        <Icon className="text-2xl" />
                        <span className="text-[10px] font-mono">{name}</span>
                    </div>
                ))}
            </div>
        );
    },
};

export const ColoredIcons = {
    render: () => (
        <div className="flex gap-5 bg-gray-800 p-5 rounded-lg mx-auto">
            <Icons.SolarGenerationIcon className="text-2xl text-yellow-500" />
            <Icons.UsersIcon className="text-2xl text-blue-500" />
            <Icons.SatelliteIcon className="text-2xl text-green-500" />
        </div>
    ),
};
