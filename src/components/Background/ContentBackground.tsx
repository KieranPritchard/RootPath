import { Card } from "@/components/ui/card";
import React from "react";

// Stores the types for the props
interface ContentBackgroundProps {
    children: React.ReactNode;
}

function ContentBackground({ children }: ContentBackgroundProps) {
    return (
        <Card className="w-full max-w-6xl max-h-[92dvh] overflow-y-auto m-2 md:m-4 p-8 md:p-12 rounded-2xl border-border/40 shadow-lg shadow-primary/5">
            {children}
        </Card>
    );
}

export default ContentBackground;