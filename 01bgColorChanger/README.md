# Background Color Changer

A simple web application that allows users to change the background color of the page by clicking color buttons or a "Magic" button that generates a random color with a confetti effect.

## Features

- Change background color by selecting predefined color buttons
- "Magic" button generates a random hex color and triggers a confetti animation
- Interactive and visually appealing UI

## Project Structure

```
01bgColorChanger/
├── index.html
├── src/
│   ├── main.js
│   └── style.css
└── README.md
```

## Getting Started

### Prerequisites

- A modern web browser

### Usage

1. Open `index.html` in your browser.
2. Click any color button to change the background to that color.
3. Click the "Magic" button to generate a random background color and see a confetti animation.

## How It Works

- **Color Buttons:** Each button has a `data-color` attribute. Clicking a button sets the background color to the specified value.
- **Magic Button:** Clicking the magic button generates a random hex color, applies it to the background, and displays a confetti effect at the button's position.

## Dependencies

- [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) (for confetti animation)

## License

This project is for educational purposes.