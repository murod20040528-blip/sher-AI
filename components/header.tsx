"use client"

import Link from "next/link"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"

export function Header() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <header className="relative z-10 flex items-center justify-between p-6">
      <Link href="/" className="flex items-center gap-3">
        <div className="relative">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent animate-pulse-glow" />
          <div className="absolute inset-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent animate-float opacity-50" />
        </div>
        <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          PoetryAI
        </h1>
      </Link>

      <div className="flex items-center gap-6">
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/history" className="text-muted-foreground hover:text-foreground transition-colors">
            {t.history}
          </Link>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            {t.gallery}
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            {t.about}
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            {t.contact}
          </a>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  )
}
