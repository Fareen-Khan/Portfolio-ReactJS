# Fareen Khan – Portfolio Website

A single-page, dark-mode portfolio built with React, Vite, TypeScript and Tailwind CSS. It features a sticky sidebar, scrollable main content, a custom mouse spotlight effect, and live “Now Playing” data pulled from the Stats.fm API.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  

---

## Features

- **Responsive Design**  
  On small screens everything stacks vertically; on large screens you get a two-column layout with a sticky sidebar and independently scrollable content.

- **Dark Mode**  
  Dark theme enabled by default, with CSS custom properties for easy theming.

- **Spotify Now-Playing**  
  Fetches your current or most-recent track from the Stats.fm API and cross-fades smoothly on change.

- **Dynamic Projects & Work**  
  Pulls project and work entries from Firestore, ordered newest → oldest.

- **Custom Mouse Spotlight**  
  A radial “spotlight” follows your cursor, revealing a dotted background pattern.

---

## Tech Stack

- **Framework:** Vite + React + TypeScript  
- **Styling:** Tailwind CSS + shadcn/ui components  
- **State & Data:** Firestore (Firebase) for Projects & Work; Stats.fm API for Spotify  
- **Build & Deploy:** Vercel (or any static-hosting)  
- **Animations & Effects:** CSS custom properties, React hooks


