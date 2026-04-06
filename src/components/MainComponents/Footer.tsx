import { cn } from "@/lib/utils";

interface FooterProps {
    className?: string;
}

function Footer({ className }: FooterProps) {
    return (
        <footer className={cn(
            "w-full max-w-7xl mx-auto px-4 py-8 mt-12 border-t border-muted/30 text-center",
            className
        )}>
            {/* Primary Copyright - Using theme-aware muted text */}
            <p className="text-sm md:text-base font-medium text-muted-foreground tracking-tight">
                &copy; 2026 Kieran Pritchard. All rights reserved.
            </p>
            
            {/* Secondary Disclaimer - Slightly smaller for better hierarchy */}
            <p className="text-xs md:text-sm text-muted-foreground opacity-60 mt-1 leading-relaxed">
                All copyrighted materials are the property of their respective owners.
            </p>
        </footer>
    );
}

export default Footer;