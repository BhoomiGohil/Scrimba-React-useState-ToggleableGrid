import React from "react";
import { createRoot } from "react-dom/client";

import MainContent from "./js/MainContent";
import "./styles/Index.css";

// ------------------------------------- Render Elements on browser -------------------------------------

// Get the root element from the DOM where the React app will be mounted
const rootElement = document.querySelector("#root");

// Check if the root element exists in the DOM, if not throw an error
if (!rootElement) throw new Error("Failed to find the root h1");

// Create a root for rendering the React app
const root = createRoot(rootElement);

// Render the MainContent component inside the root element
root.render(<MainContent />);
