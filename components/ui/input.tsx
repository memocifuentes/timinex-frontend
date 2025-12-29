"use client"

import React from "react"

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input {...props} className="border rounded px-2 py-1 w-full" />
)
