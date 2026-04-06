"use client"

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LinkButtonProps {
    text: string;
    link: string;
    icon: React.ReactNode;
    className?: string;
}

/**
 * LinkButton: A navigation button using shadcn/ui primary variants.
 * Refined with smaller text and optimized icon scaling for a cleaner portfolio look.
 */
function LinkButton({ text, link, icon, className }: LinkButtonProps) {
    return (
        <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="w-full"
        >
            <Button
                asChild
                variant="default" 
                size="lg"         
                className={cn(
                "w-full rounded-xl px-6 flex items-center justify-between transition-all duration-300",
                // Reduced text size: text-base for mobile, text-lg for desktop
                "text-base md:text-lg font-medium shadow-sm hover:shadow-md",
                className
                )}
            >
                <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center w-full justify-between"
                >
                {/* Icon section - Slightly smaller to match the text reduction */}
                <div className="flex items-center shrink-0">
                    <span className="[&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6 opacity-90">
                        {icon}
                    </span>
                </div>

                {/* Text centered: Using flex-1 and text-center */}
                <span className="flex-1 text-center px-4 leading-tight tracking-tight">
                    {text}
                </span>

                {/* Symmetrical spacer to maintain the center-aligned text look */}
                <div className="w-5 h-5 md:w-6 md:h-6 shrink-0" aria-hidden="true" />
                </a>
            </Button>
        </motion.div>
    );
}

export default LinkButton;