import React from "react";
import { Button } from "@/components/ui/button";

interface LinkButtonProps {
    text: string;
    link: string;
    icon: React.ReactNode; // Icons are now handled by the parent
}

// Long Button Component converted to LinkButton using shadcn primitives
function LinkButton({ text, link, icon }: LinkButtonProps) {
    return (
        <Button
        asChild
        className="relative flex items-center justify-between bg-[#2a3c4b] dark:bg-[#a9d6e5] text-[#f9fafb] dark:text-[#0d1b2a] border-[#2a3c4b] dark:border-[#a9d6e5] hover:text-[#2a3c4b] dark:hover:text-[#a9d6e5] w-full rounded-xl border-2 text-lg md:text-xl hover:bg-transparent transition-colors duration-300 ease-in-out px-4 md:px-6 mt-2 min-h-[70px] md:h-22"
        >
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {
                    window.open(link)
                }}
            >
                {/* Icon passed from parent */}
                <div className="text-3xl md:text-4xl flex items-center justify-center">
                {icon}
                </div>

                {/* Text centered using Flexbox logic instead of Absolute for better stability */}
                {/* Updated: Added 'px-10' to prevent text from hitting icons on very narrow screens */}
                <span className="absolute left-1/2 -translate-x-1/2 w-max max-w-[70%] text-center leading-tight px-2">
                {text}
                </span>

                {/* Empty span to maintain 'justify-between' symmetry if needed */}
                <span className="w-4 md:w-8"></span>
            </a>
        </Button>
    );
}

export default LinkButton;