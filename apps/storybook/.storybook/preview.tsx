import type { Preview } from "@storybook/react";
import React from 'react';
import { TooltipProvider } from "org-design-system";
import "./storybook.css";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
      (Story) => (
        <TooltipProvider>
          <Story />
        </TooltipProvider>
      ),
    ],
};

export default preview;
