import { Card } from "@/components/ui/card";
import React from "react";

interface ContentBackgroundProps {
    children: React.ReactNode;
}

function ContentBackground({ children }: ContentBackgroundProps) {
    return (
        <>
            {/* Portfolio-style card container: white card on blue-gray background */}
            <Card className="xl:min-h-[95vh] xl:flex xl:justify-center m-2 md:m-4 p-8 md:p-12 rounded-2xl border-border/40 shadow-lg shadow-primary/5">
                {children}
            </Card>
        </>
    );
}

export default ContentBackground;