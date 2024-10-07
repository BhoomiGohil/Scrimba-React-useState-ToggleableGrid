import React from "react";
import boxes from "./boxes"; // Import the initial state for the boxes

// Box component responsible for rendering each square
function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent", // Change color based on 'on' prop
  };

  return (
    <button style={styles} className="box" onClick={props.toggle}></button> // Box element that toggles its state on click
  );
}

export default function MainContent() {
  const [squares, setSquares] = React.useState(boxes); // State to manage all the square components

  // Function to toggle the 'on' state of a box based on its id
  function toggle(id) {
    setSquares((prevState) => {
      return prevState.map((item) => {
        // If the box's id matches, toggle its 'on' state
        return item.id === id ? { ...item, on: !item.on } : item;
      });
    });
  }

  // Create Box elements dynamically from the squares array
  const squareElements = squares.map((item) => {
    return <Box key={item.id} on={item.on} toggle={() => toggle(item.id)} />;
  });

  return <main className="box-block">{squareElements}</main>; // Render all the Box components inside a container
}
