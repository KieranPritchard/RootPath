"use client"

import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DownloadButtonProps {
    file: string;
    fileName: string;
    text: string;
    icon?: React.ReactNode;
    className?: string;
}

/**
 * DownloadButton: A specialized button for file downloads.
 * Uses shadcn/ui primary variant with refined text sizing.
 */
function DownloadButton({ file, fileName, text, className }: DownloadButtonProps) {
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
                    "text-base md:text-lg font-medium shadow-sm hover:shadow-md",
                    className
                )}
            >
                <a href={file} download={fileName} className="flex items-center w-full justify-between">
                    {/* Icon section - matched to LinkButton icon size */}
                    <div className="flex items-center shrink-0">
                        <span className="[&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6 opacity-90">
                            <Download />
                        </span>
                    </div>

                    {/* Text centered: Using flex-1 and text-center for stability */}
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

export default DownloadButton;