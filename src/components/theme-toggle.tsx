"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [isTransitioning, setIsTransitioning] = React.useState(false)

  const handleThemeChange = () => {
    setIsTransitioning(true)
    
    // Add gradient overlay
    const overlay = document.createElement('div')
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 9999;
      pointer-events: none;
      background: radial-gradient(circle at center, rgba(147, 51, 234, 0.2), transparent);
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    `
    document.body.appendChild(overlay)
    
    requestAnimationFrame(() => {
      overlay.style.opacity = '1'
    })
    
    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light")
      overlay.style.opacity = '0'
      setTimeout(() => {
        document.body.removeChild(overlay)
        setIsTransitioning(false)
      }, 300)
    }, 150)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleThemeChange}
      disabled={isTransitioning}
      className="relative overflow-hidden"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}