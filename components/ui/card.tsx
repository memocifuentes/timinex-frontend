"use client"

import React from "react"

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="border rounded shadow p-4">{children}</div>
)

export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-2">{children}</div>
)
