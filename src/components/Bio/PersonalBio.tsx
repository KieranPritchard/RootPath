"use client"

import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

// Stores the types for the props
interface PersonalBioProps {
    className?: string;
}

function PersonalBio({ className }: PersonalBioProps) {
    return (
        <>
            <div className={cn(
                "flex flex-col justify-center items-center gap-4 lg:gap-8 lg:flex-row px-4 md:px-0 mb-3", 
                className
            )}>
                {/* Profile Image — circular with blue ring accent like portfolio */}
                <motion.div 
                    className='flex justify-center shrink-0'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Displays the image of me */}
                    <Avatar className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 shadow-2xl shadow-primary/10 border-4 border-primary/15 ring-2 ring-primary/5 ring-offset-2 ring-offset-card">
                        <AvatarImage 
                            src="kieran-pritchard.jpg" 
                            alt="Kieran Pritchard" 
                            className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <AvatarFallback className="text-2xl bg-muted text-muted-foreground">KP</AvatarFallback>
                    </Avatar>
                </motion.div>

                {/* Text Content — bold heading + accent bar matching portfolio style */}
                <motion.div 
                    className="flex flex-col justify-center text-foreground w-full lg:text-left max-w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="space-y-1.5">
                        <h1 className='scroll-m-20 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.1] wrap-break-word'>
                            Kieran Pritchard
                        </h1>
                        <motion.div 
                            className="h-1 bg-primary rounded-full mx-0" 
                            initial={{ width: 0 }}
                            whileInView={{ width: 60 }}
                            transition={{ delay: 0.6, duration: 1 }}
                        />
                    </div>

                    <h2 className='text-sm md:text-base lg:text-lg font-medium tracking-tight mt-2 text-muted-foreground'>
                        Ethical Hacker & Software Developer
                    </h2>
                </motion.div>
            </div>
        </>
    );
}

export default PersonalBio;