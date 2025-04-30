"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function RoofingCalculator() {
  const [roofSize, setRoofSize] = useState<number>(100)
  const [roofType, setRoofType] = useState<string>("standard")
  const [serviceType, setServiceType] = useState<string>("repair")
  const [showResult, setShowResult] = useState<boolean>(false)

  const calculateEstimate = () => {
    setShowResult(true)
  }

  // Calculate base price based on inputs
  const getBasePrice = () => {
    const sizeFactor = roofSize / 10

    let typeMultiplier = 1
    if (roofType === "premium") typeMultiplier = 1.5
    if (roofType === "luxury") typeMultiplier = 2.2

    let serviceMultiplier = 1
    if (serviceType === "replacement") serviceMultiplier = 3
    if (serviceType === "new") serviceMultiplier = 3.5
    if (serviceType === "waterproofing") serviceMultiplier = 1.8

    return Math.round(sizeFactor * typeMultiplier * serviceMultiplier * 100)
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">Roofing Cost Calculator</h3>
      <p className="text-sm text-muted-foreground">
        Get a rough estimate for your roofing project. For an accurate quote, please contact us.
      </p>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>Roof Size (m²): {roofSize}</Label>
            <span className="text-sm text-muted-foreground">{roofSize} m²</span>
          </div>
          <Slider
            value={[roofSize]}
            min={20}
            max={500}
            step={10}
            onValueChange={(value) => setRoofSize(value[0])}
            className="py-4"
          />
        </div>

        <div className="space-y-2">
          <Label>Roof Material Type</Label>
          <Select value={roofType} onValueChange={setRoofType}>
            <SelectTrigger>
              <SelectValue placeholder="Select roof type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard (Asphalt Shingles)</SelectItem>
              <SelectItem value="premium">Premium (Metal Roofing)</SelectItem>
              <SelectItem value="luxury">Luxury (Slate/Tile)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Service Type</Label>
          <Select value={serviceType} onValueChange={setServiceType}>
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="repair">Repair</SelectItem>
              <SelectItem value="replacement">Full Replacement</SelectItem>
              <SelectItem value="new">New Installation</SelectItem>
              <SelectItem value="waterproofing">Waterproofing</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={calculateEstimate}
          className="w-full bg-gradient-to-r from-primary to-teal-600 hover:from-teal-600 hover:to-primary"
        >
          Calculate Estimate
        </Button>
      </div>

      {showResult && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-50">
          <h4 className="font-medium text-center mb-2">Estimated Price Range</h4>
          <p className="text-2xl font-bold text-center text-primary">
            ${getBasePrice()} - ${Math.round(getBasePrice() * 1.3)}
          </p>
          <p className="text-xs text-center text-muted-foreground mt-2">
            This is a rough estimate only. Contact us for an accurate quote.
          </p>
          <div className="mt-4 pt-4 border-t">
            <h5 className="font-medium mb-2">Estimate includes:</h5>
            <ul className="text-sm space-y-1">
              <li className="flex items-start gap-2">
                <svg
                  className="h-4 w-4 text-primary mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Materials and labor</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="h-4 w-4 text-primary mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Site preparation and cleanup</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="h-4 w-4 text-primary mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Standard warranty</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
