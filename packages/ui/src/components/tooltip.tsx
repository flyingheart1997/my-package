"use client"
import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils"

const tooltipContentVariants = cva(
  "z-50 inline-flex items-center animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      intent: {
        accent: "bg-[var(--color-surface-focus)] text-(--color-gray-12) [--tooltip-bg:var(--color-surface-focus)]",
        neutral: "bg-[var(--color-surface-overlay)] text-(--color-text-primary) [--tooltip-bg:var(--color-surface-overlay)]",
        success: "bg-[var(--color-surface-success)] text-(--color-gray-12) [--tooltip-bg:var(--color-surface-success)]",
        warning: "bg-[var(--color-surface-warnig-hover)] text-(--color-gray-12) [--tooltip-bg:var(--color-surface-warnig-hover)]",
        error: "bg-[var(--color-surface-error-hover)] text-(--color-gray-12) [--tooltip-bg:var(--color-surface-error-hover)]",
        info: "bg-[var(--color-surface-info-hover)] text-(--color-gray-12) [--tooltip-bg:var(--color-surface-info-hover)]",
      },
      size: {
        sm: "px-(--spacing-8) py-(--spacing-4) gap-(--spacing-4) text-(--text-font-size-xs) rounded-(--radius-sm)",
        md: "px-(--spacing-10) py-(--spacing-6) gap-(--spacing-6) text-(--text-font-size-sm) rounded-(--radius-md)",
        lg: "px-(--spacing-12) py-(--spacing-8) gap-(--spacing-8) text-(--text-font-size-md) rounded-(--radius-lg)",
      },
      radius: {
        sm: "rounded-(--radius-sm)",
        md: "rounded-(--radius-md)",
        lg: "rounded-(--radius-lg)",
      }
    },
    defaultVariants: {
      intent: "neutral",
      size: "md",
    },
  }
)

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
  VariantProps<typeof tooltipContentVariants> { }

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 4, size, intent, radius, children, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      data-slot="tooltip-content"
      data-size={size}
      data-radius={radius}
      data-intent={intent}
      sideOffset={sideOffset}
      className={cn(tooltipContentVariants({ size, intent, radius, className }))}
      {...props}
    >
      {children}
      <TooltipPrimitive.Arrow
        className="z-50 fill-(--tooltip-bg)"
        width={10}
        height={5}
      />
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Portal>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
