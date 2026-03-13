import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "../lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center font-medium whitespace-nowrap transition-all outline-none select-none active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        solid: "",
        soft: "",
        surface: "border",
        outline: "border bg-transparent",
        ghost: "bg-transparent",
        link: "bg-transparent underline-offset-4 hover:underline",
      },
      intent: {
        primary: "",
        accent: "", // Alias for primary to match Figma green
        neutral: "",
        success: "",
        warning: "",
        error: "",
      },
      size: {
        xl: "h-12 px-[18px] text-base gap-2",
        lg: "h-10 px-3.5 text-sm gap-1.5",
        md: "h-9 px-3 text-sm gap-1",
        sm: "h-8 px-3 text-sm gap-1",
        xs: "h-6 px-1.5 text-xs gap-0.5",
        icon: "size-9 p-0",
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
      { variant: "solid", intent: "primary", className: "bg-[var(--color-blue-10)] text-white hover:bg-[var(--color-blue-9)]" },
      { variant: "solid", intent: "neutral", className: "bg-[var(--color-gray-12)] text-white hover:bg-[var(--color-gray-11)] dark:bg-[var(--color-gray-2)] dark:text-[var(--color-gray-12)] dark:hover:bg-[var(--color-gray-3)]" },
      { variant: "solid", intent: "success", className: "bg-[var(--color-green-9)] text-white hover:bg-[var(--color-green-10)]" },
      { variant: "solid", intent: "warning", className: "bg-[var(--color-yellow-9)] text-white hover:bg-[var(--color-yellow-10)]" },
      { variant: "solid", intent: "error", className: "bg-[var(--color-red-9)] text-white hover:bg-[var(--color-red-10)]" },

      // Soft Intent
      { variant: "soft", intent: "primary", className: "bg-[var(--color-blue-alpha-2)] text-[var(--color-blue-11)] hover:bg-[var(--color-blue-alpha-3)]" },
      { variant: "soft", intent: "neutral", className: "bg-[var(--color-gray-alpha-2)] text-[var(--color-gray-12)] hover:bg-[var(--color-gray-alpha-3)]" },
      { variant: "soft", intent: "success", className: "bg-[var(--color-green-alpha-2)] text-[var(--color-green-11)] hover:bg-[var(--color-green-alpha-3)]" },
      { variant: "soft", intent: "warning", className: "bg-[var(--color-yellow-alpha-2)] text-[var(--color-yellow-11)] hover:bg-[var(--color-yellow-alpha-3)]" },
      { variant: "soft", intent: "error", className: "bg-[var(--color-red-alpha-2)] text-[var(--color-red-11)] hover:bg-[var(--color-red-alpha-3)]" },

      // Surface Intent
      { variant: "surface", intent: "primary", className: "bg-[var(--color-gray-alpha-3)] text-[var(--color-blue-11)] hover:bg-[var(--color-blue-11)]" },
      { variant: "surface", intent: "neutral", className: "bg-[var(--color-blue-alpha-4)] text-[var(--color-gray-12)] hover:bg-[var(--color-gray-11)]" },
      { variant: "surface", intent: "success", className: "bg-[var(--color-yellow-5)] text-[var(--color-green-11)] hover:bg-[var(--color-green-11)]" },
      { variant: "surface", intent: "warning", className: "bg-[var(--color-gray-alpha-1)] text-[var(--color-yellow-11)] hover:bg-[var(--color-yellow-11)]" },
      { variant: "surface", intent: "error", className: "bg-[var(--color-gray-alpha-2)] text-[var(--color-red-11)] hover:bg-[var(--color-red-11)]" },

      // Outline Intent
      { variant: "outline", intent: "primary", className: "border-[var(--color-blue-alpha-4)] text-[var(--color-blue-11)] hover:bg-[var(--color-blue-alpha-2)]" },
      { variant: "outline", intent: "neutral", className: "border-[var(--color-gray-alpha-4)] text-[var(--color-gray-12)] hover:bg-[var(--color-gray-alpha-2)]" },
      { variant: "outline", intent: "success", className: "border-[var(--color-green-alpha-4)] text-[var(--color-green-11)] hover:bg-[var(--color-green-alpha-2)]" },
      { variant: "outline", intent: "warning", className: "border-[var(--color-yellow-alpha-4)] text-[var(--color-yellow-11)] hover:bg-[var(--color-yellow-alpha-2)]" },
      { variant: "outline", intent: "error", className: "border-[var(--color-red-alpha-4)] text-[var(--color-red-11)] hover:bg-[var(--color-red-alpha-2)]" },

      // Ghost Intent
      { variant: "ghost", intent: "primary", className: "text-[var(--color-blue-11)] hover:bg-[var(--color-blue-alpha-2)]" },
      { variant: "ghost", intent: "neutral", className: "text-[var(--color-gray-12)] hover:bg-[var(--color-gray-alpha-2)]" },
      { variant: "ghost", intent: "success", className: "text-[var(--color-green-11)] hover:bg-[var(--color-green-alpha-2)]" },
      { variant: "ghost", intent: "warning", className: "text-[var(--color-yellow-11)] hover:bg-[var(--color-yellow-alpha-2)]" },
      { variant: "ghost", intent: "error", className: "text-[var(--color-red-11)] hover:bg-[var(--color-red-alpha-2)]" },
    ],
    defaultVariants: {
      variant: "solid",
      intent: "primary",
      size: "md",
      radius: "md",
    },
  }
)

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

interface ButtonProps
  extends React.ComponentProps<"button">,
  Prettify<VariantProps<typeof buttonVariants>> {
  asChild?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

function Button({
  className,
  variant,
  intent,
  radius,
  size,
  asChild = false,
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-intent={intent}
      data-size={size}
      data-radius={radius}
      className={cn(buttonVariants({ variant, intent, size, radius, className }))}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
        </>
      )}
    </Comp>
  )
}

export { Button, buttonVariants }
