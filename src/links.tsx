/**
 * ═══════════════════════════════════════════════════
 *  LINKS CONFIG — Add, remove, or reorder links here
 * ═══════════════════════════════════════════════════
 *
 *  Each entry needs:
 *    - id:       Unique identifier (used as React key)
 *    - type:     "link" | "download" | "image"
 *    - text:     Button label
 *    - icon:     JSX icon element (Lucide, SimpleIcons, etc.)
 *
 *  Type-specific fields:
 *    link:       { link: "https://..." }
 *    download:   { file: importedFile, fileName: "name.pdf" }
 *    image:      { image: importedImage, altText: "description" }
 */

import { Globe, Download, Share2 } from "lucide-react";
import { siGithub } from "simple-icons";
import { FaLinkedin } from "react-icons/fa";

// Assets — import any files you need here
import CV from "/kieran_pritchard_cv.pdf";
import ScanCode from "/qr_code.webp";

// Helper to render Simple Icons as inline SVGs
const SimpleIcon = ({ icon }: { icon: { path: string } }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={icon.path} />
  </svg>
);

// ─────────────────────────────────────────────
//  Edit this array to manage your links
// ─────────────────────────────────────────────

export type LinkItem =
  | { id: string; type: "link"; text: string; icon: React.ReactNode; link: string }
  | { id: string; type: "download"; text: string; icon: React.ReactNode; file: string; fileName: string }
  | { id: string; type: "image"; text: string; icon: React.ReactNode; image: string; altText: string };

export const links: LinkItem[] = [
  {
    id: "ctf",
    type: "link",
    text: "CTF Write Ups",
    link: "https://kieranpritchard.github.io/CTF-Showcase/#/",
    icon: <Globe />,
  },
  {
    id: "github",
    type: "link",
    text: "View My GitHub",
    link: "https://github.com/KieranPritchard",
    icon: <SimpleIcon icon={siGithub} />,
  },
  {
    id: "linkedin",
    type: "link",
    text: "Connect on LinkedIn",
    link: "https://www.linkedin.com/in/kieran-pritchard/",
    icon: <FaLinkedin />,
  },
  {
    id: "cv",
    type: "download",
    text: "Download My C.V",
    file: CV,
    fileName: "KieranPritchard-C.V.pdf",
    icon: <Download />,
  },
  {
    id: "share",
    type: "image",
    text: "Share with others",
    image: ScanCode,
    altText: "QR code to share portfolio",
    icon: <Share2 />,
  },

  // ── Add new links below this line ──────────
  // Example:
  // {
  //   id: "portfolio",
  //   type: "link",
  //   text: "My Portfolio",
  //   link: "https://www.kpritchard.co.uk",
  //   icon: <Globe />,
  // },
];
