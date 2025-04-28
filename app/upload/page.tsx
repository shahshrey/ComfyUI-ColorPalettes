import UploadTheme from "@/components/upload-theme"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function UploadPage() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Gallery
              </Button>
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Share Your ComfyUI Theme</h1>
            <p className="text-gray-300">Upload your custom theme to share with the community</p>
          </div>

          <UploadTheme />
        </div>
      </main>
    </ThemeProvider>
  )
}
