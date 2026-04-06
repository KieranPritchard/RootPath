import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ImageDropDownButtonProps {
    text: string;
    image: string;
    altText: string;
}

// Button which features a image drop down - Converted to Alert Dialog
function ImageDropDownButton({ text, image, altText }: ImageDropDownButtonProps) {
    return (
        <AlertDialog>
            {/* Trigger button using your original styling */}
            <AlertDialogTrigger asChild>
                <div className="flex flex-col items-center justify-center bg-[#2a3c4b] dark:bg-[#a9d6e5] text-[#f9fafb] dark:text-[#0d1b2a] border-[#2a3c4b] dark:border-[#a9d6e5] hover:text-[#2a3c4b] dark:hover:text-[#a9d6e5] w-full rounded-xl border-2 text-lg my-2 hover:bg-transparent transition-all duration-300 ease-in-out px-4 cursor-pointer min-h-[70px] md:h-22">
                    {/* uses text props */}
                    <p className="text-body transition-all duration-300 ease-in-out text-lg md:text-xl text-center">
                        {text}
                    </p>
                </div>
            </AlertDialogTrigger>

            <AlertDialogContent className="bg-[#f9fafb] dark:bg-[#1B2B41] border-none max-w-[90vw] sm:max-w-[450px]">
                <AlertDialogHeader>
                <AlertDialogTitle className="text-[#1B2B41] dark:text-[#f9fafb] text-center">
                    {text}
                </AlertDialogTitle>
                    <AlertDialogDescription className="sr-only">
                        {altText}
                    </AlertDialogDescription>
                </AlertDialogHeader>

                {/* Image container inside the dialog */}
                <div className="flex justify-center py-4">
                <img
                    src={image}
                    alt={altText}
                    className="w-auto max-w-full sm:max-w-[350px] aspect-square object-contain transition-all duration-300"
                />
                </div>

                <AlertDialogFooter>
                    <AlertDialogAction className="bg-[#2a3c4b] dark:bg-[#a9d6e5] text-[#f9fafb] dark:text-[#0d1b2a] hover:opacity-90">
                        Close
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default ImageDropDownButton;