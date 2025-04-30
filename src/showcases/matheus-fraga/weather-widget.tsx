"use client"

import { useState, useEffect } from "react"
import { Cloud, CloudRain, Sun, Droplet } from "lucide-react"

export default function WeatherWidget() {
  const [weather, setWeather] = useState<{
    temp: number
    condition: "sunny" | "cloudy" | "rainy"
    humidity: number
  }>({
    temp: 18,
    condition: "cloudy",
    humidity: 65,
  })

  useEffect(() => {
    // This would normally fetch real weather data
    // For demo purposes, we're just simulating weather data
    const interval = setInterval(() => {
      const conditions: Array<"sunny" | "cloudy" | "rainy"> = ["sunny", "cloudy", "rainy"]
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)]

      setWeather({
        temp: Math.floor(Math.random() * 10) + 15, // 15-25°C
        condition: randomCondition,
        humidity: Math.floor(Math.random() * 30) + 50, // 50-80%
      })
    }, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const WeatherIcon = () => {
    switch (weather.condition) {
      case "sunny":
        return <Sun className="h-4 w-4 text-yellow-500" />
      case "rainy":
        return <CloudRain className="h-4 w-4 text-blue-500" />
      case "cloudy":
      default:
        return <Cloud className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="hidden md:flex items-center gap-1 text-xs bg-gray-100 rounded-full px-3 py-1">
      <WeatherIcon />
      <span>{weather.temp}°C</span>
      <Droplet className="h-3 w-3 ml-1 text-blue-500" />
      <span>{weather.humidity}%</span>
    </div>
  )
}
