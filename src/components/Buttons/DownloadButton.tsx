import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadButtonProps {
    file: string;
    fileName: string;
    text: string;
}

// Function to allow users to download a file
function DownloadButton({ file, fileName, text }: DownloadButtonProps) {
  // Returns a download link using the props, styled with shadcn Button primitives
    return (
        <Button
        asChild
        className="relative flex items-center justify-between bg-[#2a3c4b] dark:bg-[#a9d6e5] text-[#f9fafb] dark:text-[#0d1b2a] border-[#2a3c4b] dark:border-[#a9d6e5] hover:text-[#2a3c4b] dark:hover:text-[#a9d6e5] min-h-[70px] md:h-22 w-full rounded-xl text-lg md:text-xl border-2 my-2 hover:bg-transparent transition-colors duration-300 ease-in-out px-4"
        >
            <a href={file} download={fileName}>
                {/* Icon on the far left using Lucide */}
                <span className="flex items-center">
                    <Download className="w-8 h-8 md:w-10 md:h-10" />
                </span>

                {/* Text centered */}
                {/* Added max-width and text-center to handle long file names on mobile */}
                <span className="absolute left-1/2 transform -translate-x-1/2 w-max max-w-[65%] text-center leading-tight whitespace-normal">
                    {text}
                </span>

                {/* Empty span to maintain 'justify-between' symmetry */}
                <span className="w-8 md:w-10"></span>
            </a>
        </Button>
    );
}

export default DownloadButton;