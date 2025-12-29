"use client"

import React from "react"
import clsx from "clsx"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "ghost" | "solid" | "outline"
  size?: "sm" | "md" | "lg"
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  size = "md",
  className,
  ...props
}) => {
  const base = "rounded font-medium transition-colors"
  const variants = {
    solid: "bg-blue-500 text-white hover:bg-blue-600",
    ghost: "bg-transparent text-blue-500 hover:bg-blue-50",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-50",
  }
  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  return (
    <button className={clsx(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}
