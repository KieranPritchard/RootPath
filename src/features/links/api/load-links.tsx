import { Globe, Download, Share2, UserCircle, Pen } from "lucide-react";
import { siGithub } from "simple-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"

// Assets — import any files you need here
import CV from "/kieran_pritchard_cv.pdf";
import ScanCode from "/qr-code.png";

// Types and Ultilities
import type { LinkItem } from "@/features/links/types/link-item";
import { SimpleIcon } from "@/lib/simple-icon";

type LinkConfig =
  | { id: string; type: "link"; text: string; link: string; icon: string }
  | { id: string; type: "download"; text: string; file: string; fileName: string; icon: string }
  | { id: string; type: "image"; text: string; image: string; altText: string; icon: string };

const iconComponents: Record<string, React.ReactNode> = {
  Globe: <Globe />,
  Download: <Download />,
  Share2: <Share2 />,
  UserCircle: <UserCircle />,
  Pen: <Pen />,
  Github: <SimpleIcon icon={siGithub} />,
  Linkedin: <FaLinkedin />,
  X: <FaXTwitter />,
};

function publicUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

export async function loadLinks(): Promise<LinkItem[]> {
  const response = await fetch(`${import.meta.env.BASE_URL}links.json`);
  if (!response.ok) {
    throw new Error(`Could not load links.json (HTTP ${response.status})`);
  }

  const config: unknown = await response.json();
  if (!Array.isArray(config)) {
    throw new Error("links.json must contain an array");
  }

  return (config as LinkConfig[]).map((item): LinkItem => {
    const icon = iconComponents[item.icon] ?? <Globe />;

    if (item.type === "link") {
      return { ...item, icon };
    }

    if (item.type === "download") {
      return {
        ...item,
        icon,
        file: publicUrl(item.file || CV),
      };
    }

    return {
      ...item,
      icon,
      image: publicUrl(item.image || ScanCode),
    };
  });
}
