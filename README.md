# Aurora OS.js [![Version](https://img.shields.io/badge/Version-v0.6.2--patch-blue)](https://github.com/mental-os/Aurora-OS.js) [![GitHub Pages](https://github.com/mental-os/Aurora-OS.js/actions/workflows/deploy.yml/badge.svg)](https://github.com/mental-os/Aurora-OS.js/actions/workflows/deploy.yml) [![Dependabot](https://github.com/mental-os/Aurora-OS.js/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/mental-os/Aurora-OS.js/actions/workflows/dependabot/dependabot-updates) [![Build](https://github.com/mental-os/Aurora-OS.js/actions/workflows/ci.yml/badge.svg)](https://github.com/mental-os/Aurora-OS.js/actions/workflows/ci.yml)

A modern, web-based desktop operating system interface built with React, Tailwind CSS, and Radix UI.

## Features

- **Desktop Environment**: Fully functional desktop with draggable windows, dock, and menu bar.
- **Window Management**: Minimize, maximize, close, and focus management with smooth animations.
- **Virtual Filesystem**: Linux-inspired filesystem (`/bin`, `/etc`, `/home`, etc.) with persistence.
- **App Ecosystem**:
  - **Finder**: File system navigation and management.
  - **Terminal**: Linux-style command line with `ls`, `cd`, `pwd`, `cat`, `mkdir`, `rm`, and launching apps from CLI.
  - **Settings**: System configuration (Appearance, Accent Colors, Blur effects, Performance).
  - **Music, Messages, Photos**: Interactive media and communication apps.
- **Persistence**:
  - **Settings**: Colors, themes, and performance preferences saved across sessions.
  - **Filesystem**: All files and directories persist to localStorage.
  - **Desktop Icons**: Icon positions are remembered.
  - **App State**: Individual apps remember their state (sidebar, volume, etc.).
- **Customization**:
  - **Dark/Light Mode**: System-wide theme switching.
  - **Accent Colors**: Dynamic system accent colors with "2025" palette.
  - **Blur & Transparency**: Toggleable glassmorphism effects.

## Tech Stack

- **Framework**: React 19 (Vite 7)
- **Styling**: Tailwind CSS
- **UI Primitives**: Radix UI
- **Icons**: Lucide React
- **Animation**: Motion (Framer Motion)
- **Testing**: Vitest

## Getting Started

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Start the development server:
    ```bash
    npm run dev
    ```

3.  Build for production:
    ```bash
    npm run build
    ```

### Testing
This project uses **Vitest** for unit & integration testing.
```bash
npm test
```

## Release Notes

## v0.6.2-patch2
- **Unified Desktop Aesthetics**: Removed unselected "pill" backgrounds from Desktop icons and aligned text truncation with Finder (single-line).
- **Window Focus UX**: Enabled "Click to Focus" on window content while restricting drag operations to the title bar.
- **Scroll Regressions**: Fixed scrolling issues in Settings, Photos, and Browser apps caused by template refactors.
- **Performance**: Refactored File System logic into utilities and implemented debounced persistence to prevent UI stuttering.

[View full version history](HISTORY.md)

## License

Not yet available

## AI disclosure

"Aurora OS" is a human-writen project that makes use of AI-powered IDE's to generate documentation, GitHub integrations, bug testing, and roadmap tracking.
