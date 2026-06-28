"use client"

// Imports the animations library
import type { Variants } from "framer-motion";
import { motion } from 'framer-motion';

// Component Imports
import ContentBackground from './components/Background/ContentBackground';
import About from './components/Bio/About';
import PersonalBio from './components/Bio/PersonalBio';
import LinkButton from './components/Buttons/LinkButton';
import DownloadButton from './components/Buttons/DownloadButton';
import ImageButton from './components/Buttons/ImageButton';
import Footer from './components/MainComponents/Footer';

// Links config — edit src/links.tsx to add/remove/reorder links
import { links } from './links';

export default function App() {

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
      <div className='min-h-screen bg-background py-2 px-3 sm:px-6 lg:px-8 selection:bg-primary/20 selection:text-primary'>
        {/* Stores the background for all of the content */}
        <ContentBackground>

          {/* Container which will run the animations */}
          <motion.div 
            className='max-w-7xl mx-auto w-full flex flex-col gap-10 py-10'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Stores the personal bito section */}
            <section className="w-full">
              <PersonalBio />
            </section>

            {/* Stores the bottom parr of the grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-14 items-start">
              {/* Stors the about section */}
              <div className="lg:col-span-7">
                <About />
              </div>

              {/* Stores the links section */}
              <div className="lg:col-span-5 flex flex-col gap-5">
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
                  
                  {/* Iterates over the linsk adn renders them */}
                  <div className="flex flex-col gap-2.5 max-h-[60vh] lg:max-h-77 overflow-y-auto pr-2 pb-2 custom-scrollbar">
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
        </ContentBackground>
        <Footer />
      </div>
    </>
  );
}