import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Upload, Home } from "lucide-react"

export default function Navbar() {
  return (
    <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            ComfyUI Themes
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Gallery</span>
            </Button>
          </Link>
          <Link href="/upload">
            <Button size="sm" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              <span className="hidden sm:inline">Upload Theme</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
