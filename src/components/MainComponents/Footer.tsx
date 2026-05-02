import { cn } from "@/lib/utils";

interface FooterProps {
    className?: string;
}

function Footer({ className }: FooterProps) {
    return (
        <footer className={cn(
            "w-full max-w-7xl mx-auto px-4 py-6 mt-8 text-center",
            className
        )}>
            {/* Primary Copyright — muted to not compete with content */}
            <p className="text-xs md:text-sm font-medium text-muted-foreground/70 tracking-tight">
                &copy; 2026 Kieran Pritchard. All rights reserved.
            </p>
            
            {/* Secondary — portfolio-style subtle tagline */}
            <p className="text-xs text-muted-foreground/40 mt-1 leading-relaxed">
                Built with React + Tailwind + Shadcn
            </p>
        </footer>
    );
}

export default Footer;