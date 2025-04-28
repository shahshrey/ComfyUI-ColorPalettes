"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import ThemeDetail from "@/components/theme-detail"
import { themes } from "@/lib/themes"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ThemePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [theme, setTheme] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const foundTheme = themes.find((t) => t.id === params.id)
    setTheme(foundTheme)
    setLoading(false)
  }, [params.id])

  const handleBack = () => {
    router.push("/")
  }

  if (loading) {
    return (
      <ThemeProvider>
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-center items-center h-[60vh]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          </div>
        </main>
      </ThemeProvider>
    )
  }

  if (!theme) {
    return (
      <ThemeProvider>
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
          <div className="container mx-auto px-4 py-8">
            <Button variant="ghost" onClick={handleBack} className="mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Gallery
            </Button>

            <div className="text-center py-16">
              <h1 className="text-3xl font-bold mb-4">Theme Not Found</h1>
              <p className="text-gray-300 mb-8">The theme you're looking for doesn't exist or has been removed.</p>
              <Button onClick={handleBack}>Return to Gallery</Button>
            </div>
          </div>
        </main>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 py-8">
          <ThemeDetail theme={theme} onBack={handleBack} />
        </div>
      </main>
    </ThemeProvider>
  )
}
