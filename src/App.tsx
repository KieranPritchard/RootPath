"use client"

import { motion } from 'framer-motion';
import { Globe, Download, Share2 } from 'lucide-react';
// Import Simple Icons for GitHub and LinkedIn
import { siGithub} from 'simple-icons';

// Component Imports
import ContentBackground from './components/Background/ContentBackground';
import About from './components/Bio/About';
import PersonalBio from './components/Bio/PersonalBio';
import LinkButton from './components/Buttons/LinkButton';
import DownloadButton from './components/Buttons/DownloadButton';
import ImageButton from './components/Buttons/ImageButton';
import Footer from './components/MainComponents/Footer';

/**
 * SimpleIcon Component: A helper to render Simple Icons as SVGs
 * to ensure they match the sizing of your Lucide icons.
 */
const SimpleIcon = ({ icon }: { icon: any }) => (
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

const buttonData = [
  {
    id: "ctf",
    type: "link",
    text: "CTF Write Ups",
    link: "https://kieranpritchard.github.io/CTF-Showcase/#/",
    icon: <Globe />
  },
  {
    id: "github",
    type: "link",
    text: "View My GitHub",
    link: "https://github.com/KieranPritchard",
    // Integrated Simple Icon for GitHub
    icon: <SimpleIcon icon={siGithub} />
  },
  {
    id: "linkedin",
    type: "link",
    text: "Connect on LinkedIn",
    link: "https://www.linkedin.com/in/kieran-pritchard/",
    // Integrated Simple Icon for LinkedIn
    icon: <Globe />
  },
  {
    id: "cv",
    type: "download",
    text: "Download My C.V",
    file: "", // Ensure path is correct
    fileName: "KieranPritchard-C.V.pdf",
    icon: <Download />
  },
  {
    id: "share",
    type: "image",
    text: "Share with others",
    image: "",
    altText: "QR code to share portfolio",
    icon: <Share2 />
  }
];

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8,
        ease: "easeOut"
      },
    },
  };

  return (
    <div className='min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8 selection:bg-primary/30'>
      <ContentBackground>
        <motion.div 
          className='max-w-7xl mx-auto w-full flex flex-col gap-12 py-12'
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <section className="w-full">
            <PersonalBio />
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <About />
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="space-y-1 px-2">
                  <h3 className="text-xl font-bold tracking-tight text-foreground">Quick Links</h3>
                  <div className="h-1 w-12 bg-primary rounded-full" />
                </div>
                
                <div className="flex flex-col gap-3">
                  {buttonData.map((item) => (
                    <motion.div 
                      key={item.id} 
                      variants={{ 
                        hidden: { opacity: 0, x: 10 }, 
                        visible: { opacity: 1, x: 0 } 
                      }}
                    >
                      {item.type === "link" && (
                        <LinkButton text={item.text} link={item.link!} icon={item.icon} />
                      )}
                      {item.type === "download" && (
                        <DownloadButton 
                          text={item.text} 
                          file={item.file!} 
                          fileName={item.fileName!} 
                          // Passing icon to DownloadButton
                          icon={item.icon} 
                        />
                      )}
                      {item.type === "image" && (
                        <ImageButton 
                          text={item.text} 
                          image={item.image!} 
                          altText={item.altText!} 
                          // Passing icon to ImageButton
                          icon={item.icon}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
            </div>
          </div>
        </motion.div>
      </ContentBackground>

      <Footer />
    </div>
  );
}