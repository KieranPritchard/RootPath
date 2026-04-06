"use client"

import React from "react";
import { motion } from "framer-motion";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ImageButtonProps {
    text: string;
    image: string;
    altText: string;
    className?: string;
}

/**
 * ImageButton: An interactive button using shadcn/ui variants to match the Portfolio theme.
 * Refined with smaller text and centered layout for visual consistency.
 */
function ImageButton({ text, image, altText, className }: ImageButtonProps) {
    return (
        <AlertDialog>
            <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
            >
                <AlertDialogTrigger asChild>
                    {/* Standardized Button with 'default' variant to match LinkButton */}
                    <Button
                        variant="default"
                        size="lg"
                        className={cn(
                            "w-full rounded-xl px-6 flex items-center justify-center transition-all duration-300",
                            "text-base md:text-lg font-medium shadow-sm hover:shadow-md cursor-pointer",
                            className
                        )}
                    >
                        <span className="text-center leading-tight tracking-tight">
                            {text}
                        </span>
                    </Button>
                </AlertDialogTrigger>
            </motion.div>

            <AlertDialogContent className="bg-background border-muted max-w-[90vw] sm:max-w-md rounded-2xl shadow-2xl">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-foreground text-center text-xl font-bold tracking-tight">
                        {text}
                    </AlertDialogTitle>
                    <AlertDialogDescription className="sr-only">
                        {altText}
                    </AlertDialogDescription>
                </AlertDialogHeader>

                {/* Animated Image Reveal */}
                <motion.div 
                    className="flex justify-center py-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <img
                        src={image}
                        alt={altText}
                        className="w-auto max-w-full sm:max-w-[350px] aspect-square object-contain rounded-lg shadow-sm"
                    />
                </motion.div>

                <AlertDialogFooter className="sm:justify-center">
                    <AlertDialogAction className="bg-primary text-primary-foreground hover:opacity-90 min-w-[120px] rounded-lg">
                        Close
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default ImageButton;