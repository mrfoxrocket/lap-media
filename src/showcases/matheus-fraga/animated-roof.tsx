"use client"

import { useEffect, useRef } from "react"

interface AnimatedRoofProps {
  isWhite?: boolean
}

export default function AnimatedRoof({ isWhite = false }: AnimatedRoofProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 40
    canvas.height = 40

    // Animation variables
    let animationFrame: number
    const raindrops: { x: number; y: number; speed: number; length: number }[] = []

    // Create raindrops
    for (let i = 0; i < 10; i++) {
      raindrops.push({
        x: Math.random() * canvas.width,
        y: (Math.random() * canvas.height) / 2,
        speed: 0.5 + Math.random() * 1,
        length: 3 + Math.random() * 5,
      })
    }

    // Draw function
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Set colors based on isWhite prop
      const roofColor = isWhite ? "#FFFFFF" : "#1e3a8a"
      const dropColor = isWhite ? "rgba(255, 255, 255, 0.7)" : "rgba(20, 184, 166, 0.7)"

      // Draw a more detailed roof
      ctx.fillStyle = roofColor

      // Draw main roof shape
      ctx.beginPath()
      ctx.moveTo(20, 5)
      ctx.lineTo(35, 20)
      ctx.lineTo(5, 20)
      ctx.closePath()
      ctx.fill()

      // Draw house
      ctx.fillRect(8, 20, 24, 15)

      // Draw chimney
      ctx.fillRect(28, 10, 4, 10)

      // Draw window
      ctx.fillStyle = isWhite ? "#1e3a8a" : "#FFFFFF"
      ctx.fillRect(12, 24, 6, 6)
      ctx.fillRect(22, 24, 6, 6)

      // Draw raindrops
      ctx.strokeStyle = dropColor
      ctx.lineWidth = 1.5

      raindrops.forEach((drop) => {
        ctx.beginPath()
        ctx.moveTo(drop.x, drop.y)
        ctx.lineTo(drop.x, drop.y + drop.length)
        ctx.stroke()

        // Move raindrops
        drop.y += drop.speed

        // Reset raindrops when they reach bottom
        if (drop.y > canvas.height) {
          drop.y = 0
          drop.x = Math.random() * canvas.width
        }
      })

      // Request next frame
      animationFrame = requestAnimationFrame(draw)
    }

    // Start animation
    draw()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [isWhite])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
