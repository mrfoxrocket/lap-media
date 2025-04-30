"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
    title: string;
    href: string;
    description?: string;
    children?: NavItem[];
}

interface MainNavProps {
    items: NavItem[];
}

export default function MainNav({ items }: MainNavProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="hidden md:flex gap-6">
            {items.map((item, index) => {
                const hasChildren = !!item.children?.length;

                return (
                    <div
                        key={index}
                        className="relative group"
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <a
                            href={item.href}
                            className={cn(
                                "text-sm font-medium relative group flex items-center gap-1",
                                activeIndex === index ? "text-primary" : "text-foreground"
                            )}
                            onClick={() => hasChildren && setActiveIndex(activeIndex === index ? null : index)}
                        >
                            {item.title}
                            {hasChildren && (
                                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                            )}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                        </a>

                        {hasChildren && (
                            <div
                                className={cn(
                                    "absolute left-0 top-full pt-2 w-48 opacity-0 translate-y-1 pointer-events-none transition-all duration-200",
                                    activeIndex === index ? "opacity-100 translate-y-0 pointer-events-auto" : ""
                                )}
                            >
                                <div className="bg-white rounded-md shadow-lg border overflow-hidden">
                                    <div className="p-2">
                                        {item.children.map((child, childIndex) => (
                                            <a
                                                key={childIndex}
                                                href={child.href}
                                                className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-muted transition-colors"
                                            >
                                                <span>{child.title}</span>
                                                <ChevronRight className="h-4 w-4 opacity-50" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
