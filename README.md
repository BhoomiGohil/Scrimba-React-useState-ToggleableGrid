# Toggleable Boxes Grid

This project is a simple React application that displays a grid of boxes. Each box can be toggled between an "on" (filled) and "off" (transparent) state by clicking on it. The project uses React's state management to keep track of the boxes' statuses and re-renders the grid dynamically.

## Features

- **Toggle Functionality**: Each box can be clicked to toggle between an "on" and "off" state.
- **Dynamic Rendering**: The grid is rendered dynamically based on the current state of each box.

## How It Works

The application uses React's `useState` to manage the state of the boxes. Each box's color changes depending on its `on` status, and clicking a box will toggle this status.

The boxes are rendered using the `map()` function, creating a dynamic list of box components. The CSS ensures the boxes are displayed in a neat grid with hover and transition effects.

## Setup Instructions

1. Clone this repository to your local machine.
   ```bash
   clone git https://github.com/BhoomiGohil/Scrimba-React-useState-ToggleableGrid.git
   cd Scrimba-React-useState-ToggleableGrid
   ```
2. Navigate to the project directory and install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser and go to `http://localhost:3000` to view the application.

## File Structure

- `src/`
  - `components/`: Contains the `Box` and `MainContent` components.
  - `styles/`: Contains the CSS files for styling.
  - `boxes.js`: Contains the initial state for the boxes.

## Usage

Click on any box in the grid to toggle its state. The background color will change to indicate whether the box is "on" or "off."
