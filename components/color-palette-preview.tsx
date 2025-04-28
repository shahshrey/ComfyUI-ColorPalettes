"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface ColorPalettePreviewProps {
  theme: any
  type: "node_slot" | "litegraph_base" | "comfy_base"
}

export default function ColorPalettePreview({ theme, type }: ColorPalettePreviewProps) {
  const [colors, setColors] = useState<[string, string][]>([])

  useEffect(() => {
    if (theme && theme.colors && theme.colors[type]) {
      // Filter out non-color values (like those that don't start with # or rgb)
      const colorEntries = Object.entries(theme.colors[type]).filter(([key, value]) => {
        const strValue = String(value)
        return (
          (strValue.startsWith("#") || strValue.startsWith("rgb") || strValue.startsWith("hsl")) &&
          !key.includes("BACKGROUND_IMAGE")
        )
      }) as [string, string][]

      setColors(colorEntries.slice(0, 8)) // Limit to 8 colors for preview
    }
  }, [theme, type])

  return (
    <Card className="overflow-hidden bg-gray-800 border-gray-700">
      <CardContent className="p-3">
        <div className="grid grid-cols-4 gap-2">
          {colors.map(([key, color]) => (
            <div
              key={key}
              className="aspect-square rounded-md"
              style={{ backgroundColor: color }}
              title={`${key}: ${color}`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
