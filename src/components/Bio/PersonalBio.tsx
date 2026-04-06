"use client"

import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface PersonalBioProps {
    className?: string;
}

function PersonalBio({ className }: PersonalBioProps) {
    return (
        <div className={cn(
            "flex flex-col justify-center items-center gap-8 lg:gap-12 lg:flex-row px-4 md:px-0 mb-10", 
            // Removed overflow-hidden to prevent text clipping
            className
        )}>
            {/* Profile Image */}
            <motion.div 
                className='flex justify-center shrink-0'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Avatar className="w-48 h-48 md:w-64 md:h-64 shadow-2xl border-4 border-background">
                    <AvatarImage 
                        src="/kieran-pritchard.jpg" 
                        alt="Kieran Pritchard" 
                        className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <AvatarFallback className="text-2xl bg-muted text-muted-foreground">KP</AvatarFallback>
                </Avatar>
            </motion.div>

            {/* Text Content */}
            <motion.div 
                className="flex flex-col justify-center text-foreground w-full lg:text-left max-w-full"
                initial={{ opacity: 0, y: 20 }} // Changed x: 30 to y: 20 to keep it within horizontal bounds
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <div className="space-y-2">
                    {/* Added break-words to ensure long names wrap on small mobile screens */}
                    <h1 className='scroll-m-20 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight wrap-break-word'>
                        Kieran Pritchard
                    </h1>
                    <motion.div 
                        className="h-1.5 bg-primary rounded-full mx-0" 
                        initial={{ width: 0 }}
                        whileInView={{ width: 120 }}
                        transition={{ delay: 0.6, duration: 1 }}
                    />
                </div>

                <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mt-6 text-muted-foreground'>
                    T-Level Student
                </h2>
            </motion.div>
        </div>
    );
}

export default PersonalBio;