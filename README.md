# Tarot Reader ✦

An interactive web-based tarot card reading game featuring the 22 Major Arcana cards with detailed meanings, symbolism, and historical context.

## Features

- **Three Spread Types**:
  - Single Card Reading - Quick daily guidance
  - Past • Present • Future - Three-card spread for deeper insight
  - Problem • Solution - Navigate challenges with clarity

- **22 Major Arcana Cards**: From The Fool (0) to The World (XXI)

- **Upright & Reversed Meanings**: Each card has unique interpretations based on orientation

- **Detailed Card Information**:
  - Contextualized interpretations based on spread position
  - Full upright and reversed meanings
  - Symbolism explanations
  - Historical context and evolution
  - Keywords for quick reference

- **Beautiful Design**:
  - Mystical purple and gold color scheme
  - Smooth animations and transitions
  - Fully responsive (mobile, tablet, desktop)
  - CSS-based placeholder cards

## How to Use

1. **Visit the site** (once deployed to GitHub Pages)
2. **Click "Begin Your Reading"**
3. **Choose a spread type** from the three options
4. **Click card slots** to draw cards from the shuffled deck
5. **Click any drawn card** to view detailed information with tabs:
   - **Meaning**: Interpretation, full meaning, and keywords
   - **Symbolism**: Visual symbols and their significance
   - **History**: Origins and cultural context
6. **Shuffle Again** or start a **New Reading** anytime

## Technology Stack

- Pure HTML5, CSS3, and JavaScript (ES6+)
- No frameworks or build tools required
- Google Fonts: Cinzel (serif) and Raleway (sans-serif)
- Static site - perfect for GitHub Pages

## Local Development

Simply open `index.html` in your browser, or run a local server:

```bash
# Using Python
python3 -m http.server 8000

# Then visit http://localhost:8000
```

## Project Structure

```
/
├── index.html       # Main HTML structure
├── cards.js         # 22 Major Arcana card data
├── game.js          # Game logic and interactions
├── style.css        # Styling and animations
├── CLAUDE.md        # Developer guidance
└── README.md        # This file
```

## Future Enhancements

- Add all 56 Minor Arcana cards
- Replace CSS cards with Rider-Waite images
- Add reading history (localStorage)
- Celtic Cross spread
- Share reading functionality
- Print reading option

## License

This project is open source. Card meanings are based on traditional Rider-Waite-Smith interpretations.

---

**Enjoy your reading!** 🔮
