import React from "react";

interface BiographyProps {}

function About({}: BiographyProps) {
    return (
        <div className="flex flex-col justify-start gap-6 lg:gap-10 lg:flex-row px-4 md:px-0">
            {/* Spacer columns maintained for original layout structure */}
            <div className="w-64 flex-shrink-0 hidden lg:block"></div> 

            {/* Content column utilizing shadcn-style typography scales */}
            <div className="flex flex-col text-white">
                <h3 className="scroll-m-20 text-2xl font-bold tracking-tight mb-2">About Me:</h3>
                
                {/* Fixed: Adjusted text size for mobile and added better color contrast for light mode */}
                <p className="leading-relaxed text-base md:text-lg text-[#1B2B41] dark:text-[#f9fafb]">
                    T Level Software Development student at BPC and aspiring ethical hacker. 
                    Driven by a hands-on approach to cybersecurity, 
                    I thrive on tackling technical challenges and building security 
                    solutions through direct project experience.
                </p>
            </div>

            <div className="w-64 flex-shrink-0 hidden lg:block"></div> 
        </div>
    );
}

export default About;