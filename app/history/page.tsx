"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { AnimatedBackground } from "@/components/animated-background"
import { Header } from "@/components/header"
import { usePoetryHistory } from "@/hooks/use-poetry-history"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import { ArrowLeft, Heart, Trash2, Search, Calendar, Sparkles } from "lucide-react"
import Link from "next/link"

export default function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null)
  const [showClearConfirm, setShowClearConfirm] = useState(false)

  const { poems, toggleLike, deletePoem, clearHistory } = usePoetryHistory()
  const { language } = useLanguage()
  const t = translations[language]

  const filteredPoems = poems.filter(
    (poem) =>
      poem.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      poem.prompt.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleDeletePoem = (id: string) => {
    deletePoem(id)
    setShowDeleteConfirm(null)
  }

  const handleClearAll = () => {
    clearHistory()
    setShowClearConfirm(false)
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat(language === "uz" ? "uz-UZ" : language === "ru" ? "ru-RU" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date))
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-6 py-8">
          {/* Header Section */}
          <div className="text-center space-y-6 mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t.backToGenerator}
                </Button>
              </Link>
            </div>

            <div className="relative inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                <span className="animate-gradient bg-clip-text text-transparent">{t.historyTitle}</span>
              </h1>
              <div className="absolute -top-4 -right-4 animate-float">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
            </div>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{t.historySubtitle}</p>
          </div>

          {/* Search and Actions */}
          {poems.length > 0 && (
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-card/50 border-border/50"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowClearConfirm(true)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                {t.clearAll}
              </Button>
            </div>
          )}

          {/* Poems Grid */}
          {filteredPoems.length === 0 ? (
            <Card className="p-12 text-center backdrop-blur-sm bg-card/50 border-border/50">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-muted/20 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.noPoems}</h3>
              <p className="text-muted-foreground mb-6">{t.noPomsDescription}</p>
              <Link href="/">
                <Button>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t.backToGenerator}
                </Button>
              </Link>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPoems.map((poem) => (
                <Card
                  key={poem.id}
                  className="p-6 backdrop-blur-sm bg-card/50 border-border/50 hover:bg-card/70 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    {/* Poem Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {formatDate(poem.createdAt)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleLike(poem.id)}
                          className={poem.liked ? "text-red-500" : "text-muted-foreground"}
                        >
                          <Heart className={`w-4 h-4 ${poem.liked ? "fill-current" : ""}`} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowDeleteConfirm(poem.id)}
                          className="text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Prompt */}
                    <div className="text-sm text-primary font-medium bg-primary/10 rounded-lg p-3">"{poem.prompt}"</div>

                    {/* Poem Content */}
                    <div className="prose prose-sm prose-invert max-w-none">
                      <pre className="whitespace-pre-wrap font-serif text-sm leading-relaxed text-foreground bg-transparent border-none p-0">
                        {poem.content}
                      </pre>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Delete Confirmation Modal */}
          {showDeleteConfirm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <Card className="p-6 max-w-md w-full">
                <h3 className="text-lg font-semibold mb-4">{t.confirmDelete}</h3>
                <div className="flex gap-3 justify-end">
                  <Button variant="outline" onClick={() => setShowDeleteConfirm(null)}>
                    {t.cancel}
                  </Button>
                  <Button variant="destructive" onClick={() => handleDeletePoem(showDeleteConfirm)}>
                    {t.delete}
                  </Button>
                </div>
              </Card>
            </div>
          )}

          {/* Clear All Confirmation Modal */}
          {showClearConfirm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <Card className="p-6 max-w-md w-full">
                <h3 className="text-lg font-semibold mb-4">{t.confirmClearAll}</h3>
                <div className="flex gap-3 justify-end">
                  <Button variant="outline" onClick={() => setShowClearConfirm(false)}>
                    {t.cancel}
                  </Button>
                  <Button variant="destructive" onClick={handleClearAll}>
                    {t.delete}
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
