import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import AnimatedRoof from "./animated-roof";

interface NavItem {
    title: string;
    href: string;
    description?: string;
    children?: NavItem[];
}

interface MobileNavProps {
    items: NavItem[];
}

export default function MobileNav({ items }: MobileNavProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

    const toggleSubmenu = (index: number) => {
        setOpenSubmenu((prev) => (prev === index ? null : index));
    };

    // Prevent body scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    return (
        <div className="xl:hidden">
            <Button
                variant="ghost"
                size="icon"
                className="relative z-50"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {/* Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm min-h-dvh transition-opacity duration-300",
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsOpen(false)}
            />

            {/* Slide-over menu */}
            <div
                className={cn(
                    "fixed top-0 right-0 z-50 min-h-dvh h-full w-full md:w-3/4 max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out",
                    isOpen ? "translate-x-0 " : "translate-x-full"
                )}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <div className="flex items-center gap-2">
                            <div className="relative h-10 w-10 overflow-hidden">
                                <AnimatedRoof />
                            </div>
                            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-600">
                                Canterbury Roofing
                            </span>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Navigation */}
                    <div className="flex-1 overflow-y-auto py-4 bg-white ">
                        <nav className="flex flex-col px-4 space-y-1">
                            {items.map((item, index) => {
                                const hasChildren = !!item.children?.length;
                                const isSubmenuOpen = openSubmenu === index;

                                return (
                                    <div key={index} className="border-b py-2">
                                        <div className="flex items-center justify-between">
                                            <button
                                                className="flex-1 text-left text-base font-medium py-2"
                                                onClick={() => {
                                                    if (hasChildren) {
                                                        toggleSubmenu(index);
                                                    } else {
                                                        setIsOpen(false);
                                                        window.location.href = item.href;
                                                    }
                                                }}
                                            >
                                                {item.title}
                                            </button>
                                            {hasChildren && (
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => toggleSubmenu(index)}
                                                    className="h-8 w-8"
                                                    aria-label="Toggle Submenu"
                                                >
                                                    <ChevronDown
                                                        className={cn(
                                                            "h-4 w-4 transition-transform duration-200",
                                                            isSubmenuOpen ? "rotate-180" : ""
                                                        )}
                                                    />
                                                </Button>
                                            )}
                                        </div>

                                        {hasChildren && (
                                            <div
                                                className={cn(
                                                    "pl-4 transition-all overflow-hidden duration-300",
                                                    isSubmenuOpen ? "max-h-96 py-2" : "max-h-0"
                                                )}
                                            >
                                                {item.children.map((child, childIndex) => (
                                                    <a
                                                        key={childIndex}
                                                        href={child.href}
                                                        className="block py-2 text-sm text-muted-foreground hover:text-primary"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {child.title}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Footer */}
                    <div className="p-4 border-t">
                        <div className="grid gap-2">
                            <Button className="w-full" asChild>
                                <a href="#contact" onClick={() => setIsOpen(false)}>
                                    Get a Free Quote
                                </a>
                            </Button>
                            <div className="flex items-center justify-between text-sm">
                                <a href="tel:+6433555555" className="flex items-center gap-2 py-2">
                                    <span>03 355 5555</span>
                                </a>
                                <a href="mailto:info@canterburyroofing.co.nz" className="flex items-center gap-2 py-2">
                                    <span>Email Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
