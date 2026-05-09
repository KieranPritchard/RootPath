# 🌿 RootPath

A professional, desktop-optimized web application built with a modular React architecture and responsive grid system. Originally conceived as a simple link-in-bio clone, RootPath evolved into a high-performance personal web platform.

## 🚀 Overview

RootPath began as a project called Linknest, intended to serve as a basic link-in-bio tool. Over time, it was completely reimagined and rebuilt into a scalable, design-driven web application.

The project is built on three core pillars:

* Responsive Grid Engineering
* Custom Branding Engine
* Modular Component Architecture

## 🎯 Key Features

Desktop-first responsive layout using horizontal grid systems
* Fully modular React component structure
* Custom theming with dark mode browser integration
* Reusable UI components (e.g., universal file download button)
* Clean UX with progressive disclosure patterns
* Optimized performance and maintainability (DRY principles)

## 🧠 Design Philosophy

### 🖥️ Desktop-First Approach

RootPath prioritizes large-screen usability by implementing a horizontal grid layout, creating a landing-page feel on wider displays while maintaining mobile responsiveness.
### 🧩 Modular Architecture
The codebase follows an atomic design structure, organizing components into scalable directories such as:
```
/components
  /Backgrounds
  /Bio
  /Buttons
```

This ensures maintainability and ease of expansion.

### 🔁 DRY Principles

Redundant logic was consolidated across components, particularly in the Biography section, reducing file size and improving clarity.

### 🎨 UI/UX Decisions

Transitioned from initial Figma designs to a centered layout for better visual balance
Introduced Progressive Disclosure by moving secondary elements (e.g., QR code) into dropdowns
Refactored key UI elements like the Download CV button into reusable components

### 🔧 Technical Highlights

- Refactored App.jsx into a cleaner, component-driven structure
- Implemented theme-color meta tag fix for seamless mobile browser UI integration
- Built reusable components to support scalability and consistency

### 🌱 Evolution & Rebranding
The project was rebranded from Linknest to RootPath, reflecting a hacker-inspired concept of giving users “root access” to a digital identity and professional presence.

## 🌍 Deployment
The application is deployed using GitHub Pages for:
- Live testing
- Easy accessibility
- Community feedback

## 🛠️ Tech Stack
- React.js
- Tailwind CSS
- GitHub Pages

## 📌 Future Improvements
- Enhanced theming engine
- Additional modular components
- Performance optimizations
- Analytics integration
