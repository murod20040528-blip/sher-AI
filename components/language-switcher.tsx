"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import type { Language } from "@/lib/translations"
import { Globe } from "lucide-react"

const languages = [
  { code: "uz" as Language, name: "O'zbek", flag: "🇺🇿" },
  { code: "ru" as Language, name: "Русский", flag: "🇷🇺" },
  { code: "en" as Language, name: "English", flag: "🇺🇸" },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <div className="flex gap-1">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            variant={language === lang.code ? "default" : "ghost"}
            size="sm"
            onClick={() => setLanguage(lang.code)}
            className="text-xs px-2 py-1 h-auto"
          >
            <span className="mr-1">{lang.flag}</span>
            {lang.name}
          </Button>
        ))}
      </div>
    </div>
  )
}
