"use client"

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
        <motion.div 
            className={cn("hidden lg:flex flex-col gap-5", className)}
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
            <motion.div className="space-y-3" variants={textVariants}>
                <h3 className="scroll-m-20 text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-tight">
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
                className="space-y-4 text-base leading-relaxed text-muted-foreground"
                variants={textVariants}
            >
                <p>
                    I am a <span className="text-foreground font-medium">T Level Software Development student</span> at BPC and an aspiring ethical hacker. 
                    Driven by a hands-on approach to cybersecurity, I thrive on tackling technical challenges 
                    and building security solutions through direct project experience.
                </p>
                <p>
                    My focus lies in bridging the gap between robust software development and offensive security, 
                    ensuring that the digital solutions of tomorrow are built with a "security-first" mindset.
                </p>
            </motion.div>
        </motion.div>
    );
}

export default About;