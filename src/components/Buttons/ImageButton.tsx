"use client"

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
    icon?: React.ReactNode;
}

/**
 * ImageButton: Portfolio-style interactive button that opens a dialog.
 * Uses outline variant consistent with LinkButton for visual harmony.
 */
function ImageButton({ text, image, altText, icon, className }: ImageButtonProps) {
    return (
        <AlertDialog>
            <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
            >
                <AlertDialogTrigger asChild>
                    <Button
                        variant="outline"
                        size="lg"
                        className={cn(
                            "w-full rounded-xl h-13 px-5 flex items-center transition-all duration-300",
                            "text-sm md:text-base font-medium",
                            "border-border/60 bg-card hover:bg-muted/50 hover:border-primary/20",
                            "shadow-sm hover:shadow-md hover:shadow-primary/5",
                            "cursor-pointer group/link",
                            className
                        )}
                    >
                        {/* Icon section */}
                        {icon && (
                            <div className="flex items-center justify-center shrink-0 w-9 h-9 rounded-lg bg-primary/8 text-primary">
                                <span className="[&>svg]:w-[18px] [&>svg]:h-[18px]">
                                    {icon}
                                </span>
                            </div>
                        )}

                        <span className="flex-1 text-left leading-tight tracking-tight text-foreground">
                            {text}
                        </span>
                    </Button>
                </AlertDialogTrigger>
            </motion.div>

            <AlertDialogContent className="bg-card border-border/40 max-w-[90vw] sm:max-w-md rounded-2xl shadow-2xl shadow-primary/10">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-foreground text-center text-lg font-bold tracking-tight">
                        {text}
                    </AlertDialogTitle>
                    <AlertDialogDescription className="sr-only">
                        {altText}
                    </AlertDialogDescription>
                </AlertDialogHeader>

                {/* Animated Image Reveal */}
                <motion.div 
                    className="flex justify-center py-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <img
                        src={image}
                        alt={altText}
                        className="w-auto max-w-full sm:max-w-87.5 aspect-square object-contain rounded-xl shadow-sm"
                    />
                </motion.div>

                <AlertDialogFooter className="sm:justify-center">
                    <AlertDialogAction className="bg-primary text-primary-foreground hover:bg-primary/85 min-w-30 rounded-xl font-medium">
                        Close
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default ImageButton;