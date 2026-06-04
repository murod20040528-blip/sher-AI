"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const orbs: Array<{
      x: number
      y: number
      baseX: number
      baseY: number
      radius: number
      hue: number
      saturation: number
      lightness: number
      opacity: number
      speed: number
      angle: number
      waveAmplitude: number
      glowSize: number
    }> = []

    // Create beautiful floating orbs
    for (let i = 0; i < 12; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseX: Math.random() * canvas.width,
        baseY: Math.random() * canvas.height,
        radius: Math.random() * 40 + 20,
        hue: Math.random() * 360,
        saturation: 70 + Math.random() * 30,
        lightness: 50 + Math.random() * 30,
        opacity: 0.3 + Math.random() * 0.4,
        speed: 0.005 + Math.random() * 0.01,
        angle: Math.random() * Math.PI * 2,
        waveAmplitude: 50 + Math.random() * 100,
        glowSize: 60 + Math.random() * 40,
      })
    }

    // Floating particles for extra magic
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      hue: number
      life: number
      maxLife: number
    }> = []

    // Create magical particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1,
        hue: Math.random() * 360,
        life: Math.random() * 100,
        maxLife: 100 + Math.random() * 100,
      })
    }

    let time = 0
    let animationId: number

    const animate = () => {
      time += 0.016

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2,
      )

      const hue1 = (time * 10) % 360
      const hue2 = (time * 15 + 120) % 360
      const hue3 = (time * 8 + 240) % 360

      gradient.addColorStop(0, `hsla(${hue1}, 40%, 5%, 0.9)`)
      gradient.addColorStop(0.5, `hsla(${hue2}, 30%, 3%, 0.95)`)
      gradient.addColorStop(1, `hsla(${hue3}, 20%, 1%, 1)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      orbs.forEach((orb, index) => {
        // Wave motion
        orb.angle += orb.speed
        orb.x = orb.baseX + Math.sin(orb.angle) * orb.waveAmplitude
        orb.y = orb.baseY + Math.cos(orb.angle * 0.7) * (orb.waveAmplitude * 0.5)

        // Slowly drift the base position
        orb.baseX += Math.sin(time * 0.1 + index) * 0.1
        orb.baseY += Math.cos(time * 0.08 + index) * 0.1

        // Keep orbs within bounds
        if (orb.baseX < -100) orb.baseX = canvas.width + 100
        if (orb.baseX > canvas.width + 100) orb.baseX = -100
        if (orb.baseY < -100) orb.baseY = canvas.height + 100
        if (orb.baseY > canvas.height + 100) orb.baseY = -100

        // Color shifting
        orb.hue += 0.2

        // Create glow effect
        const glowGradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.glowSize)
        glowGradient.addColorStop(0, `hsla(${orb.hue}, ${orb.saturation}%, ${orb.lightness}%, ${orb.opacity})`)
        glowGradient.addColorStop(0.4, `hsla(${orb.hue}, ${orb.saturation}%, ${orb.lightness}%, ${orb.opacity * 0.3})`)
        glowGradient.addColorStop(1, `hsla(${orb.hue}, ${orb.saturation}%, ${orb.lightness}%, 0)`)

        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.glowSize, 0, Math.PI * 2)
        ctx.fill()

        // Draw the core orb
        const coreGradient = ctx.createRadialGradient(
          orb.x - orb.radius * 0.3,
          orb.y - orb.radius * 0.3,
          0,
          orb.x,
          orb.y,
          orb.radius,
        )
        coreGradient.addColorStop(
          0,
          `hsla(${orb.hue}, ${orb.saturation}%, ${orb.lightness + 20}%, ${orb.opacity + 0.3})`,
        )
        coreGradient.addColorStop(1, `hsla(${orb.hue}, ${orb.saturation}%, ${orb.lightness}%, ${orb.opacity})`)

        ctx.fillStyle = coreGradient
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++

        // Regenerate particle when it dies
        if (particle.life > particle.maxLife) {
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
          particle.vx = (Math.random() - 0.5) * 0.3
          particle.vy = (Math.random() - 0.5) * 0.3
          particle.hue = Math.random() * 360
          particle.life = 0
          particle.maxLife = 100 + Math.random() * 100
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Calculate opacity based on life
        const lifeRatio = particle.life / particle.maxLife
        const opacity = Math.sin(lifeRatio * Math.PI) * 0.6

        particle.hue += 0.5

        // Draw particle with glow
        ctx.shadowBlur = 10
        ctx.shadowColor = `hsla(${particle.hue}, 80%, 60%, ${opacity})`
        ctx.fillStyle = `hsla(${particle.hue}, 80%, 60%, ${opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      })

      orbs.forEach((orb1, i) => {
        orbs.forEach((orb2, j) => {
          if (i !== j) {
            const dx = orb1.x - orb2.x
            const dy = orb1.y - orb2.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 200) {
              const opacity = (1 - distance / 200) * 0.1
              ctx.strokeStyle = `hsla(${(orb1.hue + orb2.hue) / 2}, 60%, 70%, ${opacity})`
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(orb1.x, orb1.y)
              ctx.lineTo(orb2.x, orb2.y)
              ctx.stroke()
            }
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
}
