"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { themes } from "@/lib/themes"

export default function ThemeGallery() {
  const [activeTheme, setActiveTheme] = useState<number | null>(null)

  const downloadTheme = (theme: any) => {
    const jsonString = JSON.stringify(theme, null, 2)
    const blob = new Blob([jsonString], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${theme.id}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {themes.map((theme, index) => (
        <Card
          key={theme.id}
          className="overflow-hidden bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300"
        >
          <CardContent className="p-0">
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={theme.imageUrl || "/placeholder.svg"}
                alt={`${theme.name} theme preview`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-xl font-bold text-white mb-1">{theme.name}</h3>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-purple-600 hover:bg-purple-700">
                      v{theme.version}
                    </Badge>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="secondary" className="rounded-full">
                            <Eye className="h-4 w-4 mr-1" />
                            Preview
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl bg-gray-900 border-gray-700">
                          <div className="grid gap-4">
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                              <Image
                                src={theme.imageUrl || "/placeholder.svg"}
                                alt={`${theme.name} theme preview`}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <div className="space-y-2">
                              <h2 className="text-2xl font-bold">{theme.name}</h2>
                              <p className="text-gray-400">{theme.description}</p>
                              <div className="pt-2">
                                <Button onClick={() => downloadTheme(theme)}>
                                  <Download className="h-4 w-4 mr-2" />
                                  Download Theme
                                </Button>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button size="sm" variant="default" className="rounded-full" onClick={() => downloadTheme(theme)}>
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
