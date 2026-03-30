"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils"

const avatarVariants = cva(
  "inline-flex shrink-0 items-center justify-center overflow-hidden bg-[var(--color-surface-bg)] border relative",
  {
    variants: {
      size: {
        "0": "size-(--sizing-16) rounded-(--radius-sm)",
        "1": "size-(--sizing-24) rounded-(--radius-md)",
        "2": "size-(--sizing-28) rounded-(--radius-md)",
        "3": "size-(--sizing-32) rounded-(--radius-md)",
        "4": "size-(--sizing-40) rounded-(--radius-lg) border-(--stroke-lg)",
        "5": "size-(--sizing-48) rounded-(--radius-lg) border-(--stroke-lg)",
      },
      color: {
        green: "border-(--color-stroke-success)",
        red: "border-(--color-stroke-error)",
        blue: "border-(--color-stroke-info)",
        yellow: "border-(--color-stroke-warning)",
        gray: "border-(--color-gray-9)",
      },
      radius: {
        sm: "rounded-(--radius-sm)",
        md: "rounded-(--radius-md)",
        lg: "rounded-(--radius-lg)",
        xl: "rounded-(--radius-xl)",
        full: "rounded-full",
        none: "rounded-none",
      }
    },
    defaultVariants: {
      size: "2",
      color: "blue",
    },
  }
)

const fallbackVariants = cva(
  "flex h-full w-full items-center justify-center font-(--text-font-family-heading) font-(--text-font-weight-regular)",
  {
    variants: {
      size: {
        "0": "size-1.5",
        "1": "size-2",
        "2": "size-2.5",
        "3": "size-3",
        "4": "size-4",
        "5": "size-5",
      },
      color: {
        green: "text-(--color-green-9)",
        red: "text-(--color-red-9)",
        blue: "text-(--color-blue-9)",
        yellow: "text-(--color-yellow-9)",
        gray: "text-(--color-gray-9)",
      },
    },
    defaultVariants: {
      size: "2",
    },
  }
)

const indicatorVariants = cva(
  "absolute rounded-full border-2 border-[var(--color-surface-bg)]",
  {
    variants: {
      size: {
        "0": "size-1.5",
        "1": "size-2",
        "2": "size-2.5",
        "3": "size-3",
        "4": "size-4",
        "5": "size-5",
      },
      color: {
        green: "bg-[var(--color-green-9)]",
        red: "bg-[var(--color-red-9)]",
        yellow: "bg-[var(--color-yellow-9)]",
        blue: "bg-[var(--color-blue-9)]",
        gray: "bg-[var(--color-gray-9)]",
      },
      position: {
        "top-right": "top-0 right-0 translate-x-1/4 -translate-y-1/4",
        "bottom-right": "bottom-0 right-0 translate-x-1/4 translate-y-1/4",
      }
    },
    defaultVariants: {
      color: "green",
      position: "bottom-right",
    }
  }
)

interface AvatarProps
  extends Omit<React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>, "color">,
  VariantProps<typeof avatarVariants> { }

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size, color, radius, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    data-slot="avatar"
    data-radius={radius}
    className={cn(avatarVariants({ size, color, radius, className }))}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    data-slot="avatar-image"
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

type AvatarFallbackProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & VariantProps<typeof fallbackVariants>

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, size, color, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    data-slot="avatar-fallback"
    data-color={color}
    className={cn(fallbackVariants({ size, color, className }))}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

type AvatarIndicatorProps = React.ComponentPropsWithoutRef<"span"> & VariantProps<typeof indicatorVariants>

const AvatarIndicator = ({ className, size, color, position, ...props }: AvatarIndicatorProps) => (
  <span
    data-slot="avatar-indicator"
    className={cn(indicatorVariants({ size, color, position, className }))}
    {...props}
  />
)

export { Avatar, AvatarImage, AvatarFallback, AvatarIndicator }
