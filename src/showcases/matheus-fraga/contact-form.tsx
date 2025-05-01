"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-6 space-y-4">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
          <CheckCircle className="h-8 w-8 text-teal-600" />
        </div>
        <h3 className="text-xl font-bold">Thank You!</h3>
        <p className="text-muted-foreground">
          Your quote request has been received. We'll be in touch within 24 hours.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          Submit another request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="first-name">First name</Label>
          <Input id="first-name" required className="border-gray-300 focus:border-primary focus:ring-primary" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last name</Label>
          <Input id="last-name" required className="border-gray-300 focus:border-primary focus:ring-primary" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" required className="border-gray-300 focus:border-primary focus:ring-primary" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" type="tel" required className="border-gray-300 focus:border-primary focus:ring-primary" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input id="address" required className="border-gray-300 focus:border-primary focus:ring-primary" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">Service Required</Label>
        <Select>
          <SelectTrigger className="border-gray-300 focus:border-primary focus:ring-primary">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="waterproofing">Waterproofing</SelectItem>
            <SelectItem value="driveways">Driveways</SelectItem>
            <SelectItem value="roofing">Roofing</SelectItem>
            <SelectItem value="flat-roofing">Flat Roofing</SelectItem>
            <SelectItem value="repairs">Repairs</SelectItem>
            <SelectItem value="commercial">Commercial Roofing</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Project Details</Label>
        <Textarea
          id="message"
          placeholder="Please provide details about your project..."
          className="border-gray-300 focus:border-primary focus:ring-primary"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-linear-to-r from-primary to-teal-600 hover:from-teal-600 hover:to-primary group"
        disabled={isSubmitting}
      >
        <span className="flex items-center gap-2">
          {isSubmitting ? "Submitting..." : "Request Free Quote"}
          {!isSubmitting && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
        </span>
      </Button>
    </form>
  )
}
