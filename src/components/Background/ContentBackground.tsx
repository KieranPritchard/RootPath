import { Card } from "@/components/ui/card";
import React from "react";

interface ContentBackgroundProps {
    children: React.ReactNode;
}

function ContentBackground({ children }: ContentBackgroundProps) {
    return (
        <>
            {/* Using Card component for the container while maintaining original layout and custom background */}
            <Card className="xl:h-[95vh] xl:flex xl:justify-center m-4 p-12 rounded-2xl">
                {children}
            </Card>
        </>
    );
}

export default ContentBackground;