"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, X } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function UploadTheme() {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const { toast } = useToast()

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0]
      if (droppedFile.type === "application/json") {
        setFile(droppedFile)
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a JSON file",
          variant: "destructive",
        })
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0])
    }
  }

  const clearFile = () => {
    setFile(null)
  }

  const clearImageFile = () => {
    setImageFile(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!file) {
      toast({
        title: "Missing theme file",
        description: "Please upload a JSON theme file",
        variant: "destructive",
      })
      return
    }

    // In a real app, you would upload the file to your server or process it
    toast({
      title: "Theme submitted",
      description: "Your theme has been submitted for review",
    })
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle>Upload Your Theme</CardTitle>
        <CardDescription>Share your ComfyUI theme with the community</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="theme-file">Theme JSON File</Label>
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                isDragging ? "border-purple-500 bg-purple-500/10" : "border-gray-600 hover:border-purple-500"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById("theme-file")?.click()}
            >
              {file ? (
                <div className="flex items-center justify-between bg-gray-700 p-2 rounded">
                  <span className="truncate max-w-[80%]">{file.name}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      clearFile()
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-2">
                  <Upload className="h-8 w-8 text-gray-400" />
                  <p className="text-sm text-gray-400">Drag and drop your theme JSON file here, or click to browse</p>
                </div>
              )}
              <Input id="theme-file" type="file" accept=".json" className="hidden" onChange={handleFileChange} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="theme-screenshot">Theme Screenshot (optional)</Label>
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center cursor-pointer hover:border-purple-500">
              {imageFile ? (
                <div className="flex items-center justify-between bg-gray-700 p-2 rounded">
                  <span className="truncate max-w-[80%]">{imageFile.name}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      clearImageFile()
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-2">
                  <Upload className="h-8 w-8 text-gray-400" />
                  <p className="text-sm text-gray-400">Upload a screenshot of your theme (PNG, JPG)</p>
                </div>
              )}
              <Input
                id="theme-screenshot"
                type="file"
                accept=".png,.jpg,.jpeg"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full" onClick={handleSubmit}>
          <Upload className="h-4 w-4 mr-2" />
          Upload Theme
        </Button>
      </CardFooter>
    </Card>
  )
}
