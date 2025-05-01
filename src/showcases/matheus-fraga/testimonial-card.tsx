import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
    quote: string;
    author: string;
    location: string;
    rating: number;
    imageSrc: string;
    projectType: string;
}

export default function TestimonialCard({
    quote,
    author,
    location,
    rating,
    imageSrc,
    projectType,
}: TestimonialCardProps) {
    return (
        <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-primary">
                        <img src={imageSrc || "/placeholder.svg"} className="object-cover" />
                    </div>
                    <div>
                        <h3 className="font-semibold">{author}</h3>
                        <p className="text-sm text-muted-foreground">{location}</p>
                    </div>
                </div>

                <div className="mb-4 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className={`h-4 w-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                        />
                    ))}
                    <span className="text-xs text-muted-foreground ml-2">{projectType}</span>
                </div>

                <div className="relative">
                    <svg
                        className="absolute -top-2 -left-2 h-8 w-8 text-primary/20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="italic text-gray-700 relative z-10">{quote}</p>
                </div>
            </CardContent>
        </Card>
    );
}
