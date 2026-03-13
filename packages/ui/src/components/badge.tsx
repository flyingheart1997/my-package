import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1 font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        solid: "border-transparent",
        soft: "border-transparent text-foreground",
        surface: "border",
        outline: "border bg-transparent",
      },
      intent: {
        primary: "",
        accent: "", // Alias for primary to match Figma
        success: "",
        warning: "",
        error: "",
        info: "",
        neutral: "",
      },
      size: {
        sm: "h-5 px-1 py-0.5 text-[10px] min-w-[20px]",
        md: "h-6 px-1.5 py-1 text-[12px] min-w-[24px]",
        lg: "h-6 px-1.5 py-1 text-[13px] min-w-[24px]",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-[4px]",
        md: "rounded-[6px]",
        lg: "rounded-[8px]",
        xl: "rounded-[8px]",
        full: "rounded-full",
      },
    },
    compoundVariants: [
      { variant: "solid", intent: "primary", className: "bg-[var(--color-surface-focus)] text-[var(--color-text-focus-subtle)]" },
      { variant: "soft", intent: "primary", className: "bg-[var(--color-surface-selected)] text-[var(--color-text-focus)]" },
      { variant: "surface", intent: "primary", className: "bg-[var(--color-surface-selected)] border-[var(--color-stroke-selected)] text-[var(--color-text-focus)]" },
      { variant: "outline", intent: "primary", className: "border-[var(--color-stroke-selected)] text-[var(--color-text-focus)]" },
      // Success
      { variant: "solid", intent: "success", className: "bg-[var(--color-surface-success)] text-white" },
      { variant: "soft", intent: "success", className: "bg-[var(--color-green-alpha-2)] text-[var(--color-text-selected)]" },
      { variant: "surface", intent: "success", className: "bg-[var(--color-green-alpha-2)] border-[var(--color-stroke-success)] text-[var(--color-text-selected)]" },
      { variant: "outline", intent: "success", className: "border-[var(--color-stroke-success)] text-[var(--color-text-selected)]" },
      // Warning
      { variant: "solid", intent: "warning", className: "bg-[var(--color-surface-warnig)] text-black" },
      { variant: "soft", intent: "warning", className: "bg-[var(--color-yellow-alpha-1)] text-[var(--color-text-warning)]" },
      { variant: "surface", intent: "warning", className: "bg-[var(--color-yellow-alpha-1)] border-[var(--color-stroke-warning)] text-[var(--color-text-warning)]" },
      { variant: "outline", intent: "warning", className: "border-[var(--color-stroke-warning)] text-[var(--color-text-warning)]" },
      // Error
      { variant: "solid", intent: "error", className: "bg-[var(--color-surface-error)] text-white" },
      { variant: "soft", intent: "error", className: "bg-[var(--color-red-alpha-1)] text-[var(--color-text-error)]" },
      { variant: "surface", intent: "error", className: "bg-[var(--color-red-alpha-1)] border-[var(--color-stroke-error)] text-[var(--color-text-error)]" },
      { variant: "outline", intent: "error", className: "border-[var(--color-stroke-error)] text-[var(--color-text-error)]" },
      // Info
      { variant: "solid", intent: "info", className: "bg-[var(--color-surface-info)] text-white" },
      { variant: "soft", intent: "info", className: "bg-[var(--color-blue-alpha-1)] text-[var(--color-text-info)]" },
      { variant: "surface", intent: "info", className: "bg-[var(--color-blue-alpha-1)] border-[var(--color-stroke-info)] text-[var(--color-text-info)]" },
      { variant: "outline", intent: "info", className: "border-[var(--color-stroke-info)] text-[var(--color-text-info)]" },
      // Neutral
      { variant: "solid", intent: "neutral", className: "bg-[var(--color-gray-9)] text-white" },
      { variant: "soft", intent: "neutral", className: "bg-[var(--color-gray-alpha-3)] text-[var(--color-text-primary)]" },
      { variant: "surface", intent: "neutral", className: "bg-[var(--color-gray-alpha-3)] border-[var(--color-stroke-primary)] text-[var(--color-text-primary)]" },
      { variant: "outline", intent: "neutral", className: "border-[var(--color-stroke-primary)] text-[var(--color-text-secondary)]" },
    ],
    defaultVariants: {
      variant: "soft",
      intent: "neutral",
      size: "md",
      radius: "md",
    },
  }
)

interface BadgeProps
  extends React.ComponentProps<"span">,
  VariantProps<typeof badgeVariants> {
  asChild?: boolean
}

function Badge({
  className,
  variant,
  intent,
  radius,
  size,
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      data-intent={intent}
      data-size={size}
      data-radius={radius}
      className={cn(badgeVariants({ variant, intent, size, radius }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }