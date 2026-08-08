"use client"


import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Stores the types for the props
interface AboutProps {
    className?: string;
}

function About({ className }: AboutProps) {
    // Animation variants matching portfolio's staggered reveal
    const textVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        },
    };

    return (
        <>
            {/* Animation container for the about section */}
            <motion.div 
                className={cn("hidden lg:flex flex-col gap-3", className)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Section Label — portfolio "- SECTION" pattern */}
                <motion.div className="space-y-1" variants={textVariants}>
                    <div className="flex items-center gap-2.5">
                        <div className="w-4 h-0.5 bg-primary rounded-full" />
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                            About Me
                        </span>
                    </div>
                </motion.div>

                {/* Section Heading with Animated Divider */}
                <motion.div className="space-y-2" variants={textVariants}>
                    <h3 className="scroll-m-20 text-xl md:text-2xl font-bold tracking-tight text-foreground leading-tight">
                        Learning by breaking things.
                    </h3>
                    <motion.div 
                        className="h-1 bg-primary rounded-full" 
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    />
                </motion.div>
                
                {/* Biography Content */}
                <motion.div 
                    className="space-y-2.5 text-sm leading-relaxed text-muted-foreground"
                    variants={textVariants}
                >
                    <p>
                        I'm a T Level Software Development student at Bournemouth & Poole College, currently working as 1st Line IT Support alongside it. 
                        I build software and study how to break it — CTFs, self-hosted lab work, offensive security fundamentals — because writing code with a real sense of where it'd fail makes it better code.
                    </p>
                    <p>
                        My focus splits two ways: full-stack development (Node.js, React, Next.js) and security tooling (Go, Python, Linux). 
                        Most people specialise in one side of that split. I'm building fluency in both, on the idea that the two disciplines sharpen each other more than either one does alone.
                    </p>
                </motion.div>
            </motion.div>
        </>
    );
}

export default About;