"use client"

import { useEffect, useState } from "react";

// Imports the animations library
import type { Variants } from "framer-motion";
import { motion } from 'framer-motion';

// Component Imports
import Container from "./components/layout/Container";
import Summary from './components/layout/Summary';
import Header from './components/layout/Header';
import LinkButton from './features/links/components/LinkButton';
import DownloadButton from './features/links/components/DownloadButton';
import ImageButton from "./features/links/components/ImageButton";
import Footer from './components/layout/Footer';

// Links config — edit src/links.tsx to add/remove/reorder links
import { loadLinks } from './links';
import type { LinkItem } from "./features/links/types/link-item";

export default function App() {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [linksError, setLinksError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    void loadLinks()
      .then((loadedLinks) => {
        if (active) setLinks(loadedLinks);
      })
      .catch((error: unknown) => {
        if (!active) return;
        const message = error instanceof Error ? error.message : "Could not load links.";
        setLinksError(message);
      });

    return () => {
      active = false;
    };
  }, []);

  // Stores the animations for the containers
  const containerVariants: Variants = {
    // Stores the animations for when its hidden
    hidden: { opacity: 0, y: 20 },
    // Runs the changes when visible
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

  // Stores the item animation variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* Swaps the content in a full lenght background */}
      <div className='h-dvh overflow-hidden bg-background py-2 px-3 sm:px-6 lg:px-8 selection:bg-primary/20 selection:text-primary flex items-center justify-center'>
        {/* Stores the background for all of the content */}
        <Container>

          {/* Container which will run the animations */}
          <motion.div 
            className='max-w-7xl mx-auto w-full flex flex-col gap-6'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Stores the personal bito section */}
            <section className="w-full">
              <Header />
            </section>

            {/* Stores the bottom parr of the grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-8 items-start">
              {/* Stors the about section */}
              <div className="lg:col-span-7">
                <Summary />
              </div>

              {/* Stores the links section */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                  {/* Section Label — portfolio "- SECTION" pattern */}
                  <div className="hidden md:block space-y-1 px-1">
                    {/* Links header */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-4 h-0.5 bg-primary rounded-full" />
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                        Quick Links
                      </span>
                    </div>
                  </div>
                  
                  {/* Iterates over the links and renders them — capped to show ~4 buttons before scrolling */}
                  <div className="flex flex-col gap-2 max-h-62 overflow-y-auto pr-2 pb-1 custom-scrollbar">
                    {linksError && (
                      <p className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                        {linksError}
                      </p>
                    )}
                    {links.map((item) => (
                      <motion.div key={item.id} variants={itemVariants}>
                        {item.type === "link" && (
                          <LinkButton text={item.text} link={item.link} icon={item.icon} />
                        )}
                        {item.type === "download" && (
                          <DownloadButton 
                            text={item.text} 
                            file={item.file} 
                            fileName={item.fileName} 
                            icon={item.icon} 
                          />
                        )}
                        {item.type === "image" && (
                          <ImageButton 
                            text={item.text} 
                            image={item.image} 
                            altText={item.altText} 
                            icon={item.icon}
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
              </div>
            </div>
          </motion.div>

          {/* Footer now lives inside ContentBackground, stacked naturally after the main content */}
          <Footer />
        </Container>
      </div>
    </>
  );
}