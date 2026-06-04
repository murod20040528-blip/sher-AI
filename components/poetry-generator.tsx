"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Sparkles, Copy, Download, Heart, ImageIcon } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { usePoetryHistory } from "@/hooks/use-poetry-history"
import { translations, poetryTemplates } from "@/lib/translations"

export function PoetryGenerator() {
  const [prompt, setPrompt] = useState("")
  const [generatedPoetry, setGeneratedPoetry] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState("")
  const [isGeneratingImage, setIsGeneratingImage] = useState(false)

  const { language } = useLanguage()
  const { addPoem } = usePoetryHistory()
  const t = translations[language]

  const generatePoetry = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)

    // Simulate AI generation with a delay
    setTimeout(() => {
      const templates = poetryTemplates[language]
      const randomTemplate = templates[Math.floor(Math.random() * templates.length)]
      const generatedPoem = randomTemplate.replace("{prompt}", prompt)

      setGeneratedPoetry(generatedPoem)

      addPoem({
        prompt: prompt.trim(),
        content: generatedPoem,
        language,
      })

      setIsGenerating(false)
    }, 2000)
  }

  const generateImage = async () => {
    if (!generatedPoetry) return

    setIsGeneratingImage(true)

    // Create image prompt based on poetry content and user prompt
    const imagePrompt = `Beautiful artistic illustration inspired by: ${prompt}. Style: dreamy, poetic, artistic, soft colors, ethereal atmosphere`

    // Simulate image generation delay
    setTimeout(() => {
      // Generate placeholder image with query
      const imageUrl = `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(imagePrompt)}`
      setGeneratedImage(imageUrl)
      setIsGeneratingImage(false)
    }, 3000)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPoetry)
  }

  const downloadImage = () => {
    if (generatedImage) {
      const link = document.createElement("a")
      link.href = generatedImage
      link.download = `poetry-image-${Date.now()}.png`
      link.click()
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="relative inline-block">
          <h1 className="text-5xl md:text-7xl font-bold text-balance">
            <span className="animate-gradient bg-clip-text text-transparent">{t.title}</span>
          </h1>
          <div className="absolute -top-4 -right-4 animate-float">
            <Sparkles className="w-8 h-8 text-accent" />
          </div>
        </div>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{t.subtitle}</p>
      </div>

      {/* Input Section */}
      <Card className="p-8 backdrop-blur-sm bg-card/50 border-border/50">
        <div className="space-y-6">
          <div>
            <label htmlFor="prompt" className="block text-sm font-medium mb-3">
              {t.inputLabel}
            </label>
            <Textarea
              id="prompt"
              placeholder={t.inputPlaceholder}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[120px] text-lg resize-none bg-input/50 border-border/50 focus:border-primary/50"
            />
          </div>

          <Button
            onClick={generatePoetry}
            disabled={!prompt.trim() || isGenerating}
            size="lg"
            className="w-full md:w-auto animate-pulse-glow"
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                {t.generating}
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                {t.generateButton}
              </>
            )}
          </Button>
        </div>
      </Card>

      {/* Generated Poetry Section */}
      {generatedPoetry && (
        <Card className="p-8 backdrop-blur-sm bg-card/50 border-border/50 animate-in fade-in-50 slide-in-from-bottom-4">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-primary">{t.yourPoetry}</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={copyToClipboard}>
                  <Copy className="w-4 h-4 mr-2" />
                  {t.copy}
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  {t.save}
                </Button>
                <Button variant="outline" size="sm">
                  <Heart className="w-4 h-4 mr-2" />
                  {t.like}
                </Button>
                <Button variant="outline" size="sm" onClick={generateImage} disabled={isGeneratingImage}>
                  {isGeneratingImage ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin mr-2" />
                      {t.generatingImage}
                    </>
                  ) : (
                    <>
                      <ImageIcon className="w-4 h-4 mr-2" />
                      {t.generateImage}
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              <pre className="whitespace-pre-wrap font-serif text-lg leading-relaxed text-foreground bg-transparent border-none p-0">
                {generatedPoetry}
              </pre>
            </div>

            {generatedImage && (
              <div className="space-y-4 animate-in fade-in-50 slide-in-from-bottom-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-primary">{t.imageGenerated}</h4>
                  <Button variant="outline" size="sm" onClick={downloadImage}>
                    <Download className="w-4 h-4 mr-2" />
                    {t.downloadImage}
                  </Button>
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={generatedImage || "/placeholder.svg"}
                    alt="Generated poetry illustration"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <Card className="p-6 text-center backdrop-blur-sm bg-card/30 border-border/30">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">{t.aiPowered}</h3>
          <p className="text-sm text-muted-foreground">{t.aiDescription}</p>
        </Card>

        <Card className="p-6 text-center backdrop-blur-sm bg-card/30 border-border/30">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
            <Heart className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-semibold mb-2">{t.emotionalDepth}</h3>
          <p className="text-sm text-muted-foreground">{t.emotionalDescription}</p>
        </Card>

        <Card className="p-6 text-center backdrop-blur-sm bg-card/30 border-border/30">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-chart-3/20 flex items-center justify-center">
            <ImageIcon className="w-6 h-6 text-chart-3" />
          </div>
          <h3 className="font-semibold mb-2">{t.saveShare}</h3>
          <p className="text-sm text-muted-foreground">{t.saveDescription}</p>
        </Card>
      </div>
    </div>
  )
}
