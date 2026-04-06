import React from "react";

interface FooterProps {}

function Footer({}: FooterProps) {
    return (
        <footer className="text-center text-lg mt-4 text-[#1f2933] dark:text-[#f0f4f8]">
            {/* Updated to current year 2026 */}
            <p>&copy; 2026 Kieran Pritchard. All rights reserved.</p>
            <p className="text-sm opacity-80 mt-1">
                All copyrighted materials are the property of their respective owners.
            </p>
        </footer>
    );
}

export default Footer;