"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { cva, type VariantProps } from "class-variance-authority"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "../lib/utils"

const selectTriggerVariants = cva(
  "group/select relative flex items-center justify-between w-full min-w-0 transition-all outline-none disabled:pointer-events-none disabled:opacity-50 data-[placeholder]:text-(--color-text-disabled)",
  {
    variants: {
      variant: {
        surface: "bg-(--color-surface-bg) border border-(--color-stroke-primary)",
        solid: "bg-(--color-gray-alpha-3) border border-transparent",
      },
      intent: {
        neutral: "",
        accent: "aria-selected:border-(--color-stroke-selected) aria-selected:ring-3 aria-selected:ring-(--color-surface-selected)",
        success: "border-(--color-stroke-success) data-[state=open]:ring-3 data-[state=open]:ring-(--color-stroke-success)/20",
        error: "border-(--color-stroke-error) !ring-3 !ring-(--color-stroke-error)/20",
        warning: "border-(--color-stroke-warning) data-[state=open]:ring-3 data-[state=open]:ring-(--color-stroke-warning)/20",
        info: "border-(--color-stroke-info) data-[state=open]:ring-3 data-[state=open]:ring-(--color-stroke-info)/20",
      },
      size: {
        sm: "h-(--sizing-24) px-(--spacing-8) text-(--text-font-size-md) gap-(--spacing-2) rounded-(--radius-md)",
        md: "h-(--sizing-32) px-(--spacing-10) text-(--text-font-size-lg) gap-(--spacing-4) rounded-(--radius-md)",
        lg: "h-(--sizing-40) px-(--spacing-12) text-(--text-font-size-xl) gap-(--spacing-6) rounded-(--radius-md)",
        xl: "h-(--sizing-48) px-(--spacing-14) text-(--text-font-size-xxl) gap-(--spacing-8) rounded-(--radius-md)",
      },
      radius: {
        none: "rounded-none",
        sm: "!rounded-(--radius-sm)",
        md: "!rounded-(--radius-md)",
        lg: "!rounded-(--radius-lg)",
        full: "!rounded-full",
      },
    },
    compoundVariants: [
      {
        variant: "surface",
        className: "hover:bg-(--color-surface-hover) data-[state=open]:border-(--color-stroke-selected) data-[state=open]:ring-3 data-[state=open]:ring-(--color-surface-selected)"
      },
      {
        variant: "solid",
        className: "hover:bg-(--color-gray-alpha-4) data-[state=open]:bg-(--color-surface-bg) data-[state=open]:border-(--color-stroke-selected) data-[state=open]:ring-3 data-[state=open]:ring-(--color-surface-selected)"
      }
    ],
    defaultVariants: {
      variant: "surface",
      intent: "neutral",
      size: "md",
      radius: "md",
    },
  }
)

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
  Prettify<VariantProps<typeof selectTriggerVariants>> {
  leftIcon?: React.ReactNode
}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, variant, intent, size, radius, leftIcon, children, ...props }, ref) => {
  const isError = props["aria-invalid"] === "true" || props["aria-invalid"] === true || intent === "error"
  const effectiveIntent = isError ? "error" : intent

  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(selectTriggerVariants({ variant, intent: effectiveIntent, size, radius, className }))}
      {...props}
    >
      <div className="flex items-center gap-inherit min-w-0">
        {leftIcon && (
          <span className="flex shrink-0 items-center justify-center pointer-events-none text-(--color-icon-secondary) group-data-[state=open]/select:text-(--color-icon-primary) group-data-[intent=error]/select:text-(--color-text-error)">
            {leftIcon}
          </span>
        )}
        <span className="truncate">{children}</span>
      </div>
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="h-4 w-4 shrink-0 text-(--color-icon-secondary) group-data-[state=open]/select:text-(--color-icon-primary) group-data-[intent=error]/select:text-(--color-text-error)" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
})
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-lg border border-(--color-stroke-primary) bg-(--color-surface-bg) text-(--color-text-primary) shadow-(--shadow-lg) data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
        "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
          "h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width)"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-4 pr-2 text-xs font-semibold text-(--color-text-description)", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-md py-1.5 pl-4 pr-2 text-sm outline-none hover:bg-(--color-surface-hover) focus:bg-(--color-surface-hover) focus:text-(--color-text-primary) data-disabled:pointer-events-none data-disabled:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-(--color-stroke-primary)", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
