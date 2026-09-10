"use client"

import type * as React from "react"
import {
  Dialog as DialogPrimitive,
  Heading,
  Modal as ModalPrimitive,
  ModalOverlay,
  type HeadingProps,
  type ModalOverlayProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

function Dialog({
  className,
  isOpen,
  onOpenChange,
  children,
  ...props
}: Omit<ModalOverlayProps, "className"> & { className?: string; children: React.ReactNode }) {
  return (
    <ModalOverlay
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4 data-[entering]:animate-in data-[entering]:fade-in data-[exiting]:animate-out data-[exiting]:fade-out"
      {...props}
    >
      <ModalPrimitive
        className={cn(
          "w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-lg data-[entering]:animate-in data-[entering]:fade-in data-[entering]:zoom-in-95 data-[exiting]:animate-out data-[exiting]:fade-out data-[exiting]:zoom-out-95",
          className
        )}
      >
        <DialogPrimitive className="outline-none">{children}</DialogPrimitive>
      </ModalPrimitive>
    </ModalOverlay>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-1.5 text-center sm:text-left", className)} {...props} />
}

function DialogTitle({ className, ...props }: HeadingProps) {
  return (
    <Heading
      slot="title"
      className={cn("font-heading text-lg font-semibold text-foreground", className)}
      {...props}
    />
  )
}

function DialogDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("text-sm text-muted-foreground", className)} {...props} />
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
      {...props}
    />
  )
}

export { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter }
