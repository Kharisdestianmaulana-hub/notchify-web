# Notchify Web

Official landing page and interactive showcase website for [Notchify](https://github.com/Kharisdestianmaulana-hub/notchify) — The Dynamic Island utility built for macOS.

## Features

- **Interactive MacBook Notch Simulator**: 60fps spring-physics animation showcasing Resting, Music with synced lyrics, Clipboard manager, File Dropzone, Pomodoro Timer, and System Hardware Monitor.
- **Cardless Editorial Design**: Apple & Linear-inspired minimalist typography with hairline dividers.
- **Bilingual Support (EN / ID)**: Instant language switching without full page reloads.
- **Automated GitHub Releases Detection**: Auto-detects public `.dmg` releases and activates the download button dynamically.
- **Zero JS by default**: Blazing fast static site powered by Astro 5 and Tailwind CSS.

## Tech Stack

- **Framework**: [Astro 5](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Font Stack**: Geist & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ (tested on Node v24)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Kharisdestianmaulana-hub/notchify-web.git
cd notchify-web

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## License

Distributed under the [MIT License](https://github.com/Kharisdestianmaulana-hub/notchify/blob/main/LICENSE).
