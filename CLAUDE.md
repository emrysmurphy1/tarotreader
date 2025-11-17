# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Tarot Reader** - An interactive web-based tarot card reading game featuring the 22 Major Arcana cards. Users can choose from three different spread types, draw cards with random orientations (upright/reversed), and explore detailed meanings, symbolism, and history for each card.

## Development Commands

### Setup
```bash
# No build process required - this is a static website
# Simply clone the repository and open index.html in a browser
```

### Running the Application
```bash
# Development mode (local)
# Open index.html in your browser, or use a simple HTTP server:
python3 -m http.server 8000
# Then visit http://localhost:8000

# Production
# Deploy to GitHub Pages or any static hosting service
```

## Architecture

### High-Level Structure
Single-page application (SPA) using vanilla JavaScript with section-based navigation. No build tools or frameworks required - pure HTML/CSS/JavaScript for maximum compatibility and simplicity.

### Key Components
- **index.html**: Main HTML structure with all sections (landing, selection, game, modal)
- **cards.js**: Card data for 22 Major Arcana with meanings, symbolism, history, and keywords
- **game.js**: Game logic including deck shuffling, card drawing, modal system, and state management
- **style.css**: Mystical purple/gold themed styling with responsive design

### Data Flow
1. User lands on welcome page
2. Clicks "Begin Your Reading" → navigates to spread selection
3. Chooses spread type (Single, 3-card, or Problem/Solution) → initializes game
4. Deck is shuffled using Fisher-Yates algorithm
5. User clicks card slots to draw cards with random orientation
6. Clicking drawn cards opens detailed modal with tabbed information
7. User can shuffle again or start a new reading

### Technology Stack
- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: Google Fonts (Cinzel, Raleway)
- **Backend**: None (static site)
- **Database**: None (all data in cards.js)
- **Hosting**: GitHub Pages

## Project-Specific Conventions

### File Organization
```
/
├── index.html       # Main HTML with all sections
├── cards.js         # Card data array and spread configurations
├── game.js          # Game logic and event handlers
├── style.css        # All styling and animations
└── CLAUDE.md        # This file
```

### Code Style
- Use ES6+ JavaScript features (const/let, arrow functions, template literals)
- CSS uses custom properties (CSS variables) for theming
- Event handlers attached via onclick attributes for simplicity
- Comments used sparingly - code should be self-documenting

### State Management
Global `gameState` object tracks:
- Current spread type
- Shuffled deck array
- Drawn cards with positions and orientations
- Current card index

## Important Notes

- **22 Major Arcana Only**: This version includes only the Major Arcana (The Fool through The World). Minor Arcana cards (56 additional cards) are not included.
- **Placeholder Cards**: Cards are rendered using CSS with card names and numbers. Real Rider-Waite images can be added later by simply updating the card rendering function.
- **No Backend**: All functionality is client-side. No data is saved between sessions.
- **GitHub Pages Compatible**: Pure static site with no build process required.

## External Dependencies

- **Google Fonts**: Cinzel (serif) and Raleway (sans-serif) loaded via CDN
- No other external dependencies
