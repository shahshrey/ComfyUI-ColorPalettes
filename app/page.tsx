import ThemeGallery from "@/components/theme-gallery"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-amber-500">
              ComfyUI Theme Gallery
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Browse, preview, and download beautiful themes for ComfyUI. Customize your workflow with these carefully
              crafted color palettes.
            </p>
          </header>

          <ThemeGallery />
        </div>
      </main>
    </ThemeProvider>
  )
}
