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
 * DownloadButton: Portfolio-style download button.
 * Uses primary variant to match the portfolio's "Download Resume" CTA style.
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
                variant="outline"
                size="lg"
                className={cn(
                    "w-full rounded-xl h-13 px-5 flex items-center justify-between transition-all duration-300",
                    "text-sm md:text-base font-medium",
                    "border-border/60 bg-card hover:bg-muted/50 hover:border-primary/20",
                    "shadow-sm hover:shadow-md hover:shadow-primary/5",
                    className
                )}
            >
                <a href={file} download={fileName} className="flex items-center w-full gap-3">
                    {/* Icon section */}
                    <div className="flex items-center justify-center shrink-0 w-9 h-9 rounded-lg bg-primary/8 text-primary">
                        <Download className="w-[18px] h-[18px]" />
                    </div>

                    {/* Text */}
                    <span className="flex-1 text-left leading-tight tracking-tight text-foreground">
                        {text}
                    </span>

                    {/* Spacer for balance */}
                    <div className="w-9 shrink-0" aria-hidden="true" />
                </a>
            </Button>
        </motion.div>
    );
}

export default DownloadButton;