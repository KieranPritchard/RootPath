"use client"

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

// Stores the props of the link button
interface LinkButtonProps {
    text: string;
    link: string;
    icon: React.ReactNode;
    className?: string;
}

/**
 * LinkButton: Portfolio-style navigation button with icon and subtle arrow.
 * Uses outline variant to match the portfolio's secondary button pattern.
 */
function LinkButton({ text, link, icon, className }: LinkButtonProps) {
    return (
        <>
            {/* Wraps the button in an animated container */}
            <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
            >
                {/* Button styling the same as the original */}
                <Button
                    asChild
                    variant="outline" 
                    size="lg"         
                    className={cn(
                    "w-full rounded-xl h-13 px-5 flex items-center justify-between transition-all duration-300",
                    "text-sm md:text-base font-medium",
                    "border-border/60 bg-card hover:bg-muted/50 hover:border-primary/20",
                    "shadow-sm hover:shadow-md hover:shadow-primary/5",
                    "group/link",
                    className
                    )}
                >
                    {/* Link to where the button leads */}
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center w-full gap-3"
                    >
                    {/* Icon section */}
                    <div className="flex items-center justify-center shrink-0 w-9 h-9 rounded-lg bg-primary/8 text-primary">
                        <span className="[&>svg]:w-4.5 [&>svg]:h-4.5">
                            {icon}
                        </span>
                    </div>

                    {/* Text */}
                    <span className="flex-1 text-left leading-tight tracking-tight text-foreground">
                        {text}
                    </span>

                    {/* Arrow indicator */}
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
                    </a>
                </Button>
            </motion.div>
        </>
    );
}

export default LinkButton;