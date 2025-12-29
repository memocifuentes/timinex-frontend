"use client"

import React from "react"

export const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea {...props} className="border rounded px-2 py-1 w-full" />
)
