"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

interface ThemeDetailProps {
  theme: any
  onBack: () => void
}

export default function ThemeDetail({ theme, onBack }: ThemeDetailProps) {
  const downloadTheme = () => {
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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Gallery
        </Button>
        <Button onClick={downloadTheme} className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download Theme
        </Button>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">{theme.name}</h1>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="secondary" className="bg-purple-600 hover:bg-purple-700">
                v{theme.version}
              </Badge>
              <span className="text-gray-400">ID: {theme.id}</span>
            </div>
          </div>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-700">
          <Image
            src={theme.imageUrl || "/placeholder.svg"}
            alt={`${theme.name} theme preview`}
            fill
            className="object-contain"
          />
        </div>

        <p className="text-gray-300">{theme.description}</p>

        <Tabs defaultValue="node_slot" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="node_slot">Node Slots</TabsTrigger>
            <TabsTrigger value="litegraph_base">LiteGraph Base</TabsTrigger>
            <TabsTrigger value="comfy_base">Comfy Base</TabsTrigger>
          </TabsList>
          <TabsContent value="node_slot" className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Object.entries(theme.colors.node_slot).map(([key, value]) => (
                <Card key={key} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4">
                    <div className="w-full h-12 rounded-md mb-2" style={{ backgroundColor: value as string }} />
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{key}</span>
                      <span className="text-sm text-gray-400">{value as string}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="litegraph_base" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(theme.colors.litegraph_base)
                .filter(([key, value]) => !key.includes("BACKGROUND_IMAGE"))
                .map(([key, value]) => (
                  <Card key={key} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4">
                      {(typeof value === "string" && value.startsWith("#")) || value.startsWith("rgb") ? (
                        <div className="w-full h-8 rounded-md mb-2" style={{ backgroundColor: value as string }} />
                      ) : null}
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{key}</span>
                        <span className="text-sm text-gray-400 truncate max-w-[200px]">{value as string}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
          <TabsContent value="comfy_base" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(theme.colors.comfy_base).map(([key, value]) => (
                <Card key={key} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4">
                    <div className="w-full h-8 rounded-md mb-2" style={{ backgroundColor: value as string }} />
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{key}</span>
                      <span className="text-sm text-gray-400">{value as string}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
