import { Droplet, Home, RouteIcon as Road, Square, PenToolIcon as Tool, Building, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type ServiceIconType = "droplet" | "home" | "road" | "square" | "tool" | "building";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: ServiceIconType;
    imageSrc: string;
    accentColor: string;
}

export default function ServiceCard({ title, description, icon, imageSrc, accentColor }: ServiceCardProps) {
    const IconComponent: Record<ServiceIconType, LucideIcon> = {
        droplet: Droplet,
        home: Home,
        road: Road,
        square: Square,
        tool: Tool,
        building: Building,
    };

    const Icon = IconComponent[icon];

    return (
        <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${accentColor} opacity-80 z-10`} />
                    <image
                        href={imageSrc || "/placeholder.svg"}
                        // alt={title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 z-20 bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
                        <Icon className="h-6 w-6 text-white" />
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-muted-foreground mb-4">{description}</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                        Learn more
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </CardContent>
        </Card>
    );
}
