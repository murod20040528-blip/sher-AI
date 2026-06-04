import { PoetryGenerator } from "@/components/poetry-generator"
import { AnimatedBackground } from "@/components/animated-background"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <PoetryGenerator />
    </main>
  )
}
